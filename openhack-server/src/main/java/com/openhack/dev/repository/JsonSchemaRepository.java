package com.openhack.dev.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.openhack.dev.domain.JsonSchemaData;
@Repository
public interface JsonSchemaRepository extends MongoRepository<JsonSchemaData, String> {

	public JsonSchemaData findByMainSchema(boolean mainSchema);
}
