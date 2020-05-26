package com.sscarftz.rest.webservice.restfulwebservicewithh2db.diary;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DiaryJPARepository extends JpaRepository<Diary, Long> {
	List<Diary> findByUsername(String username);
}
