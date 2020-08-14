package com.example.demo.service;

import com.example.demo.dto.UserDto;
import com.example.demo.model.User;

public interface UserService {
	public UserDto save(User user);

	public Boolean deleteUser(Long id);

	public UserDto getUser(Long id);
}
