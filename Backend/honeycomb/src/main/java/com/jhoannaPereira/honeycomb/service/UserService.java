package com.jhoannaPereira.honeycomb.service;

import com.jhoannaPereira.honeycomb.model.User;
import com.jhoannaPereira.honeycomb.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.logging.Logger;

@Service
@RequiredArgsConstructor
public class UserService {

    @Autowired
    private UserRepository userRepository;

    private static final Logger logger = Logger.getLogger(UserService.class.getName());

    //Guarda una tarea
    public void save(User user){
        logger.info("recibe los datos el service: " + user);
        userRepository.save(user);
    }
    //Saca todas los usuarios
    public List<User> findAll(){
        logger.info("recibe los datos el service");
        return userRepository.findAll();
    }
    //Busca por id el usuario
    public Optional<User> findById(String id){
        return userRepository.findById(id);
    }

}
