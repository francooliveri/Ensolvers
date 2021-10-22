package com.francooliveri.ToDoApp.controller;


import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.francooliveri.ToDoApp.entity.User;
import com.francooliveri.ToDoApp.service.UserService;
import com.francooliveri.ToDoApp.utils.GenericResponse;

@CrossOrigin(origins = "*", allowCredentials = "")
@RestController
@RequestMapping("/login")
public class UserController {

	@Autowired
	UserService userService;

	@PostMapping()
	public GenericResponse getUserByCredentials(@RequestBody User user) {
		return userService.getUserByCredentials(user.getUsername(), user.getPassword());
	}
	
	
}
