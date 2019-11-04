package com.openhack.dev.domain;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor

@JsonPropertyOrder({ "ITR3" })
public class RootJosonObject {
	@JsonProperty("ITR3")
	private ITR itr3;
	@JsonProperty("ValidationMessages")
	private String validationMessages;

}
