package com.francooliveri.ToDoApp.controller;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.francooliveri.ToDoApp.entity.ToDo;
import com.francooliveri.ToDoApp.service.FolderService;
import com.francooliveri.ToDoApp.service.ToDoService;

@RestController
@RequestMapping("/to-do")
public class ToDoController {
	
	@Autowired
	ToDoService service;
	
	
	@GetMapping()
	public ArrayList<ToDo> getAllToDos(){
		return service.getAllToDos();
	}
	
	@GetMapping(path = "/{id}")
	public Optional<ToDo> getToDoById(@PathVariable("id") long id) {
		return service.getToDoById(id);
	}
	
	@PostMapping(path = "/{folder_id}")
	public ToDo saveToDo(@RequestBody ToDo task, @PathVariable("folder_id")long folderId) {
		return this.service.saveToDo(task, folderId);
	}
	
	@PutMapping()
	public ToDo updateToDo(@RequestBody ToDo task) {
		return this.service.updateToDo(task);
	}
	
	@DeleteMapping(path = "/{id}")
	public String deleteToDo(@PathVariable("id") long id) {
		boolean ok = service.deleteToDo(id);
		if(ok) 
		{
			return "El registro se elimino correctamente";
		}
		else {
			return "No se elimino el registro";
		}
		
	}
	
}
