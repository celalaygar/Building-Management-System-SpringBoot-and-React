package com.example.demo.service;

import java.util.Arrays;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.dto.BuildingDto;
import com.example.demo.dto.UserDto;
import com.example.demo.error.ApiError;
import com.example.demo.error.NotFoundException;
import com.example.demo.jwt.config.JwtTokenUtil;
import com.example.demo.model.Building;
import com.example.demo.model.BuildingAdress;
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

	public Page<BuildingDto> getAll(Pageable page) throws Exception {

		Page<BuildingDto> pageDto = null;
		Page<Building> pageBuilding = buildingRepository.findAll(page);
		pageDto = pageBuilding.map(BuildingDto::new);
		return pageDto;
	}

	@Transactional
	public ResponseEntity<?> save(String authHeader, String username, @Valid Building building) throws Exception {
		String authUserName = controlService.getUsernameFromToken(authHeader);
		if (authUserName == null || !authUserName.equals(username)) {
			logger.error("User Names cannot match");
			ApiError error = new ApiError(403, "User Names cannot match", "api/user/" + authHeader);
			return ResponseEntity.status(HttpStatus.FORBIDDEN).body(error);
		}
		User user = controlService.getUser(username);
		building.setCreatedAt(new Date());
		building.setCreatedUser(user);
		BuildingAdress adress = building.getAdress();
		adress.setBuilding(building);
		building = buildingRepository.save(building);
		return ResponseEntity.ok(building);
	}

//	public ResponseEntity<?> updateBuilding(String authHeader, String username, @Valid BuildingDto dto)
//			throws javassist.NotFoundException {
//
//		String authUserName = controlService.getUsernameFromToken(authHeader);
//		if (authUserName == null || !authUserName.equals(username)) {
//			logger.error("User Names cannot match");
//			ApiError error = new ApiError(403, "User Names cannot match", "api/user/" + authHeader);
//			return ResponseEntity.status(HttpStatus.FORBIDDEN).body(error);
//		}
//		User user = controlService.getUser(username);
//		Building building = buildingRepository.getOne(dto.getId());
//
//		building.setBuildingAdress(dto.getBuildingAdress());
//		building.setBuildingName(dto.getBuildingName());
//		building.setCreatedUser(user);
//
//		BuildingAdress adress = mapper.map(dto.getAdress(), BuildingAdress.class);
//		adress.setBuilding(building);
//
//		building = buildingRepository.save(building);
//		return ResponseEntity.ok(building);
//	}

	public BuildingDto getById(String authHeader, Long buildingid) throws javassist.NotFoundException {
		Optional<Building> building = buildingRepository.findById(buildingid);
		if(!building.isPresent()) {
			throw new javassist.NotFoundException("there is no building with id : "+buildingid);
		}
		BuildingDto dto = mapper.map(building.get(), BuildingDto.class);
		return dto;
	}

	public ResponseEntity<?> update(String authHeader, Long buildingid, @Valid BuildingDto dto) throws Exception {
		String authUserName = controlService.getUsernameFromToken(authHeader);
		if (authUserName == null ) {
			logger.error("User Names cannot match");
			ApiError error = new ApiError(403, "User Names cannot match", "api/user/" + authHeader);
			return ResponseEntity.status(HttpStatus.FORBIDDEN).body(error);
		}
		User user = controlService.getUser(authUserName);
		Optional<Building> opt= buildingRepository.findById(buildingid);
		if(!opt.isPresent()) {
			throw new javassist.NotFoundException("there is no building with id : "+buildingid);
		}
		Building building = mapper.map(dto, Building.class);
		building.getAdress().setId(opt.get().getAdress().getId());
		building.getAdress().setBuilding(building);
		building.setCreatedUser(user);
		building= buildingRepository.save(building);
		
		dto = mapper.map(building, BuildingDto.class);
		return  ResponseEntity.ok(dto);
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
