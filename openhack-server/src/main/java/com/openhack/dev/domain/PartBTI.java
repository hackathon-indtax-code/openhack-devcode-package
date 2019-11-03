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
@JsonPropertyOrder({ "IncFromOS", "TotalTI" })
public class PartBTI {

	@JsonProperty("IncFromOS")
	private IncFromOS incFromOS;
	@JsonProperty("TotalTI")
	private Integer totalTI;
	@JsonIgnore
	private Map<String, Object> additionalProperties = new HashMap<String, Object>();

	@JsonProperty("IncFromOS")
	public IncFromOS getIncFromOS() {
		return incFromOS;
	}

	@JsonProperty("IncFromOS")
	public void setIncFromOS(IncFromOS incFromOS) {
		this.incFromOS = incFromOS;
	}

	@JsonProperty("TotalTI")
	public Integer getTotalTI() {
		return totalTI;
	}

	@JsonProperty("TotalTI")
	public void setTotalTI(Integer totalTI) {
		this.totalTI = totalTI;
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
