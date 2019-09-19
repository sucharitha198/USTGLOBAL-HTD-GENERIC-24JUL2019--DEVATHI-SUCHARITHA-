package com.dev.collections;

import java.util.TreeSet;

import com.dev.encapsulation.Dog;

public class c3 {

	public static void main(String[] args) {
		TreeSet<Dog> ts = new TreeSet<Dog>();
		Dog d = new Dog();
		d.setAge(1);
		d.setName("Shiro");
		d.setBreed("D M");
		d.setColor("Black");

		Dog d1 = new Dog();
		d1.setAge(8);
		d1.setName("Ronnie");
		d1.setBreed("Dolmation");
		d1.setColor("Black&white");
		
		Dog d2 = new Dog();
		d2.setAge(3);
		d2.setName("Lucy");
		d2.setBreed("German Shepard");
		d2.setColor("Browny");
		
		ts.add(d); //throws cce if we wont override comparable in dog class
		ts.add(d1);
		ts.add(d2);
		System.out.println(ts);
	}

}
