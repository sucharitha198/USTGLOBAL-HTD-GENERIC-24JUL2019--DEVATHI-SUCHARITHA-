package com.dev.inheritance;

public class Daughter extends Father{
	static GrandFather d = new Daughter();
	
	static GrandFather d1 = new Daughter();
	static Daughter d2 = (Daughter)d; // inorder to perform downcast we need to perform upcast
	
	/* static Daughter d1 = (Daughter) new GrandFather() ; 
	 * exception */
	
	
	@Override
	public void printName() {
		String name = "sansa";
		System.out.println(name+" "+d.name+" "+d.lastName);
	}
	public static void main(String[] args) {
		d.printName();

	}

}