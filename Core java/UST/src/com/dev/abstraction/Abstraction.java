package com.dev.abstraction;

public class Abstraction extends AbstractExample {

	public Abstraction() {
		System.out.println("this is constuctor of Abstraction class");
	}

	@Override
	void display() {
		System.out.println("this is the implimented abstract method ");

	}
	public static void main(String[] args) {

		Abstraction ab = new Abstraction();
		ab.display();
		ab.show();
		ab.doNot();

	}

	@Override
	void doNot() {
		System.out.println("hello hi ");

	}

}

