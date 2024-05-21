package com.jhoannaPereira.honeycomb.controller;

import com.jhoannaPereira.honeycomb.model.Task;
import com.jhoannaPereira.honeycomb.model.User;
import com.jhoannaPereira.honeycomb.service.TaskService;
import com.jhoannaPereira.honeycomb.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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

    @Autowired
    private UserService userService;

    private static final Logger logger = Logger.getLogger(TaskController.class.getName());


    @PostMapping("/crear")
    public void save(@RequestBody Task task){
        logger.info("recibe los datos el controller: " + task);
        taskService.save(task);
    }

    @GetMapping("/buscar")
    public ResponseEntity<List<Task>> getAllTasks(@RequestHeader("userId") String userId) {
        User user = userService.findById(userId).orElse(null);

        if (user == null) {
            return ResponseEntity.badRequest().build();
        }

        List<Task> tasks;
        if (user.getRole() == 1) { // Si el rol es 1 (admin) función para futuras versiones
            tasks = taskService.findAll();
        } else {
            tasks = taskService.findByIdUser(userId);
        }

        return ResponseEntity.ok(tasks);
    }


    @GetMapping("/task/{id}")
    public Task findById(@PathVariable String id){
        return taskService.findById(id).get(); //hay que colocar el .get porque hemos colocado un optional
    }

    @GetMapping("/user/{userId}")
    public List<Task> getTasksByUserId(@PathVariable String userId) {
        return taskService.findByIdUser(userId);
    }

    @DeleteMapping("/eliminar/{id}")
    public void deleteById(@PathVariable String id){
        taskService.deleteById(id);
    }

    @PutMapping("/actualizar")
    public void update(@RequestBody Task task){
        taskService.save(task);
    }


}
