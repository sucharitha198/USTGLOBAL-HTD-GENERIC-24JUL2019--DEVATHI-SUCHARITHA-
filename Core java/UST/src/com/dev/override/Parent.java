package com.dev.override;

public class Parent {
	public void m1() {
		int i=10;
		int j =20;
		System.out.println(i*j);
	}
	
	private void m2() {
		int i=10;
		int j =20;
		System.out.println(i*j);
	}
	
	final void m3() {
		String s = "s";
		int j =20;
		System.out.println(s+j);
	}
}