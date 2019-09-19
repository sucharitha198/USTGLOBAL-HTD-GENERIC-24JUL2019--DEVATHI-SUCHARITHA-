package com.dev.arrays;

public class CreatingArray {

	public static void main(String[] args) {
		int[] intArr = new int[5];
		
		intArr[0] = 1;
		intArr[1] = 11;
		intArr[2] = 12;
		intArr[3] = 13;
		intArr[4] = 14;
		
		int res = intArr[1]*3;
		System.out.println(res);
		
		int[] intArr2 = {11,12,13,14,15};
		System.out.println(intArr[2]);
		System.out.println("Length of the 2nd array: "+intArr2.length);
		
		
		
	}

}
