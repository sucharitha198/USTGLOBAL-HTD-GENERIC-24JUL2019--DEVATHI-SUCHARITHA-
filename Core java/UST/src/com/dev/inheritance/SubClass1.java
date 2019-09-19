package com.dev.inheritance;

public class SubClass1 extends SuperClass1 {
	public SubClass1() {
		super();
		System.out.println("Constructor with no args in subclass1");
	}
	public SubClass1(int i ) {
		super(2);
		System.out.println("Constructor with int args in subclass1");
	}
	public SubClass1(String str) {
		super("s");
		System.out.println("Constructor with String args in subclass1");
	}
	public SubClass1(String str,int i) {
		super("s",1);
		System.out.println("Constructor with String & int args in subclass1");
	}
	public SubClass1(int i , String str) {
		super(19,"a");
		System.out.println("Constructor with int & String args");
	}

	public static void main(String[] args) {
	SubClass1 sc = new SubClass1();
	SubClass1 sc1 = new SubClass1(3);
	SubClass1 sc2 = new SubClass1("a");
	SubClass1 sc3 = new SubClass1("s",2);
	SubClass1 sc4 = new SubClass1(3,"t");
	
	
	

	}

}
