package com.dev.exceptions;

public class ExceptionHandling2 {

	public static void main(String[] args) {
		try {
			s();
			System.out.println("no Exception caught in s()");	
			int res = divide (10,0);
			System.out.println("no Exception caught in divide()");	
			System.out.println(res);


		}
		catch(NegativeArraySizeException e){
			System.err.println("Exception caught in catch block");
		
			e.printStackTrace(); //explanation of error will display

		}
		catch(ArithmeticException e) {
			System.err.println("Exception caught in catch block");
			e.printStackTrace(); 
		}

		finally {
			System.out.println("finally block eectes compulsorily");
		}	System.exit(0);


	}
	public static void s() {
		//		StringBuffer str = new StringBuffer(-1);
		StringBuffer str = new StringBuffer(1);
	}
	public static int divide(int i, int j) {
		int res = i/j;
		return res;
	}
}

