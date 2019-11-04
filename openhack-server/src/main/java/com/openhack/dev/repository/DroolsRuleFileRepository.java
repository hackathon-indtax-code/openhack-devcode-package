package com.openhack.dev.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.openhack.dev.domain.DroolsRuleFile;
@Repository
public interface DroolsRuleFileRepository extends MongoRepository<DroolsRuleFile, String> {

}
