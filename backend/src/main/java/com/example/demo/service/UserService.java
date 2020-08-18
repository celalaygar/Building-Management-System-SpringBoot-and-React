package com.example.demo.service;

import org.springframework.http.ResponseEntity;

import com.example.demo.dto.UserDto;
import com.example.demo.model.User;

public interface UserService {
	public ResponseEntity<?> save(UserDto dto) throws Exception;

	public Boolean deleteUser(Long id);

	public UserDto getUser(Long id);
}
