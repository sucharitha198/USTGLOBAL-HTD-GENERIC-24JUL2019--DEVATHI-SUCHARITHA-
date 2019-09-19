package com.dev.abstraction;

public class Aeroplane extends Move {
	

	@Override
	public void start() {
		System.out.println("start() from Move Class  ");
		
	}

	@Override
	public void stop() {
		System.out.println("stop() from Move Class  ");
		
	}
}
