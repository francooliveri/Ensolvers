package com.francooliveri.ToDoApp.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.francooliveri.ToDoApp.entity.User;



@Repository
public interface UserRepository extends CrudRepository<User, Long>{
	
	@Query("SELECT U FROM User U WHERE U.username =:username and U.password =:password")
	Optional<User> findByCredentials(String username, String password);
}
