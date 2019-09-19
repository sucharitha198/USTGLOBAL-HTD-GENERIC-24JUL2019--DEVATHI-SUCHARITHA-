package com.dev.arrays;

public class ArrayControlFlow {

	public static void main(String[] args) {
		int[]  intArr = {12,13,1,3,4,6,7};
		int index = 5;
		if(index>=0 && index<intArr.length) {
			System.out.println("index is present");
			for (int i = 0;i<index ;i++) {
				System.out.println(intArr[i]);
			}

		}else {
			System.out.println("provide the index value lesst than 7");

		}


	}

}
