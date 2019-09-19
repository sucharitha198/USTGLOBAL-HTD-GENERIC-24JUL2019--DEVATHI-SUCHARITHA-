package com.dev.abstraction;

public abstract class AbstractExample {
	public AbstractExample() {
		System.out.println("this is constructor in abstract class");
	}
	
	abstract void display();
	abstract void doNot();
	public void show() {
		System.out.println("Concrete method of abstract Class");
	}

}