package com.example.demo.service;

import java.util.Date;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.demo.dto.UserDto;
import com.example.demo.model.User;
import com.example.demo.repo.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserServiceImp implements UserService {

	private final UserRepository repository;
	private final ModelMapper mapper;
	private final Logger logger;
	private final PasswordEncoder passwordEncoder;
	
	
	@Transactional
	public UserDto save(User user) {
		if(user.getEmail() == null || user.getEmail().equals("") || user.getUsername().equals("") ||  user.getUsername() == null) {
			logger.error("Email and Username can not be empty or null ");
			throw new NullPointerException("Email and Username can not be empty or null");
		}
		user.setRealPassword(user.getPassword());
		user.setCreatedDate(new Date());
		user.setStatus(1);
		user.setPassword(passwordEncoder.encode(user.getRealPassword()));
		user  = repository.save(user);
		logger.info("User is saved");
		
		UserDto dto =  mapper.map(user, UserDto.class);
		return dto;
	}
	
	public UserDto getUser(Long id) {
		User user = repository.findUserById(id);
		
		if(user == null) {
			logger.error("There is no user with "+id);
			throw new IllegalArgumentException("There is no user with "+id);
		}
		logger.info("User is ok");
		UserDto dto =  mapper.map(user, UserDto.class);
		return dto;
	}
	
	public Boolean deleteUser(Long id) {
		User user = repository.getOne(id);
		
		if(user == null)
			throw new IllegalArgumentException("There is no user with "+id);
		user.setStatus(0);
		repository.save(user);
		return true;
	}
}
