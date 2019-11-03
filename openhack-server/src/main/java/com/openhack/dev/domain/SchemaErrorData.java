package com.openhack.dev.domain;

import java.util.List;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class SchemaErrorData {

	private List<Errors> errorsData;
	private String detailedErrorData;
}
