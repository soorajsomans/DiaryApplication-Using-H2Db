package com.sscarftz.rest.webservice.restfulwebservicewithh2db.helloworld;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class HelloWorldController {
	
	@RequestMapping(method=RequestMethod.GET, path="/hello")
	public String helloWrold(){
		return "Hello World";
	} 
	
	@GetMapping(path="/hello-world-bean")
	public HelloWorldBean helloWroldBean(){
//		throw new RuntimeException("Something went wrong!"
//				+ "");
		return new HelloWorldBean("Hello World");
	} 

	@GetMapping(path="/hello-world/path-variable/{name}")
	public HelloWorldBean helloWroldPathVariable(@PathVariable String name){
		return new HelloWorldBean(String.format("Hello World %s", name));
	} 
}
