package com.openhack.dev.service;

import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import com.openhack.dev.domain.ErrorData;
import com.openhack.dev.domain.Errors;
import com.openhack.dev.domain.FileMetadata;
import com.openhack.dev.domain.RootJosonObject;
import com.openhack.dev.domain.SchemaErrorData;
import com.openhack.dev.enums.ErrorStatus;
import com.openhack.dev.enums.ValidateStatus;
import com.openhack.dev.repository.FileUploadRepository;
import com.openhack.dev.util.SchemaValidationUtil;

@Service
public class FileUploadService {

	@Autowired
	FileUploadRepository fileUploadRepository;
	@Autowired
	SchemaValidationUtil schemaValidationUtil;
	@Autowired
	ITRDroolsService itrDroolsService;
	private static final Logger logger = LoggerFactory.getLogger(FileUploadService.class);
	/*
	 * @Autowired FileUploadKafkaConfiguration uploadKafkaConfiguration;
	 */

	public FileMetadata saveFileMetadata(FileMetadata fileMetadata) {

		fileUploadRepository.save(fileMetadata);

		return fileMetadata;

	}

	public List<FileMetadata> saveSingleFileData(MultipartFile file) {

		List<FileMetadata> fileMetadataList = new ArrayList<>();
		String jsonFielData = "";
		FileMetadata fileMetadata = new FileMetadata();
		fileMetadata.setFileName(file.getOriginalFilename());
		try {
			jsonFielData = convertJsonFileToString(file.getInputStream());
		} catch (IOException e) {
			logger.info(e.toString());
		}
		fileMetadata.setJsonData(jsonFielData);
		ValidateStatus validateStatus = ValidateStatus.SUCCESS;
		fileMetadata.setValidateStatus(validateStatus);
		fileMetadataList.add(fileMetadata);
		saveFileMetadata(fileMetadata);
		initiateKafkaMessage(fileMetadata.getId());
		return fileMetadataList;
	}

	public List<FileMetadata> saveMultiFileData(MultipartFile[] files, String errorList, boolean isServerValidation) throws JsonParseException, JsonMappingException, IOException {

		List<FileMetadata> fileMetadataList = new ArrayList<>();
		for (MultipartFile file : files) {

			String jsonFileData = "";
			FileMetadata fileMetadata = new FileMetadata();
			fileMetadata.setFileName(file.getOriginalFilename());
			try {
				jsonFileData = convertJsonFileToString(file.getInputStream());
			} catch (IOException e) {
				logger.error(e.toString());
			}
			fileMetadata.setJsonData(jsonFileData);
			ValidateStatus validateStatus = ValidateStatus.SUCCESS;
			fileMetadata.setValidateStatus(validateStatus);
			if (!isServerValidation) {
				List<ErrorData> list = new ArrayList<>();
				// convert String errorList to Errors object
				Gson gson = new Gson();
				Errors[] errorsList = gson.fromJson(errorList, Errors[].class);
				/* Test Error List */
				if (errorsList.length > 0) {
					ValidateStatus validateStatusError = ValidateStatus.ERROR;
					fileMetadata.setValidateStatus(validateStatusError);
					for (Errors errors : errorsList) {
						ErrorData errorData = new ErrorData();
						ErrorStatus errorState = ErrorStatus.SCHEMA_ERROR;
						errorData.setErrorType(errorState);
						errorData.setErrorDescription(errors.getErrorDescription());
						list.add(errorData);
					}

					fileMetadata.setErrorDataList(list);
				}
			} else {
				List<ErrorData> lists = new ArrayList<>();
				List<Errors> errorsList = null;
				SchemaErrorData schemaErrorData = null;
				schemaErrorData = schemaValidationUtil.getValidationDetails(jsonFileData);
				fileMetadata.setDetailedErrorData(schemaErrorData.getDetailedErrorData());
				errorsList = schemaErrorData.getErrorsData();
				if (errorsList != null && !errorsList.isEmpty()) {
					ValidateStatus validateStatusError = ValidateStatus.ERROR;
					fileMetadata.setValidateStatus(validateStatusError);
					for (Errors errors : errorsList) {
						ErrorData errorData = new ErrorData();
						ErrorStatus errorState = ErrorStatus.SCHEMA_ERROR;
						errorData.setErrorType(errorState);
						errorData.setErrorDescription(errors.getErrorDescription());
						lists.add(errorData);
					}

					fileMetadata.setErrorDataList(lists);
				}

			}

			if (fileMetadata.getErrorDataList() == null || fileMetadata.getErrorDataList().isEmpty()) {
				logger.info("Inside drools validation [        ]");
				RootJosonObject validatedItrObj = null;
				//Gson gson = new GsonBuilder().create();
				//RootJosonObject rootJsonObject = gson.fromJson(jsonFileData, RootJosonObject.class);
				ObjectMapper mapper = new ObjectMapper();
				RootJosonObject rootJsonObject = mapper.readValue(jsonFileData, RootJosonObject.class);
				validatedItrObj = itrDroolsService.validateData(rootJsonObject);
			}

			fileMetadataList.add(fileMetadata);
			saveFileMetadata(fileMetadata);
			initiateKafkaMessage(fileMetadata.getId());

		}
		return fileMetadataList;
	}

	public String convertJsonFileToString(InputStream fileInputStream) {
		String jsonDataString = "";
		InputStream inputStream = fileInputStream;
		JSONParser jsonParser = new JSONParser();
		try {
			jsonDataString = jsonParser.parse(new InputStreamReader(inputStream, StandardCharsets.UTF_8)).toString();
		} catch (IOException | ParseException e) {
			logger.error(e.toString());
		}
		return jsonDataString;
	}

	public void initiateKafkaMessage(String validateKey) {

		/* uploadKafkaConfiguration.sendMessage(validateKey); */
	}

	public List<FileMetadata> getAllFileValidateData() {

		List<FileMetadata> fileMetadataList = new ArrayList<>();
		fileMetadataList = fileUploadRepository.findAll();
		return fileMetadataList;
	}

	public Optional<FileMetadata> getFileValidateDataById(String id) {
		Optional<FileMetadata> fileMetadata = null;
		fileMetadata = fileUploadRepository.findById(id);
		return fileMetadata;
	}

	public void deleteValidateFielData(String validateId) {

		fileUploadRepository.deleteById(validateId);

	}

	public void deleteAllValidateFielData() {
		fileUploadRepository.deleteAll();
	}
}
