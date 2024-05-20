package com.jhoannaPereira.honeycomb.controller;

import com.jhoannaPereira.honeycomb.model.User;
import com.jhoannaPereira.honeycomb.repository.UserRepository;
import com.jhoannaPereira.honeycomb.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
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
    public void save(@RequestBody User user){
        logger.info("recibe los datos el controller: " + user);
        userService.save(user);
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
