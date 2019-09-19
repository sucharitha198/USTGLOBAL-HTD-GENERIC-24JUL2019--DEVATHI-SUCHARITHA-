package com.dev.collections;

import java.util.HashSet;

import com.dev.encapsulation.Dog;

public class C1 {

	public static void main(String[] args) {
		HashSet<Dog> hs = new HashSet<Dog>();
		Dog d = new Dog();
		d.setAge(1);
		d.setName("Shiro");
		d.setBreed("D M");
		d.setColor("Black");
		d.setAge(3);

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

		boolean b = hs.add(d); // adding the element into hashset
		boolean b1 = hs.add(d1);
		boolean b3 = hs.add(d2);
		System.out.println(" Output of add(): " + b);
		System.out.println(" Output of add(): " + b1);
		System.out.println(" Output of add(): " + b3);
		// System.out.println(hs);[com.dev.encapsulation.Dog@15db9742].... ||=> after
		// overriding tostring method

//		System.out.println(hs);

		for (Dog dog : hs) {
			System.out.println(dog);
		}

		System.out.println("Size of hashset before remove(): " + hs.size());

		boolean b2 = hs.remove(d1);
		System.out.println(" Output of remove(): " + b2);
		System.out.println(hs);

		System.out.println("Output of contains(): " + hs.contains(d1)); // d1 is removed from hashset so false

		System.out.println("Size of hashset after remove(): " + hs.size());

		hs.clear();
		System.out.println("Size of hashset after clear(): " + hs.size()); // clear will reomve all the elements
	}

}
