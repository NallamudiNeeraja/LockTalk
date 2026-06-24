package com.api.service;

import java.util.Random;

import org.springframework.stereotype.Service;

@Service
public class SecretMessage 
{
       public String generateMessage() {
    	   String str="Hello Welcome To Java Coaching.";
    	   Random r=new Random();
    	   String secrete="";
    	   for(int i=0;i<=11;i++) 
    	   {
    		   int num=r.nextInt(15);
    		   secrete=secrete+str.charAt(num);
    	   }
    	   return secrete;
       }
}
