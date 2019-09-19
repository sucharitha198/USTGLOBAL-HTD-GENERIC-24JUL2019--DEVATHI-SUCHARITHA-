package com.dev.collections;

import com.dev.encapsulation.Dog;

public class DogData {

	public static void main(String[] args) {
		DogIntImp dii = new DogIntImp();
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
		
		boolean b0 = dii.addDog(d1);
		boolean b = dii.addDog(d2);
		System.out.println(b+ " "+b0);
		dii.getDog();
		
		boolean b1 = dii.removeDog(d2);
		System.out.println(b1);
		dii.getDog();
	}

}
