package com.jhoannaPereira.honeycomb.repository;

import com.jhoannaPereira.honeycomb.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User, Integer>{
}
