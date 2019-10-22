package com.openhack.dev.service;

import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.openhack.dev.configuration.FileUploadKafkaConfiguration;
import com.openhack.dev.constant.FileConstants;
import com.openhack.dev.domain.FileMetadata;
import com.openhack.dev.repository.FileUploadRepository;

@Service
public class FileUploadService {

	@Autowired
	FileUploadRepository fileUploadRepository;
	@Autowired
	FileUploadKafkaConfiguration uploadKafkaConfiguration;

	public FileMetadata saveFileMetadata(FileMetadata fileMetadata) {

		fileUploadRepository.save(fileMetadata);

		return fileMetadata;

	}

	public List<FileMetadata> saveSingleFileData(MultipartFile file) {

		List<FileMetadata> fileMetadataList = new ArrayList<FileMetadata>();
		String jsonFielData = "";
		FileMetadata fileMetadata = new FileMetadata();
		fileMetadata.setFileName(file.getOriginalFilename());
		try {
			jsonFielData = convertJsonFileToString(file.getInputStream());
		} catch (IOException e) {
			e.printStackTrace();
		}
		fileMetadata.setJsonData(jsonFielData);
		fileMetadata.setValidateStatus(FileConstants.IS_SUBMITTED);
		fileMetadataList.add(fileMetadata);
		saveFileMetadata(fileMetadata);
		initiateKafkaMessage(fileMetadata.getId());
		return fileMetadataList;
	}

	public List<FileMetadata> saveMultiFileData(MultipartFile[] files) {

		List<FileMetadata> fileMetadataList = new ArrayList<FileMetadata>();
		for (MultipartFile file : files) {

			String jsonFielData = "";
			FileMetadata fileMetadata = new FileMetadata();
			fileMetadata.setFileName(file.getOriginalFilename());
			try {
				jsonFielData = convertJsonFileToString(file.getInputStream());
			} catch (IOException e) {
				e.printStackTrace();
			}
			fileMetadata.setJsonData(jsonFielData);
			fileMetadata.setValidateStatus(FileConstants.IS_SUBMITTED);
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
		JSONObject jsonObject = new JSONObject();
		try {
			jsonObject = (JSONObject) jsonParser.parse(new InputStreamReader(inputStream, "UTF-8"));
			jsonDataString = jsonObject.toJSONString();
		} catch (UnsupportedEncodingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return jsonDataString;
	}

	public void initiateKafkaMessage(String validateKey) {

		uploadKafkaConfiguration.sendMessage(validateKey);
	}

	public List<FileMetadata> getAllFileValidateData() {

		List<FileMetadata> fileMetadataList = new ArrayList<FileMetadata>();
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
