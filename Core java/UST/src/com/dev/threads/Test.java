package com.dev.threads;

public class Test {

	public static void main(String[] args) {
		System.out.println("Main thread started");
		
		for (int i = 0; i <=100; i++) {
			System.out.println(" i = "+i);
		}		//	taking lot of time and the next thread should wait until it terminates
		
		for (int i = 0; i <=10; i++) {
			System.out.println("i = "+i);
		}
		
		System.out.println("Min thread terminated");

	}

}
