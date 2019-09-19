package com.dev.exceptions;

public class ExceptionHandling {

	public static void main(String[] args) {
		try {
			s();
		}
		catch(Exception e){
			System.out.println("Exception Occured");
			e.printStackTrace();
			//		e.getMessage(); Methods used to invoke exception objects
		}
		finally {
			System.out.println("This is finally block");
		}// after handling exception only it will execute ...............optional
		System.out.println("code after Exception");

	}
	public static void s() {
		StringBuilder sb = new StringBuilder(-1);
	}
}
