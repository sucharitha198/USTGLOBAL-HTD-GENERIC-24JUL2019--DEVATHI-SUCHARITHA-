package com.dev.inheritance;

public class Parent extends GrandParent {
	static Parent p = new Parent();
	String name = " Raghu ";

	public static void main(String[] args) {
		p.print();


	}
	
	public void print() {
		System.out.println(name+" "+super.name+" "+lastName);
		super.printName();
	}

}
