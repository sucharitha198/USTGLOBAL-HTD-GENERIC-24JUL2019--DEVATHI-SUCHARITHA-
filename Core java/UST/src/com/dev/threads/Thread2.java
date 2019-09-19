package com.dev.threads;

public class Thread2 extends Thread{

	@Override		//creating own thread
	public void run() {
		System.out.println("T2 thread Started");
		for (int i = 0; i <=10; i++) {
			System.out.println("j = "+i);
		}
		
		System.out.println("T2 thread Terminated");
	}
}
