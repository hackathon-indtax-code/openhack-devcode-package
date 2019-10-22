package com.openhack.dev.configuration;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

import com.openhack.dev.constant.FileConstants;

@Service
public class FileUploadKafkaConfiguration {

	private static final Logger logger = LoggerFactory.getLogger(FileUploadKafkaConfiguration.class);

	@Autowired
	private KafkaTemplate<String, String> kafkaTemplate;

	public void sendMessage(String jsonValidateFileKey) {
		logger.info(String.format("$$ -> Producing message --> %s", jsonValidateFileKey));
		this.kafkaTemplate.send(FileConstants.JSON_VALIDATE, jsonValidateFileKey);
	}

	// The Kafka Listener is added for testing purpose and can be removed when
	// deployed to production
	@KafkaListener(topics = FileConstants.JSON_VALIDATE, groupId = "group_id")
	public void consume(String message) {
		logger.info(String.format("$$ -> Consumed Message -> %s", message));
	}
}
