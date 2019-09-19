package com.dev.inheritance;

public class SuperClass1 {
	public SuperClass1() {
		System.out.println("Constructor with no args");
	}
	public SuperClass1(int i ) {
		System.out.println("Constructor with int args");
	}
	public SuperClass1(String str) {
		System.out.println("Constructor with String args");
	}
	public SuperClass1(String str,int i) {
		System.out.println("Constructor with String & int args");
	}
	public SuperClass1(int i , String str) {
		System.out.println("Constructor with int & String args");
	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub

	}

}
