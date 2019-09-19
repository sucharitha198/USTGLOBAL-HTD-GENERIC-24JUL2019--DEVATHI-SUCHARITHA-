package com.dev.inheritance;

public class GrandParent {
	static GrandParent g = new GrandParent();
	String name = "sreenu";
	String lastName = "Devathi";
	public static void main(String[] args) {
		g.printName();
	}
	public void printName() {
		System.out.println(name + " "+lastName);
	}

}
