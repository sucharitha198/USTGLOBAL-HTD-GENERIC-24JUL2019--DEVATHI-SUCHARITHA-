package com.dev.threads;

public class Printer {

		synchronized public void printval(int j, String thread) {
			for (int i = 0; i <= j; i++) {
				System.out.println("Thread: "+ thread+ " "+ "i: "+ i);
			}
		}
}
