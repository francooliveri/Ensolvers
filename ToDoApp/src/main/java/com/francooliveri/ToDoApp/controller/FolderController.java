package com.francooliveri.ToDoApp.controller;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.francooliveri.ToDoApp.entity.Folder;
import com.francooliveri.ToDoApp.entity.ToDo;
import com.francooliveri.ToDoApp.service.FolderService;

@RestController
@CrossOrigin(origins = "*", methods= {RequestMethod.GET ,RequestMethod.POST, RequestMethod.DELETE, RequestMethod.PUT})
@RequestMapping("/folders")
public class FolderController {

	@Autowired
	FolderService service;
	
	@GetMapping()
	public ArrayList<Folder> getAllFolders(){
		return service.getAllFolders();
	}
	
	@GetMapping(path = "/{id}")
	public Optional<Folder> getToDoById(@PathVariable("id") long id) {
		return service.getFolderById(id);
	}
	
	@PostMapping()
	public Folder updateFolder(@RequestBody Folder folder) {
		return this.service.saveFolder(folder);
	}
	
	@PutMapping()
	public Folder saveFolder(@RequestBody Folder folder) {
		return this.service.saveFolder(folder);
	}
	
	@DeleteMapping(path = "/{id}")
	public String deleteToDo(@PathVariable("id") long id) {
		boolean ok = service.deleteFolder(id);
		if(ok) 
		{
			return "La carpeta se elimino correctamente";
		}
		else {
			return "No se elimino la carpeta";
		}
		
	}
}
