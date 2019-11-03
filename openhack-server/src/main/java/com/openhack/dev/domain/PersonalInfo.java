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
@JsonPropertyOrder({ "AssesseeName", "PAN", "Address", "DOB", "Gender" })
public class PersonalInfo {

	@JsonProperty("AssesseeName")
	private AssesseeName assesseeName;
	@JsonProperty("PAN")
	private String pAN;
	@JsonProperty("Address")
	private Address address;
	@JsonProperty("DOB")
	private String dOB;
	@JsonProperty("Gender")
	private String gender;
	@JsonIgnore
	private Map<String, Object> additionalProperties = new HashMap<String, Object>();

	@JsonProperty("AssesseeName")
	public AssesseeName getAssesseeName() {
		return assesseeName;
	}

	@JsonProperty("AssesseeName")
	public void setAssesseeName(AssesseeName assesseeName) {
		this.assesseeName = assesseeName;
	}

	@JsonProperty("PAN")
	public String getPAN() {
		return pAN;
	}

	@JsonProperty("PAN")
	public void setPAN(String pAN) {
		this.pAN = pAN;
	}

	@JsonProperty("Address")
	public Address getAddress() {
		return address;
	}

	@JsonProperty("Address")
	public void setAddress(Address address) {
		this.address = address;
	}

	@JsonProperty("DOB")
	public String getDOB() {
		return dOB;
	}

	@JsonProperty("DOB")
	public void setDOB(String dOB) {
		this.dOB = dOB;
	}

	@JsonProperty("Gender")
	public String getGender() {
		return gender;
	}

	@JsonProperty("Gender")
	public void setGender(String gender) {
		this.gender = gender;
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