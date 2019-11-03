package com.openhack.dev.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.openhack.dev.domain.JsonSchemaData;

public interface JsonSchemaRepository extends MongoRepository<JsonSchemaData, String> {

	public JsonSchemaData findByMainSchema(boolean mainSchema);
}
