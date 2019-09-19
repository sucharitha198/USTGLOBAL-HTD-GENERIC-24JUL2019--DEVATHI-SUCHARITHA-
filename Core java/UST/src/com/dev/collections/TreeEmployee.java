package com.dev.collections;

import java.util.TreeSet;

public class TreeEmployee {

	public static void main(String[] args) {
		TreeSet<Employee> te = new TreeSet<Employee>();
		
		Employee e1 = new Employee();
		e1.setName("suchi");
		e1.setId(101);
		e1.setEmail("sucharitha198@gmail.com");
		
		Employee e2 = new Employee();
		e2.setName("sravya");
		e2.setId(142);
		e2.setEmail("sravya@gmail.com");

		Employee e3 = new Employee();
		e3.setName("revanth");
		e3.setId(133);
		e3.setEmail("revanthsteyn@gmail.com");

		Employee e4 = new Employee();
		e4.setName("bhanu");
		e4.setId(104);
		e4.setEmail("ybhanuprakash@gmail.com");

		te.add(e1);
		te.add(e2);
		te.add(e3);
		te.add(e4);
		System.out.println(te);
	}

}
