package com.example.demo.api;

import java.util.List;

import javax.validation.Valid;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.BuildingDto;
import com.example.demo.dto.UserDto;
import com.example.demo.dto.UserUpdateDto;
import com.example.demo.model.Building;
import com.example.demo.service.BuildingService;
import com.example.demo.util.ApiPaths;

import javassist.NotFoundException;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping(ApiPaths.BuildingCtrl.CTRL)
@CrossOrigin
public class BuildingApi {

	private final BuildingService buildingService;

	
	//localhost:8501/api/building?page=1&size=3
	@GetMapping
	public ResponseEntity<Page<BuildingDto>> getAll(@PageableDefault(sort = "id",direction = Direction.DESC) Pageable page) throws Exception {
		return ResponseEntity.ok(buildingService.getAll(page));
	}

	@GetMapping("/get-by-id/{buildingid}")
	public ResponseEntity<BuildingDto> getById(@RequestHeader("Authorization") String authHeader,
			@PathVariable Long buildingid) throws Exception {
		return ResponseEntity.ok(buildingService.getById(authHeader,buildingid));
	}
	
	@PutMapping("/{buildingid}")
	public ResponseEntity<?> save(@RequestHeader("Authorization") String authHeader,
			@PathVariable Long buildingid, @Valid @RequestBody BuildingDto dto) throws Exception {
		return ResponseEntity.ok(buildingService.update(authHeader,buildingid,dto));
	}
	
	@PostMapping("/{username}")
	public ResponseEntity<?> save(@RequestHeader("Authorization") String authHeader,
			@PathVariable String username, @Valid @RequestBody Building building) throws Exception {
		return ResponseEntity.ok(buildingService.save(authHeader,username,building));
	}
//	
//	@PutMapping("/{username}")
//	public ResponseEntity<?> updateBuilding(@RequestHeader("Authorization") String authHeader,
//			@PathVariable String username,@Valid @RequestBody BuildingDto dto) throws NotFoundException {
//
//		return ResponseEntity.ok(buildingService.updateBuilding(authHeader, username, dto));
//	}
}
