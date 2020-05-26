package com.sscarftz.rest.webservice.restfulwebservicewithh2db.diary;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class DiaryHardcodedService {
	
	private static List<Diary> diaries=new ArrayList();
	private static long idCounter = 0;
	
	
	static{
		diaries.add(new Diary(++idCounter,"Sooraj","Diary 1", "My First Diary", new Date()));
		diaries.add(new Diary(++idCounter,"Sooraj","Diary 2", "My Second Diary", new Date()));
		diaries.add(new Diary(++idCounter,"Sooraj","Diary 3", "My Third Diary", new Date()));
	}
	
	public List<Diary> findAll(){
		return diaries;
	}
	
	public Diary save(Diary diary){
		if(diary.getId()==-1 || diary.getId()==0){
			diary.setId(++idCounter);
			diaries.add(diary);
		}else{
			deleteById(diary.getId());
			diaries.add(diary);
		}
		return diary;
	}
	
	public Diary deleteById(long id){
		Diary diary = findById(id);
		
		if(diary == null){
			return null;
		}
		if(diaries.remove(diary)){
			return diary;
		}
		
		return null;
	}

	public Diary findById(long id) {
		for(Diary diary:diaries){
			if(diary.getId() == id){
				return diary;
			}
		}
		return null;
	}

}
