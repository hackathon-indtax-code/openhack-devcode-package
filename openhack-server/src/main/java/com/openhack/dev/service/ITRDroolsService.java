package com.openhack.dev.service;

import org.kie.api.runtime.KieSession;
import org.springframework.stereotype.Service;

import com.openhack.dev.configuration.DroolsConfiguration;
import com.openhack.dev.domain.RootJosonObject;

@Service
public class ITRDroolsService {

	public RootJosonObject validateData(RootJosonObject rootJsonObject) {
		KieSession kieSession = new DroolsConfiguration().getKieSession();
		kieSession.insert(rootJsonObject);
		kieSession.fireAllRules();
		return rootJsonObject;

	}
}
