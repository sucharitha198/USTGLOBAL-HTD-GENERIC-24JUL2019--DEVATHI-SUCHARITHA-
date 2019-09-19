package com.dev.collections;

import java.util.ArrayList;

import com.dev.encapsulation.Dog;

public class C4 {

	public static void main(String[] args) {
		ArrayList<Dog> al = new ArrayList<Dog>(1); //1 is mincapacity ....but is we are adding 2 ele also it will take ...bcs of resizable array
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
		
		al.add(d);
		al.add(d1);
		System.out.println(al);
		
		al.trimToSize();
		
		System.out.println("trimToSize(): "+al.size());
		
	}

}
