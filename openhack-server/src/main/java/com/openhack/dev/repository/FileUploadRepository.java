package com.openhack.dev.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.openhack.dev.domain.FileMetadata;
@Repository
public interface FileUploadRepository extends MongoRepository<FileMetadata, String> {

}
