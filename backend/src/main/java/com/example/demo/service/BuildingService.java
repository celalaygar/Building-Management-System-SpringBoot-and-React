package com.example.demo.service;

import java.util.Arrays;
import java.util.Date;
import java.util.List;

import javax.validation.Valid;

import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.dto.BuildingDto;
import com.example.demo.error.ApiError;
import com.example.demo.error.NotFoundException;
import com.example.demo.jwt.config.JwtTokenUtil;
import com.example.demo.model.Building;
import com.example.demo.model.User;
import com.example.demo.repo.BuildingRepository;
import com.example.demo.repo.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class BuildingService {
	private final BuildingRepository buildingRepository;
	private final ModelMapper mapper;
	private final Logger logger;
	private final JwtTokenUtil tokenUtil;
	private final UserRepository userRepository;
	private final ControlService controlService;
	public List<BuildingDto> getAll() throws Exception{
		List<Building> entityList = buildingRepository.findAll();
		BuildingDto [] dtoArrays = mapper.map(entityList, BuildingDto[].class);
		return Arrays.asList(dtoArrays);
	}
	
	@Transactional
	public ResponseEntity<?> save(String authHeader, String username, @Valid Building building) throws Exception{
		String authUserName = controlService.getUsernameFromToken(authHeader);
		if(authUserName == null || !authUserName.equals(username)){
			logger.error("User Names cannot match");
			ApiError error = new ApiError(403, "User Names cannot match", "api/user/"+authHeader);
			return ResponseEntity.status(HttpStatus.FORBIDDEN).body(error);
		}
		User user = controlService.getUser(username);
		building.setCreatedAt(new Date());
		building.setCreatedUser(user);
		building = buildingRepository.save(building);
		return ResponseEntity.ok(building);
	}
	
//	private String getUsernameFromToken(String authHeader) {
//		String TOKEN_PREFIX = "Bearer ";
//		 
//		String username= null;
//		if(authHeader != null && authHeader.startsWith(TOKEN_PREFIX)) {
//			String token = authHeader.replace(TOKEN_PREFIX, "");
//			username = tokenUtil.getUsernameFromToken(token);
//		}
//		return username;
//	}
}
