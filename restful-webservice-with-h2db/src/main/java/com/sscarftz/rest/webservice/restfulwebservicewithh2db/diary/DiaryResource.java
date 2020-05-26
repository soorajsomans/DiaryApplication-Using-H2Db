package com.sscarftz.rest.webservice.restfulwebservicewithh2db.diary;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;


@CrossOrigin(origins="http://localhost:4200")
@RestController
public class DiaryResource {
	
	@Autowired
	private DiaryHardcodedService diaryService;
	
	@GetMapping("/users/{username}/diaries")
	public List<Diary> getAllDiaries(@PathVariable String username){
		return diaryService.findAll();
	}
	
	@GetMapping("/users/{username}/diaries/{id}")
	public Diary getDiary(@PathVariable String username, @PathVariable long id){
		return diaryService.findById(id);
	}
	
	@DeleteMapping("/users/{username}/diaries/{id}")
	public ResponseEntity<Void> deleteDiary(@PathVariable String username, @PathVariable long id){
		// response entity used to send specific response back to the front end here we use no content so keep it void
		Diary diary = diaryService.deleteById(id);
		if(diary!=null){
			return ResponseEntity.noContent().build();
		}
		return ResponseEntity.notFound().build();
	}
	
	@PutMapping("/users/{username}/diaries/{id}")
	public ResponseEntity<Diary> updateDiary(@PathVariable String username, @PathVariable long id, @RequestBody Diary diary){
		Diary diaryUpdated = diaryService.save(diary);
		return new ResponseEntity<Diary>(diary, HttpStatus.OK);
		
	}
	
	@PostMapping("/users/{username}/diaries")
	public ResponseEntity<Void> updateDiary(@PathVariable String username, @RequestBody Diary diary){
		Diary createdDiary = diaryService.save(diary);
		
		URI uri=ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createdDiary.getId()).toUri();
		
		return  ResponseEntity.created(uri).build();
		
	}
}
