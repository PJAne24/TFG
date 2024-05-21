package com.jhoannaPereira.honeycomb.service;

import com.jhoannaPereira.honeycomb.model.Task;
import com.jhoannaPereira.honeycomb.repository.TaskRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.logging.Logger;

@Service
@RequiredArgsConstructor
public class TaskService {

    @Autowired
    private TaskRepository taskRepository;

    private static final Logger logger = Logger.getLogger(TaskService.class.getName());

    //Guarda una tarea
    public void save(Task task){
        logger.info("recibe los datos el service: " + task);
        taskRepository.save(task);
    }
    //Saca todas las tareas
    public List<Task> findAll(){
        logger.info("recibe los datos el service");
        return taskRepository.findAll();
    }
    //Busca por id la tarea
    public Optional<Task> findById(String id){
        return taskRepository.findById(id);
    }
    public List<Task> findByIdUser(String idUser){
        logger.info("recibe los datos el service");
        return taskRepository.findByIdUser(idUser);
    }
    //Eliminar tarea
    public void deleteById(String id){
        taskRepository.deleteById(id);
    }
}
