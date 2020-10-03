package com.example.demo.service;

import javax.validation.Valid;

import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.demo.dto.BuildingDto;
import com.example.demo.error.ApiError;
import com.example.demo.error.NotFoundException;
import com.example.demo.jwt.config.JwtTokenUtil;
import com.example.demo.model.Building;
import com.example.demo.model.User;
import com.example.demo.repo.ApartmentRepository;
import com.example.demo.repo.BuildingRepository;
import com.example.demo.repo.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ControlService {
	public static final String TOKEN_PREFIX = "Bearer ";
	private final ModelMapper mapper;
	private final Logger logger;
	private final JwtTokenUtil tokenUtil;
	private final UserRepository userRepository;
	
	public ResponseEntity<?> controlUsername(String authHeader,String username) {
		String userNameFromToken = getUsernameFromToken(authHeader);
		if(!userNameFromToken.equals(username)){
			logger.error("User Names cannot match");
			ApiError error = new ApiError(403, "User Names cannot match", "api/user/"+authHeader);
			return ResponseEntity.status(HttpStatus.FORBIDDEN).body(error);
		}
		return ResponseEntity.ok(true);
	}
	public User getUser(String username) throws javassist.NotFoundException {
		User user = userRepository.findUserByUsernameWithStatusOne(username);
		if (user==null) {
			logger.error("There is no user with " + username);
			throw new javassist.NotFoundException("There is no user with " + username);
			//throw new IllegalArgumentException("There is no user with " + id);
		}
		return user;
	}
	public String getUsernameFromToken(String authHeader) {
		String username= null;
		if(authHeader != null && authHeader.startsWith(TOKEN_PREFIX)) {
			String token = authHeader.replace(TOKEN_PREFIX, "");
			username = tokenUtil.getUsernameFromToken(token);
		}
		return username;
	}
}
