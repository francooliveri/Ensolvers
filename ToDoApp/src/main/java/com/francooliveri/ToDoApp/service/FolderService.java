package com.francooliveri.ToDoApp.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.francooliveri.ToDoApp.entity.Folder;
import com.francooliveri.ToDoApp.repository.FolderRepository;

@Service
public class FolderService {
	
	@Autowired
	FolderRepository repo;
	
	public ArrayList<Folder> getAllFolders(){
		return (ArrayList<Folder>) repo.findAll();
	}
	
	public Folder saveFolder(Folder folder) {
		return repo.save(folder);
		
	}
	
	public boolean deleteFolder(Long id) {
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
