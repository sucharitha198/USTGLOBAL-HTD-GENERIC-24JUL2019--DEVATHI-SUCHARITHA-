package com.dev.methods;

public class MethodOverloading {
	static MethodOverloading mo = new MethodOverloading();

	public void print() {
		System.out.println("This is print method with no-arg");
	}
	public int print(int i) { // method overloading is possible if the return types are different
		System.out.println("This is print method with int arg");
		return 1;
	}
	static String print(String str) {
		System.out.println("This is the static method with string arg");
		return "a";
	}
	static String print(String str,int i) {
		System.out.println("This is the static method with string & int arg");
		return "a";
	}
	final void print1(int i,String a) {
		System.out.println("This is a final method with int & string args");
	}
	final void print1(String i,int e ) {
		System.out.println("This is a final method with string args");
	}
	public static void main(String[] args) {
		mo.print();
		print("d");
		mo.print(45);
	}

}
