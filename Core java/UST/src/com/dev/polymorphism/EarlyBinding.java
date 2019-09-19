package com.dev.polymorphism;

public class EarlyBinding {
	public void m1() {
		System.out.println("m1 Method in Elarly binding with out argmnts");
	}

	public void m1(int a) {
		System.out.println("m1 Method in Elarly binding with int argmnt");
	}

	public static void main(String[] args) {

		EarlyBinding eb = new LateBinding();
		eb.m1();
		eb.m1(2);

	}

}
