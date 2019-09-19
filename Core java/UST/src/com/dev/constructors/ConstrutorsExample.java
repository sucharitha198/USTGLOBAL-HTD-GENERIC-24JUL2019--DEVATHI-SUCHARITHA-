package com.dev.constructors;

public class ConstrutorsExample {

	public  ConstrutorsExample() {
		System.out.println(" This is a no argument constructor");
	}

	public  ConstrutorsExample(int i) {
		System.out.println(" This is a constructor with int arguments");
	}

	public  ConstrutorsExample(String s) {
		System.out.println(" This is a constructor with String argument");
	}

	public  ConstrutorsExample(String s , int i) {
		System.out.println(" This is a constructor with String & int arguments");
	}
		
	public  ConstrutorsExample(int i , String s) {
		System.out.println(" This is a constructor with int & String arguments");
	}

	public static void main (String[] args) {
		ConstrutorsExample ce1 = new ConstrutorsExample();
		ConstrutorsExample ce = new ConstrutorsExample(1);
		ConstrutorsExample ce2 = new ConstrutorsExample("d");
		ConstrutorsExample ce3 = new ConstrutorsExample("s",5);
		ConstrutorsExample ce4 = new ConstrutorsExample(5,"s");
	}
}
