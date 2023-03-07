package com.eliezercoding.usersystem.controller;

import com.eliezercoding.usersystem.model.User;
import com.eliezercoding.usersystem.repository.UserRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "#####################")
@RestController
@RequestMapping("#############")
public class UserController {

    UserRepository userRepository;

    // C - create user
    @PostMapping
    public User createUser(@RequestBody User user) {
        return this.userRepository.save(user);
    }

    // R - get all users
    @GetMapping
    public List<User> getAllUsers() {
        return this.userRepository.findAll();
    }


}
