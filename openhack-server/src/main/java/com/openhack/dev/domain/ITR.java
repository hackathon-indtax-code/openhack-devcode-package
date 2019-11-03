package com.openhack.dev.domain;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonAnySetter;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({ "CreationInfo", "Form_ITR2", "PartA_GEN1", "PartB-TI" })
public class ITR {

	@JsonProperty("CreationInfo")
	private CreationInfo creationInfo;
	@JsonProperty("Form_ITR2")
	private FormITR2 formITR2;
	@JsonProperty("PartA_GEN1")
	private PartAGEN1 partAGEN1;
	@JsonProperty("Part-BTI")
	private PartBTI partBTI;
	@JsonIgnore
	private Map<String, Object> additionalProperties = new HashMap<String, Object>();
	@JsonProperty("ValidationMessages")
	private List<String> validationMessages = new ArrayList<String>();
	@JsonProperty("ValidationMessages")
	public List<String> getValidationMessages() {
		return validationMessages;
	}
	@JsonProperty("ValidationMessages")
	public void setValidationMessages(String validationMessages) {
		this.validationMessages.add(validationMessages);
	}

	@JsonProperty("CreationInfo")
	public CreationInfo getCreationInfo() {
		return creationInfo;
	}

	@JsonProperty("CreationInfo")
	public void setCreationInfo(CreationInfo creationInfo) {
		this.creationInfo = creationInfo;
	}

	@JsonProperty("Form_ITR2")
	public FormITR2 getFormITR2() {
		return formITR2;
	}

	@JsonProperty("Form_ITR2")
	public void setFormITR2(FormITR2 formITR2) {
		this.formITR2 = formITR2;
	}

	@JsonProperty("PartA_GEN1")
	public PartAGEN1 getPartAGEN1() {
		return partAGEN1;
	}

	@JsonProperty("PartA_GEN1")
	public void setPartAGEN1(PartAGEN1 partAGEN1) {
		this.partAGEN1 = partAGEN1;
	}

	@JsonProperty("PartB-TI")
	public PartBTI getPartBTI() {
		return partBTI;
	}

	@JsonProperty("PartB-TI")
	public void setPartBTI(PartBTI partBTI) {
		this.partBTI = partBTI;
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
