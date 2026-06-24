package com.api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.api.entity.message;
import com.api.repo.MessageRepo;
import com.api.service.SecretMessage;


@RestController
@CrossOrigin(origins="http://localhost:5173")
public class MessageController 
{
	@Autowired
	public MessageRepo mro;
	@Autowired
	public SecretMessage sm;
	@PostMapping("/encrupt")
public String encruptmessage( @RequestParam String msg, @RequestParam String password)
{
	message m=new message();
	m.setMsg(msg);
	m.setPassword(password);
	String secret=sm.generateMessage();
	m.setScretmsg(secret);
	mro.save(m);
	return secret;
}
    @PostMapping("/decrptmsg")
	public String decrptmsg( @RequestParam String secret, @RequestParam String password) {
    	List<message>list=mro.findByScretmsgAndPassword( secret,password);
    	if(list.size()==1) {
    		return list.get(0).getMsg();
    	}
    	else {
    		return "No Message is Available";
    	}
    }
}
