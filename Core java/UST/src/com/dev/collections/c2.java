package com.dev.collections;

import java.util.HashMap;

import com.dev.encapsulation.Dog;

public class c2 {

	public static void main(String[] args) {
		HashMap<String,Dog> hm = new HashMap<String,Dog>();
		Dog d = new Dog();
		d.setAge(1);
		d.setName("Shiro");
		d.setBreed("D M");
		d.setColor("Black");

		Dog d1 = new Dog();
		d1.setAge(2);
		d1.setName("Ronnie");
		d1.setBreed("Dolmation");
		d1.setColor("Black&white");

		Dog d2 = new Dog();
		d2.setAge(3);
		d2.setName("Lucy");
		d2.setBreed("German Shepard");
		d2.setColor("Browny");
		
		/*
		 * for(Dog dog:hm) { System.out.println(); }
		 */ //it wont execute here bcs map is not collection  interface

//		hm.put("1", d); //output will display
//		Dog b = hm.put("1", d);
//		System.out.println(b);
//
//		hm.put("lucy", d1);
//		Dog b2 = hm.put("lucy",d1);
//		System.out.println(b2);
//		
//		hm.put("luc", d2);
//		Dog b3 = hm.put("luc",d2);
//		System.out.println(b3);
		
		hm.put("1", d);
		hm.put("2", d1);
		hm.put("3", d2);
		System.out.println(hm);
		
		Dog f = hm.remove("2");
		System.out.println(f);
		
		System.out.println(hm); //to check element is removed or not
		
		System.out.println("OUTPUT OF containsKey(): "+hm.containsKey("3"));
		
		System.out.println(hm.containsValue(d2));
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		


		
		
		
		

	}

}
