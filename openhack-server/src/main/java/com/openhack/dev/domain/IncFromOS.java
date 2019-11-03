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
@JsonPropertyOrder({ "IncFromOS1", "IncFromOS2" })
public class IncFromOS {

	@JsonProperty("IncFromOS1")
	private Integer incFromOS1;
	@JsonProperty("IncFromOS2")
	private Integer incFromOS2;
	@JsonIgnore
	private Map<String, Object> additionalProperties = new HashMap<String, Object>();

	@JsonProperty("IncFromOS1")
	public Integer getIncFromOS1() {
		return incFromOS1;
	}

	@JsonProperty("IncFromOS1")
	public void setIncFromOS1(Integer incFromOS1) {
		this.incFromOS1 = incFromOS1;
	}

	@JsonProperty("IncFromOS2")
	public Integer getIncFromOS2() {
		return incFromOS2;
	}

	@JsonProperty("IncFromOS2")
	public void setIncFromOS2(Integer incFromOS2) {
		this.incFromOS2 = incFromOS2;
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