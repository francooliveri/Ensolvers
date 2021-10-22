package com.francooliveri.ToDoApp.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.francooliveri.ToDoApp.entity.ToDo;

@Repository
public interface ToDoRepository extends CrudRepository<ToDo, Long> {
	
	

}
