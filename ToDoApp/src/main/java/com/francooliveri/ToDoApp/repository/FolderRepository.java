package com.francooliveri.ToDoApp.repository;


import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.francooliveri.ToDoApp.entity.Folder;

@Repository
public interface FolderRepository extends CrudRepository<Folder, Long>{

}
