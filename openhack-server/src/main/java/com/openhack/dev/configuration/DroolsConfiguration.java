package com.openhack.dev.configuration;

import java.io.File;

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

public class DroolsConfiguration {

	private static final Logger logger = LoggerFactory.getLogger(DroolsConfiguration.class);

	private KieServices kieServices = KieServices.Factory.get();

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
		kieFileSystem.write(ResourceFactory
				.newFileResource(new File("C:\\drools_excel_file\\TotalIncome-Gender-DecisionTree.xlsx")));

		KieBuilder kb = kieServices.newKieBuilder(kieFileSystem);
		kb.buildAll();
		KieModule kieModule = kb.getKieModule();

		KieContainer kContainer = kieServices.newKieContainer(kieModule.getReleaseId());

		return kContainer.newKieSession();

	}
}
