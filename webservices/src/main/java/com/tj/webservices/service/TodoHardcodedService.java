package com.tj.webservices.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

import com.tj.webservices.entity.Todo;

@Service
public class TodoHardcodedService {
	
	private static List<Todo> todos = new ArrayList<Todo>();
	private static int idCounter = 0;
	
	static {
		todos.add(new Todo(++idCounter, "tj", "Learning", new Date(), false));
		todos.add(new Todo(++idCounter, "tj+", "Learning+", new Date(), false));
		todos.add(new Todo(++idCounter, "tj++", "Learning++", new Date(), false));
	}
	
	public List<Todo> findAll(){
		return todos;
	}

}
