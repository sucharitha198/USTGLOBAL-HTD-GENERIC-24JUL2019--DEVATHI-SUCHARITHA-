package com.dev.inheritance;

public class SuperClass {
	public SuperClass() {
		System.out.println("Constructor with no args of superclass");
	}
	public SuperClass(int i ) {
		System.out.println("Constructor with int args of superclass");
	}
	public SuperClass(String str) {
		System.out.println("Constructor with String args of superclass");
	}
	public SuperClass(String str,int i) {
		System.out.println("Constructor with String & int args of superclass");
	}
	public SuperClass(int i , String str) {
		System.out.println("Constructor with int & String args of superclass");
	}

	public static void main(String[] args) {
		

	}

}
