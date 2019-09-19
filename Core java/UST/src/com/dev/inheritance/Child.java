package com.dev.inheritance;

public class Child extends Parent{
	static Child c = new Child();
	

	public static void main(String[] args) {
		c.print();
	}
	public void print() {
		String name = "Suchi";
		System.out.println(name+" "+p.name+" "+super.lastName);
		super.print();
		}

}
