package com.jhoannaPereira.honeycomb.repository;

import com.jhoannaPereira.honeycomb.model.Task;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
@Component
public interface TaskRepository extends MongoRepository<Task, String> {

    public List<Task> findAll();
    public Optional<Task> findById(String id);
    public void deleteById(String id);
}
