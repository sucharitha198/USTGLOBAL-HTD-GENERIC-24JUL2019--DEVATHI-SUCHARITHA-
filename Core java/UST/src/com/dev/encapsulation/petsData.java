package com.dev.encapsulation;

public class petsData {

	public static void main(String[] args) {
		pets p1 = new pets();
		pets p2 = new pets();
		pets p3 = new pets();
		
		pets p4 = new pets();
		pets p5 = new pets();
		pets p6 = new pets();


		p1.setAge(1);
		p1.setType("Dog");
		p1.setColor("Black");
		p1.setName("Shiro");

		p2.setAge(2);
		p2.setType("Dog");
		p2.setColor("Brown");
		p2.setName("Spike");

		p3.setAge(2);
		p3.setType("Dog");
		p3.setColor("Brown");
		p3.setName("Spike");
		
		p4.setAge(3);
		p4.setType("Cat");
		p4.setColor("Brown");
		p4.setName("Billi");
		
		p5.setAge(1);
		p5.setType("Cat");
		p5.setColor("White");
		p5.setName("Meow");
		
		p6.setAge(4);
		p5.setType("Cat");
		p5.setColor("Black");
		p5.setName("MeowMeow");
		
		
		
		pets [] dogs = {p1,p2,p3};
		for(int i=0;i<dogs.length;i++) {
			System.out.println("Type: "+dogs[i].getType());
			System.out.println("Name: "+dogs[i].getName());
			System.out.println("Age: "+dogs[i].getAge());
			System.out.println("Color: "+dogs[i].getColor());
			System.out.println("*****************************");
			
			}
		
		pets [] cats = {p4,p5,p6};
		for(int i=0;i<cats.length;i++) {
			System.out.println("Type: "+cats[i].getType());
			System.out.println("Name: "+cats[i].getName());
			System.out.println("Age: "+cats[i].getAge());
			System.out.println("Color: "+cats[i].getColor());
			System.out.println("****************************");
			}
		


	}

}
