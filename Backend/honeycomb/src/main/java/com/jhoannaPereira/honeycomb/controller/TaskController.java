package com.jhoannaPereira.honeycomb.controller;

import com.jhoannaPereira.honeycomb.model.Task;
import com.jhoannaPereira.honeycomb.service.TaskService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.logging.Logger;


@RestController
@Component
@RequestMapping("/Task")
@RequiredArgsConstructor
public class TaskController {

    @Autowired
    private TaskService taskService;

    private static final Logger logger = Logger.getLogger(TaskController.class.getName());


    @PostMapping("/crear")
    public void save(@RequestBody Task task){
        logger.info("recibe los datos el controller: " + task);
        taskService.save(task);
    }

    @GetMapping("/buscar")
    public List<Task> findAll(){
        return taskService.findAll();
    }

    @GetMapping("/task/{id}")
    public Task findById(@PathVariable int id){
        return taskService.findById(id).get(); //hay que colocar el .get porque hemos colocado un optional
    }

    @DeleteMapping("/task/{id}")
    public void deleteById(@PathVariable int id){
        taskService.deleteById(id);
    }

    @PutMapping("/tasks")
    public void update(@RequestBody Task task){
        taskService.save(task);
    }


}
