package com.dev.threads;

public class MainThreadClass {

	public static void main(String[] args) {
		System.out.println("Main Thread Started....");
		System.out.println("Main Thread prints value of i");
		
		Thread t2 = new Thread2();
		t2.setName("Thread t2");
		t2.start();
		t2.setPriority(3);

		//new Thread2().start();		// Start method is non-static 
		
		Thread3 t = new Thread3();
		Thread t3 = new Thread(t);
		t3.start();
		
		Thread.currentThread().setName("Main Thread");		
		
//		new Thread(new RunInt()).start();
		
		
		for (int i = 0; i <=10; i++) {
			System.out.println("i = "+i);
		}
		System.out.println("Threrad Name1: "+t2.getName());
		System.out.println("Thread NAme2: "+Thread.currentThread().getName());
	
		System.out.println("Thread2 id: "+t2.getId());
		System.out.println("Thread3 id: "+t3.getId());
		System.out.println("MAin Thread Id: "+Thread.currentThread().getId());
		
		System.out.println("Thread2 priority: "+ t2.getPriority());
		System.out.println("Main Thread Terminated.....");
	}

}