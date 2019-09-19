package com.dev.arrays;

public class Creating_Array {

	public static void main(String[] args) {
		int []intArr;
		char[] charr;
		byte byteArr[]; // Declaration
		intArr = new int[5];
		charr = new char[5];
		byteArr = new byte[5]; // creation
		intArr[0] = 1;
		intArr[1] = 2;
		intArr[2] = 3;
		intArr[3] = 4;
		intArr[4] = 5;
		charr[0] = 'A';
		charr[1] = 'B';
		charr[2] = 'C';
		charr[3] = 'D';
		charr[4] = 'E';
		byteArr[0] = 0 ;
		byteArr[1] = 1 ;
		byteArr[2] = 1 ;
		byteArr[3] = 0 ;
		byteArr[4] = 1 ; // Initialization
		
		int res = intArr[1]*3;
		System.out.println(res);
		int a = intArr[0]+3;
		System.out.println(a);
		int b = intArr[2]-3;
		System.out.println(b);
		int c = intArr[3]/4;
		System.out.println(c);
		int d = intArr[4]%4;
		System.out.println(d);
		
	}

}

