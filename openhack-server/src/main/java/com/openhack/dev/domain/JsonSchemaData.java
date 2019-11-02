package com.openhack.dev.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Document(collection = "jsonSchemaData")
@Getter
@Setter
@NoArgsConstructor
public class JsonSchemaData {

	@Id
	private String id;
	private String entityName;
	private String jsonSchema;
	private String mainSchema;

}
