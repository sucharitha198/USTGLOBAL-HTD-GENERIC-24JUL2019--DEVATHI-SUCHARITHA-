package com.dev.collections;

import java.util.HashSet;

public class HashEmployee {

	public static void main(String[] args) {
		HashSet<Employee> h= new HashSet<Employee>();
		Employee e1 = new Employee();
		e1.setName("suchi");
		e1.setId(101);
		e1.setEmail("sucharitha198@gmail.com");
		
		Employee e2 = new Employee();
		e2.setName("sravya");
		e2.setId(102);
		e2.setEmail("sravya@gmail.com");
		e2.setEmail("sravyanani@gmail.com"); //updating the email
		Employee e3 = new Employee();
		e3.setName("revanth");
		e3.setId(103);
		e3.setEmail("revanthsteyn@gmail.com");

		Employee e4 = new Employee();
		e4.setName("bhanu");
		e4.setId(104);
		e4.setEmail("ybhanuprakash@gmail.com");

		boolean b1 = h.add(e1);
		boolean b2 = h.add(e2);
		boolean b3 = h.add(e3);
		boolean b4 = h.add(e4);
		
		System.out.println(b1 +" "+b2 +" "+b3 +" "+b4);
		System.out.println(h); //after overriding tostring in employye class
		
		System.out.println("size() after add: "+h.size());
		
		boolean b5 = h.remove(e1);
		System.out.println("after remove(): "+b5);
		System.out.println(h);
		System.out.println("size after remove() :"+h.size());
		
		h.clear();
		System.out.println(" size after clear :"+h.size());
		
		
		

	}

}
