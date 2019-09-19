package com.dev.inheritance;

public class Father extends GrandFather{
	static Father f = new Father();
	String name = "Eddard";
	@Override
	public void printName() {
		//		String name = "Eddard";
		System.out.println(name+ " "+f.name+" "+f.lastName);

	}
	public static void main(String[] args) {
		f.printName();
	}

	
}
