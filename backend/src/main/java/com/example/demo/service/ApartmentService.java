package com.example.demo.service;

import java.util.Arrays;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.springframework.stereotype.Service;

import com.example.demo.dto.ApartmentDto;
import com.example.demo.dto.BuildingDto;
import com.example.demo.jwt.config.JwtTokenUtil;
import com.example.demo.model.Flat;
import com.example.demo.model.Building;
import com.example.demo.repo.ApartmentRepository;
import com.example.demo.repo.BuildingRepository;
import com.example.demo.repo.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ApartmentService {
	private final BuildingRepository buildingRepository;
	private final ApartmentRepository apartmentRepository;
	private final ModelMapper mapper;
	private final Logger logger;
	private final JwtTokenUtil tokenUtil;
	private final UserRepository userRepository;
	
	
	public List<ApartmentDto> getAll() throws Exception{
		List<Flat> entityList = apartmentRepository.findAll();
		ApartmentDto [] dtoArrays = mapper.map(entityList, ApartmentDto[].class);
		return Arrays.asList(dtoArrays);
	}
}
