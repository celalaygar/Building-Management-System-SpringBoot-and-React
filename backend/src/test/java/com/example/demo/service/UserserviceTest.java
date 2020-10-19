package com.example.demo.service;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import com.example.demo.model.User;
import com.example.demo.repo.UserRepository;

import static org.mockito.Mockito.mock;


@ExtendWith(MockitoExtension.class)
public class UserserviceTest {

    @InjectMocks
    private UserServiceImp userServiceImp;
    
    @Mock
    private UserRepository userRepository;
    
    @Test
    public void testSave() {
    	User user = new User();
    	user.setUsername("celal1c");
    	user.setPassword("Celal1cc");
    	user.setRealPassword("Celal1cc");
    	user.setEmail("celal1c@mynet.com");
    	//User userMock = mock()
    	
    }
	
	
	
}
