package com.openhack.dev.domain;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class ExcelData {
	@JsonProperty(value = "Type")
	private String type;
	@JsonProperty(value = "ParentType")
	private String parentType;
	@JsonProperty(value = "Format")
	private String format;
	@JsonProperty(value = "Pattern")
	private String pattern;
	@JsonProperty(value = "Required")
	private String required;
	@JsonProperty(value = "Default")
	private String defaults;
	@JsonProperty(value = "EnumList")
	private String enumList;
	@JsonProperty(value = "Description")
	private String description;
	@JsonProperty(value = "MaxLength")
	private String maxLength;
	@JsonProperty(value = "MinLength")
	private String minLength;
	@JsonProperty(value = "Maximum")
	private String maximum;
	@JsonProperty(value = "Minimum")
	private String minimum;
	@JsonProperty(value = "MaxItems")
	private String maxItems;
	@JsonProperty(value = "MinItems")
	private String minItems;
	@JsonProperty(value = "Ignore")
	private String ignore;
	@JsonProperty(value = "Example")
	private String example;

}
