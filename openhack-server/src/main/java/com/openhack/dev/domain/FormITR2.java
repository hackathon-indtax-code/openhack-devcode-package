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
@JsonPropertyOrder({ "FormName", "Description", "AssessmentYear" })
public class FormITR2 {

	@JsonProperty("FormName")
	private String formName;
	@JsonProperty("Description")
	private String description;
	@JsonProperty("AssessmentYear")
	private Integer assessmentYear;
	@JsonIgnore
	private Map<String, Object> additionalProperties = new HashMap<String, Object>();

	@JsonProperty("FormName")
	public String getFormName() {
		return formName;
	}

	@JsonProperty("FormName")
	public void setFormName(String formName) {
		this.formName = formName;
	}

	@JsonProperty("Description")
	public String getDescription() {
		return description;
	}

	@JsonProperty("Description")
	public void setDescription(String description) {
		this.description = description;
	}

	@JsonProperty("AssessmentYear")
	public Integer getAssessmentYear() {
		return assessmentYear;
	}

	@JsonProperty("AssessmentYear")
	public void setAssessmentYear(Integer assessmentYear) {
		this.assessmentYear = assessmentYear;
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