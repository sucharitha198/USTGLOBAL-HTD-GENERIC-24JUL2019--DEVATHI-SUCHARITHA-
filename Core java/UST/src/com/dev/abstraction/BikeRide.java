package com.dev.abstraction;

public class BikeRide extends Bike {

	@Override
	public void stop() {
		System.out.println("stop() from Move Class  ");
		
	}
	public static void main(String[] args) {
		BikeRide br = new BikeRide();
		br.start();
		br.stop();
	}

	

}
