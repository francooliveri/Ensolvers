package com.francooliveri.ToDoApp.service;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.francooliveri.ToDoApp.entity.Folder;
import com.francooliveri.ToDoApp.entity.ToDo;
import com.francooliveri.ToDoApp.repository.FolderRepository;
import com.francooliveri.ToDoApp.repository.ToDoRepository;

@Service
public class ToDoService {

	@Autowired
	ToDoRepository repo;

	@Autowired
	FolderRepository fRepo;

	public ArrayList<ToDo> getAllToDos() {
		return (ArrayList<ToDo>) repo.findAll();
	}
	
	public ArrayList<ToDo> getToDosByFolderId(long folderId){
		Optional<Folder> opt = fRepo.findById(folderId);
		Folder folder = opt.isPresent() ? opt.get() : null;
		ArrayList <ToDo> todoList = new ArrayList<ToDo>();
		for (ToDo toDo : folder.getToDoList()) {
			todoList.add(toDo);
		}
		return todoList;
	}
	
	public ArrayList<ToDo> deleteCompletedToDosByFolderId(long folderId){
		Optional<Folder> opt = fRepo.findById(folderId);
		Folder folder = opt.isPresent() ? opt.get() : null;
		ArrayList <ToDo> todoList = new ArrayList<ToDo>();
		for (ToDo toDo : folder.getToDoList()) {
			if(toDo.isChecked()) {
				repo.delete(toDo);
			}
		}
		return todoList;
	}

	public Optional<ToDo> getToDoById(Long id) {
		return repo.findById(id);
	}

	public ToDo saveToDo(ToDo task, long folderId) {
		Optional<Folder> opt = fRepo.findById(folderId);
		Folder folder = opt.isPresent() ? opt.get() : null;
		if (folder != null) {
			task.setFolder(folder);
			return repo.save(task);
		}
		return null;

	}

	public ToDo updateToDo(ToDo task) {
		return repo.save(task);
	}

	public boolean deleteToDo(Long id) {
		try {
			repo.deleteById(id);
			return true;
		} catch (Exception e) {
			System.out.println(e);
			return false;
		}
	}
}
