package com.eliezercoding.usersystem.controller;

import com.eliezercoding.usersystem.exception.ResourceNotFoundException;
import com.eliezercoding.usersystem.model.User;
import com.eliezercoding.usersystem.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//@CrossOrigin(origins = "#####################")
@RestController
@RequestMapping("#############")
public class UserController {

    @Autowired
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

    // R - get user by id
    @GetMapping("/{id}")
    public User getUserById(@PathVariable(value = "id") long userId) {
        return this.userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + userId));
    }

    // U - update user
    @PutMapping("/{id}")
    public User updateUser(@RequestBody User userNewDetails, @PathVariable("id") long userId) {
        User existingUser = this.userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + userId));

        existingUser.setFirstName(userNewDetails.getFirstName());
        existingUser.setLastName(userNewDetails.getLastName());
        existingUser.setEmailId(userNewDetails.getEmailId());
        existingUser.setRole(userNewDetails.getRole());

        return this.userRepository.save(existingUser);
    }

    // D - delete user by id
    @DeleteMapping("/{id}")
    public ResponseEntity<User> deleteUser(@PathVariable("id") long userId) {
        User userToDelete = this.userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + userId));

        this.userRepository.delete(userToDelete);
        return ResponseEntity.ok().build();
    }
}
