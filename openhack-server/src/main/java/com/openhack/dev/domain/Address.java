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
@JsonPropertyOrder({ "StateCode", "PinCode" })
public class Address {

	@JsonProperty("StateCode")
	private Integer stateCode;
	@JsonProperty("PinCode")
	private Integer pinCode;
	@JsonIgnore
	private Map<String, Object> additionalProperties = new HashMap<String, Object>();

	@JsonProperty("StateCode")
	public Integer getStateCode() {
		return stateCode;
	}

	@JsonProperty("StateCode")
	public void setStateCode(Integer stateCode) {
		this.stateCode = stateCode;
	}

	@JsonProperty("PinCode")
	public Integer getPinCode() {
		return pinCode;
	}

	@JsonProperty("PinCode")
	public void setPinCode(Integer pinCode) {
		this.pinCode = pinCode;
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
