package com.openhack.dev.util;

import java.util.ArrayList;
import java.util.List;

import org.everit.json.schema.Schema;
import org.everit.json.schema.ValidationException;
import org.everit.json.schema.loader.SchemaLoader;
import org.json.JSONException;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.openhack.dev.domain.Errors;
import com.openhack.dev.domain.JsonSchemaData;
import com.openhack.dev.domain.SchemaErrorData;
import com.openhack.dev.repository.FileUploadRepository;
import com.openhack.dev.repository.JsonSchemaRepository;

@Component
public class SchemaValidationUtil {
	private static final Logger logger = LoggerFactory.getLogger(SchemaValidationUtil.class);

	@Autowired
	JsonSchemaRepository schemaRepository;
	@Autowired
	FileUploadRepository uploadRepository;

	public SchemaErrorData getValidationDetails(String jsonFileData) {
		SchemaErrorData schemaErrorData = new SchemaErrorData();
		List<Errors> errorsList = new ArrayList<Errors>();
		String jsonData = jsonFileData;
		String jsonSchema = "";
		JsonSchemaData jsonSchemaData = new JsonSchemaData();
		jsonSchemaData = schemaRepository.findByMainSchema(true);
		jsonSchema = jsonSchemaData.getJsonSchema();
		JSONObject rawSchema = new JSONObject(jsonSchema);
		Schema schema = SchemaLoader.load(rawSchema);

		try {
			schema.validate(new JSONObject(jsonData));
		} catch (ValidationException exception) {

			List<ValidationException> validationExceptions = exception.getCausingExceptions();

			for (ValidationException validationException : validationExceptions) {
				Errors errors = new Errors();
				errors.setErrorDescription(validationException.getErrorMessage());
				errorsList.add(errors);
			}
			schemaErrorData.setErrorsData(errorsList);
			schemaErrorData.setDetailedErrorData(exception.toJSON().toString());

		}

		return schemaErrorData;

	}

}
