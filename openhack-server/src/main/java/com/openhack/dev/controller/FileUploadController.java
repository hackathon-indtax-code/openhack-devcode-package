package com.openhack.dev.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.websocket.server.PathParam;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.openhack.dev.domain.FileMetadata;
import com.openhack.dev.service.FileUploadService;

@RestController
@RequestMapping("api")
public class FileUploadController {

	@Autowired
	FileUploadService fileUploadService;

	private static final Logger logger = LoggerFactory.getLogger(FileUploadController.class);

	@PostMapping("/uploadFile")
	public ResponseEntity<List<FileMetadata>> uploadFile(@RequestParam("file") MultipartFile file) {

		List<FileMetadata> fileMetadataList = new ArrayList<FileMetadata>();
		fileMetadataList = fileUploadService.saveSingleFileData(file);
		return new ResponseEntity<List<FileMetadata>>(fileMetadataList, HttpStatus.OK);
	}

	@PostMapping("/uploadMultipleFiles")
	public ResponseEntity<List<FileMetadata>> uploadMultipleFiles(@RequestParam("files") MultipartFile[] files) {

		List<FileMetadata> fileMetadataList = new ArrayList<FileMetadata>();
		fileMetadataList = fileUploadService.saveMultiFileData(files);
		return new ResponseEntity<List<FileMetadata>>(fileMetadataList, HttpStatus.OK);
	}

	@GetMapping("/getAllFileValidateData")
	public ResponseEntity<List<FileMetadata>> getAllFileValidateData() {
		List<FileMetadata> fileMetadataList = new ArrayList<FileMetadata>();
		fileMetadataList = fileUploadService.getAllFileValidateData();
		return new ResponseEntity<List<FileMetadata>>(fileMetadataList, HttpStatus.OK);
	}

	@GetMapping("/getFileValidateDataById/{id}")
	public ResponseEntity<Optional<FileMetadata>> getFileValidateData(@PathVariable String id) {
		Optional<FileMetadata> fileMetadata = null;
		fileMetadata = fileUploadService.getFileValidateDataById(id);
		return new ResponseEntity<Optional<FileMetadata>>(fileMetadata, HttpStatus.OK);
	}

	@DeleteMapping("/deleteValidateFielData/{validateId}")
	public ResponseEntity<?> deleteValidateFielDataById(@PathVariable String validateId) {
		fileUploadService.deleteValidateFielData(validateId);
		return new ResponseEntity<>(HttpStatus.OK);

	}

	@DeleteMapping("/deleteAllValidateFielData")
	public ResponseEntity<?> deleteAllValidateFielData() {
		fileUploadService.deleteAllValidateFielData();
		return new ResponseEntity<>(HttpStatus.OK);

	}

}
