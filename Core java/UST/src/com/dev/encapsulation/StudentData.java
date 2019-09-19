package com.dev.encapsulation;

public class StudentData {

	public static void main(String[] args) {
	Student s = new Student();
	s.setRegNo(1322102206);
	s.setName("Sucharitha");
	s.setEmail("Sucharitha198@gmail.com");
	s.setPassword("suchi");
	int getNumber = s.getRegNo();
	System.out.println("RegNo: "+getNumber);
	
	System.out.println("Name : " +s.getName());
	System.out.println("Email: "+s.getEmail());
	}

}
