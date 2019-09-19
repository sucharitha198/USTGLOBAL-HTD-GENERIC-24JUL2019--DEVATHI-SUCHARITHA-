package com.dev.threads;

public class Thread3 implements Runnable{
	
	@Override
	public void run() {
		System.out.println("Runnable method started");
		for (int i = 0; i <=5; i++) {
			System.out.println("k= "+i);
		}
		System.out.println("Runnable terminated");
	}

}
