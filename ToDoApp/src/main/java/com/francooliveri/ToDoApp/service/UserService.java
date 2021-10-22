package com.francooliveri.ToDoApp.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.francooliveri.ToDoApp.entity.User;
import com.francooliveri.ToDoApp.repository.UserRepository;
import com.francooliveri.ToDoApp.utils.GenericResponse;
import static com.francooliveri.ToDoApp.utils.Global.*;



@Service
public class UserService{

	@Autowired
	UserRepository repository;
	
	public GenericResponse getUserByCredentials(String username, String password) {
		GenericResponse response = new GenericResponse();
		response.setType(TIPO_AUTH);
		
		Optional<User> optUser = repository.findByCredentials(username, password);
		if(optUser.isPresent()) {
			response.setAnswer(ANS_OK);
			response.setMessage("Credenciales Correctas");
			response.setBody(optUser.get());
		}else {
			response.setAnswer(ANS_WARNING);
			response.setMessage("Datos de ingreso incorrectos");
			response.setBody(false);			
		}
		
		return response;
	}
	
}
