package com.openhack.dev.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.openhack.dev.domain.FileMetadata;

public interface FileUploadRepository extends MongoRepository<FileMetadata, String> {

}
