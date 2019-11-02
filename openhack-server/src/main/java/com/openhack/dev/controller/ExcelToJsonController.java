package com.openhack.dev.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.openhack.dev.domain.JsonSchemaData;
import com.openhack.dev.service.ExcelToJsonService;

@RestController
@RequestMapping("files")
public class ExcelToJsonController {

	@Autowired
	ExcelToJsonService excelToJsonService;

	private static final Logger logger = LoggerFactory.getLogger(ExcelToJsonController.class);

	@PostMapping("/convertToJson")
	public ResponseEntity<String> convert(@RequestParam("file") MultipartFile multipartFile) {
		String finalFileDataAsString = "";
		finalFileDataAsString = excelToJsonService.createJSONAndTextFileFromExcel(multipartFile);
		return new ResponseEntity<>(finalFileDataAsString, HttpStatus.OK);
	}

	@PostMapping("/saveJsonSchemaData")
	public ResponseEntity<List<JsonSchemaData>> saveJsonSchemaData(
			@RequestBody List<JsonSchemaData> jsonSchemaDataList) {

		List<JsonSchemaData> schemaDataList = null;
		schemaDataList = excelToJsonService.saveJsonSchemaData(jsonSchemaDataList);
		return new ResponseEntity<>(schemaDataList, HttpStatus.OK);

	}

}
