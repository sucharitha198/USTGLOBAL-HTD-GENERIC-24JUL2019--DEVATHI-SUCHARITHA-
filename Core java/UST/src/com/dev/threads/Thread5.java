package com.dev.threads;

public class Thread5 extends Thread{

	Printer p;
	public Thread5(Printer pref) {
		p = pref;
	}
	@Override
	public void run() {
		p.printval(10, "Thread 5");

	}
}
