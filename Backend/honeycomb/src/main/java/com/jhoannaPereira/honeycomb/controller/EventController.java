package com.jhoannaPereira.honeycomb.controller;

import com.jhoannaPereira.honeycomb.model.Event;
import com.jhoannaPereira.honeycomb.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.logging.Logger;

@RestController
@RequestMapping("/Event")
public class EventController {

    private static final Logger logger = Logger.getLogger(EventController.class.getName());
    @Autowired
    private EventService eventService;

    @GetMapping("/")
    public List<Event> getAllEvents() {
        logger.info("recibe los datos el controller");
        return eventService.getAllEvents();
    }
    @GetMapping("/user/{userId}")
    public List<Event> getEventByUserId(@PathVariable String userId) {
        return eventService.findByIdUser(userId);
    }

    @PostMapping
    public Event createEvent(@RequestBody Event event) {
        logger.info("recibe los datos el controller");
        return eventService.createEvent(event);
    }
}
