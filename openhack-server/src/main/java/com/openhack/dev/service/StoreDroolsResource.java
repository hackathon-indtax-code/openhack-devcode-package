package com.openhack.dev.service;

import java.io.IOException;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class StoreDroolsResource {

	private byte[] droolsRuleSource;

	public void saveDroolsRuleFile(MultipartFile multipartFile) {

		try {
			this.droolsRuleSource = multipartFile.getBytes();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	public byte[] saveDroolsRuleFileSource() {

		return this.droolsRuleSource;
	}

}
