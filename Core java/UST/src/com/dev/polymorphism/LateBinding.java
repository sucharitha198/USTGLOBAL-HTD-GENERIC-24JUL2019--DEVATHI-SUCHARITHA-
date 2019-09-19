package com.dev.polymorphism;

public class LateBinding extends EarlyBinding{

	@Override
	public void m1() {
		System.out.println("m1 Method in late binding with out argmnts");
		super.m1();

	}

	public static void main(String[] args) {

		LateBinding lb = new LateBinding();
		lb.m1();

	}

}
