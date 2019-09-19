package com.dev.abstraction;

public abstract class Bike extends Move {
	
	@Override
	public void start() {
		System.out.println("start() from Move Class");
	}
}
