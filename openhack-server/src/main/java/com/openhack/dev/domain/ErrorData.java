package com.openhack.dev.domain;

import com.openhack.dev.enums.ErrorStatus;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class ErrorData {

	private ErrorStatus errorType;
	private String errorDescription;

}
