package com.dev.constructors;

public class ConstructorOverloading {
	
	private ConstructorOverloading() { //nly public private protected no static can use
		System.out.println("this is a no arg");
	}
	
	public	ConstructorOverloading(int q) {
		System.out.println("this is a int arg");
		System.out.println(q);
	}
	
	public	ConstructorOverloading(int q , int a) {
		System.out.println("this is a int & int arg");
		System.out.println(q+" "+ a);
	}
	
	public	ConstructorOverloading(String q , int a) {
		System.out.println("this is a String & int arg");
		System.out.println(q+" "+ a);
	}
	
	public	ConstructorOverloading(String q , int a , char b) {
		System.out.println("this is a String , int & byte arg");
		System.out.println(q+" "+ a+" "+b);
	}
	
	public	ConstructorOverloading(byte b , int h) {
		System.out.println("this is a byte & int arg");
		System.out.println(b+" "+ h);
	}
	
	public static void main(String[] args) {
		
		 ConstructorOverloading co = new ConstructorOverloading();
		 ConstructorOverloading co1 = new ConstructorOverloading(3);
		 ConstructorOverloading co2 = new ConstructorOverloading(4,5);
		 ConstructorOverloading co3 = new ConstructorOverloading("u",5);
		 ConstructorOverloading co4 = new ConstructorOverloading("t",6,'j');
		 ConstructorOverloading co5 = new ConstructorOverloading(6,9);

	}

}
