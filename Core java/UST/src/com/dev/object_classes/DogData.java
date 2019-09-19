package com.dev.object_classes;

public class DogData {

	public static void main(String[] args) {
		Dog d1 = new Dog();
		Dog d2 = new Dog();
		Dog d3 = new Dog();

		d1.setAge(1);
		d1.setBreed("Dabur man");
		d1.setColor("Black");
		d1.setName("Shiro");

		d2.setAge(2);
		d2.setBreed("German Shepard");
		d2.setColor("Brown");
		d2.setName("Spike");

		d3.setAge(2);
		d3.setBreed("German Shepard");
		d3.setColor("Brown");
		d3.setName("Spike");

		Dog [] dogs = {d1,d2,d3};
		for(int i=0;i<dogs.length;i++) {
//		System.out.println("Name: "+dogs[i].getName());
//		System.out.println("Age: "+dogs[i].getAge());
//		System.out.println("Breed: "+dogs[i].getBreed());
//		System.out.println("Color: "+dogs[i].getColor());
			System.out.println(dogs[i]); // after overriding thetoString()
		System.out.println("*********************");
		}
		
		System.out.println(d2.equals(d3)); 
		System.out.println(d3.hashCode());
		System.out.println(d2.hashCode()); // after overriding hashCode() & equals()
		
		
	}

}
