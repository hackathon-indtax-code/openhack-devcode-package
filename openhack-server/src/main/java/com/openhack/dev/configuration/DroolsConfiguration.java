package com.openhack.dev.configuration;

import org.kie.api.KieServices;
import org.kie.api.builder.KieBuilder;
import org.kie.api.builder.KieFileSystem;
import org.kie.api.builder.KieModule;
import org.kie.api.builder.KieRepository;
import org.kie.api.builder.ReleaseId;
import org.kie.api.runtime.KieContainer;
import org.kie.api.runtime.KieSession;
import org.kie.internal.io.ResourceFactory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.openhack.dev.service.StoreDroolsResource;

@Component
public class DroolsConfiguration {

	@Autowired
	StoreDroolsResource droolsResource;

	private static final Logger logger = LoggerFactory.getLogger(DroolsConfiguration.class);

	private KieServices kieServices = KieServices.Factory.get();

	/*
	 * private KieFileSystem getKieFileSystem() throws IOException { KieFileSystem
	 * kieFileSystem = kieServices.newKieFileSystem(); List<String> rules =
	 * Arrays.asList("rules.xls"); for (String rule : rules) {
	 * kieFileSystem.write(ResourceFactory.newClassPathResource(rule)); } return
	 * kieFileSystem;
	 * 
	 * }
	 */

	/*
	 * public KieContainer getKieContainer() throws IOException {
	 * getKieRepository();
	 * 
	 * KieBuilder kb = kieServices.newKieBuilder(getKieFileSystem()); kb.buildAll();
	 * 
	 * KieModule kieModule = kb.getKieModule(); KieContainer kContainer =
	 * kieServices.newKieContainer(kieModule.getReleaseId());
	 * 
	 * return kContainer;
	 * 
	 * }
	 */

	private void getKieRepository() {
		final KieRepository kieRepository = kieServices.getRepository();
		kieRepository.addKieModule(new KieModule() {
			public ReleaseId getReleaseId() {
				return kieRepository.getDefaultReleaseId();
			}
		});
	}

	public KieSession getKieSession() {
		getKieRepository();
		KieFileSystem kieFileSystem = kieServices.newKieFileSystem();
		// kieFileSystem.write(ResourceFactory.newClassPathResource("com/mastertheboss/drools/rules/rules.xls"));
		kieFileSystem.write(ResourceFactory.newClassPathResource("TotalIncome-Gender-DecisionTree.xlsx"));

		KieBuilder kb = kieServices.newKieBuilder(kieFileSystem);
		kb.buildAll();
		KieModule kieModule = kb.getKieModule();

		KieContainer kContainer = kieServices.newKieContainer(kieModule.getReleaseId());

		return kContainer.newKieSession();

	}

}
