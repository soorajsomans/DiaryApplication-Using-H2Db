package com.sscarftz.basic.auth;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class BasicAuthenticationController {
	
	
	@GetMapping(path="/basicauth")
	public AuthenticationBean helloWroldBean(){
//		throw new RuntimeException("Something went wrong!"
//				+ "");
		return new AuthenticationBean("You are authenticated");
	} 

	
}
