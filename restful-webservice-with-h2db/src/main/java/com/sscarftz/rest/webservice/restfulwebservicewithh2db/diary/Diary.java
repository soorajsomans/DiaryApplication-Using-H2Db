package com.sscarftz.rest.webservice.restfulwebservicewithh2db.diary;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;


@Entity
public class Diary {
	
	@Id
	@GeneratedValue
	private Long id;
	private String username;
	private String title;
	private String description;
	private Date diaryDate;
	
	
	
	protected Diary(){}
	
	public Diary(long id, String username,String title, String description, Date diaryDate) {
		super();
		this.id = id;
		this.username = username; 
		this.title = title;
		this.description = description;
		this.diaryDate = diaryDate;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Date getDiaryDate() {
		return diaryDate;
	}
	public void setDiaryDate(Date diaryDate) {
		this.diaryDate = diaryDate;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + (int) (id ^ (id >>> 32));
		return result;
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Diary other = (Diary) obj;
		if (id != other.id)
			return false;
		return true;
	}
	
	
}
