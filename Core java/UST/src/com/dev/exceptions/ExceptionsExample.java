package com.dev.exceptions;

public class ExceptionsExample {

	public static void main(String[] args) {
		//		double d = 10.0;
		//		double q = 0.0;
		//		System.out.println("Result: "+d/q);

		System.out.println("Print Before");
		//		StringBuilder sb = new StringBuilder(-1);
		//		s();

		System.out.println("Print After");
		t();
	}

	public static void s() {
		StringBuilder sb = new StringBuilder(-1);
	}
	public static void t() {
		s();
	}
}
