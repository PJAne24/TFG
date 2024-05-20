package com.jhoannaPereira.honeycomb.repository;

import com.jhoannaPereira.honeycomb.model.Task;
import com.jhoannaPereira.honeycomb.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends MongoRepository<User, Integer>{
    public List<User> findAll();
    public Optional<User> findById(String id);

}
