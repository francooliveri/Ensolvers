package com.francooliveri.ToDoApp.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;


@Entity
@Table(name="folder")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class Folder {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(unique = true, nullable = false, name="folder_id")
	private long id;
	@Column(nullable = false)
	private String name;
	@OneToMany(mappedBy = "folder", cascade = CascadeType.REMOVE, orphanRemoval = true)
	//@JsonManagedReference
	private List<ToDo> toDoList = new ArrayList<ToDo>();
	
	

	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public List<ToDo> getToDoList() {
		return toDoList;
	}
	public void setToDoList(List<ToDo> toDoList) {
		this.toDoList = toDoList;
	}
}
