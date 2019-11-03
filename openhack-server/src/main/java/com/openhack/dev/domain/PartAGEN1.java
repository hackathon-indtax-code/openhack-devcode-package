package com.openhack.dev.domain;

import java.util.HashMap;
import java.util.Map;
import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonAnySetter;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({ "PersonalInfo", "FilingStatus" })
public class PartAGEN1 {

	@JsonProperty("PersonalInfo")
	private PersonalInfo personalInfo;
	@JsonProperty("FilingStatus")
	private FilingStatus filingStatus;
	@JsonIgnore
	private Map<String, Object> additionalProperties = new HashMap<String, Object>();

	@JsonProperty("PersonalInfo")
	public PersonalInfo getPersonalInfo() {
		return personalInfo;
	}

	@JsonProperty("PersonalInfo")
	public void setPersonalInfo(PersonalInfo personalInfo) {
		this.personalInfo = personalInfo;
	}

	@JsonProperty("FilingStatus")
	public FilingStatus getFilingStatus() {
		return filingStatus;
	}

	@JsonProperty("FilingStatus")
	public void setFilingStatus(FilingStatus filingStatus) {
		this.filingStatus = filingStatus;
	}

	@JsonAnyGetter
	public Map<String, Object> getAdditionalProperties() {
		return this.additionalProperties;
	}

	@JsonAnySetter
	public void setAdditionalProperty(String name, Object value) {
		this.additionalProperties.put(name, value);
	}

}