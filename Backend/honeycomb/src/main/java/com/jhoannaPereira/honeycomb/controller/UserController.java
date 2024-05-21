package com.jhoannaPereira.honeycomb.controller;

import com.jhoannaPereira.honeycomb.model.User;
import com.jhoannaPereira.honeycomb.repository.UserRepository;
import com.jhoannaPereira.honeycomb.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.logging.Logger;

@RestController
@Component
@RequestMapping("/User")
@RequiredArgsConstructor
public class UserController {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private UserService userService;

    private static final Logger logger = Logger.getLogger(UserController.class.getName());


    @PostMapping("/crear")
    public ResponseEntity<User> createUser(@RequestBody User user) {
        try {
            User savedUser = userRepository.save(user);
            return new ResponseEntity<>(savedUser, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/buscar")
    public List<User> findAll(){
        return userService.findAll();
    }

    @GetMapping("/user/{id}")
    public User findById(@PathVariable String id){
        return userService.findById(id).get(); //hay que colocar el .get porque hemos colocado un optional
    }


}
