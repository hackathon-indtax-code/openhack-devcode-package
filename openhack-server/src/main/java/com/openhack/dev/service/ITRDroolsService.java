package com.openhack.dev.service;

import org.kie.api.runtime.KieSession;
import org.springframework.stereotype.Service;

import com.openhack.dev.configuration.DroolsConfiguration;
import com.openhack.dev.domain.ITR;

@Service
public class ITRDroolsService {

	public ITR validateData(ITR itr) {
		KieSession kieSession = new DroolsConfiguration().getKieSession();
		kieSession.insert(itr);
		kieSession.fireAllRules();
		return itr;

	}
}
