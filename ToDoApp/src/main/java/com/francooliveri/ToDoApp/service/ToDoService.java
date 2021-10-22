package com.francooliveri.ToDoApp.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.francooliveri.ToDoApp.entity.ToDo;
import com.francooliveri.ToDoApp.repository.ToDoRepository;

@Service
public class ToDoService {

	@Autowired
	ToDoRepository repo;
	
	public ArrayList<ToDo> getAllToDos(){
		return (ArrayList<ToDo>) repo.findAll();
	}
	
	public ToDo saveToDo(ToDo task) {
		return repo.save(task);
		
	}
	
	public boolean deleteToDo(Long id) {
		try{
			repo.deleteById(id);
			return true;
		}
		catch(Exception e){
			System.out.println(e);
			return false;
		}
	}
}
