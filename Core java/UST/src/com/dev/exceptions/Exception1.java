package com.dev.exceptions;

public class Exception1 {

	public static void main(String[] args) throws CustomException{
		
try {
	s();
	divide(10,0);
}
catch (Exception e) {
	throw new CustomException();
}}
	
	public static int divide (int i , int j) {
		int res = i/j;
		System.out.println(res);
		return 1;
	}
public static void s() {
	try {
		StringBuffer sb = new StringBuffer(-1);
		}
	catch(Exception e){
		new CustomException().printStackTrace();
		System.out.println("catch block");
		System.out.println("getLocalizedMessage(): "+	new CustomException().getLocalizedMessage());
		
		
	}

	}
}