package com.openhack.dev.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Document(collection = "droolsRule")
@Getter
@Setter
@NoArgsConstructor
public class DroolsRuleFile {

	@Id
	private String id;
	private String title;

	private byte[] excelFile;

}
