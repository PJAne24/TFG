package com.jhoannaPereira.honeycomb.service;

import com.jhoannaPereira.honeycomb.controller.EventController;
import com.jhoannaPereira.honeycomb.model.Event;
import com.jhoannaPereira.honeycomb.repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.logging.Logger;

@Service
public class EventService {
    @Autowired
    private EventRepository eventRepository;
    private static final Logger logger = Logger.getLogger(EventService.class.getName());
    public List<Event> getAllEvents() {
        logger.info("recibe los datos el service");
        return eventRepository.findAll();
    }
    public List<Event> findByIdUser(String idUser){
        logger.info("recibe los datos el service");
        return eventRepository.findByIdUser(idUser);
    }


    public Event createEvent(@RequestBody Event event) {
        logger.info("recibe los datos el service");
        return eventRepository.save(event);
    }
}
