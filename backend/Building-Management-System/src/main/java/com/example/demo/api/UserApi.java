package com.example.demo.api;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.config.ApiPaths;
import com.example.demo.dto.UserDto;
import com.example.demo.model.User;
import com.example.demo.service.UserService;
import com.example.demo.service.UserServiceImp;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping(ApiPaths.UserCtrl.CTRL)
@CrossOrigin
public class UserApi {
	private final UserService service  ;
	
	@GetMapping("/{id}")
	public ResponseEntity<UserDto> getUser(@PathVariable Long id){
		
		return ResponseEntity.ok(service.getUser(id));
	}
	
	
	
	@PostMapping
	public ResponseEntity<UserDto> postUser(@RequestBody User user){
		
		return ResponseEntity.ok(service.save(user));
	}
	
	
	
	@PutMapping("/[id}")
	public ResponseEntity<User> getUser(@PathVariable Long id,@RequestBody UserDto dto){
		
		return ResponseEntity.ok(null);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Boolean> deleteUser(@PathVariable Long id){
		
		return ResponseEntity.ok(service.deleteUser(id));
	}
	
}
