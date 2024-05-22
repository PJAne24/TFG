package com.jhoannaPereira.honeycomb.repository;


import com.jhoannaPereira.honeycomb.model.Event;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface EventRepository extends MongoRepository<Event, String> {

    List<Event> findAll();
    List<Event> findByIdUser(String idUser);
}
