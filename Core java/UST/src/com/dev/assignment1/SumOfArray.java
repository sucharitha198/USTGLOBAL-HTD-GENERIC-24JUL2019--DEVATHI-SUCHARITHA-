package com.dev.assignment1;

public class SumOfArray {

	public static void main(String[] args) {
		int[] arr = {10,20,30,40,50,60};
		int a = arr[0];
		int c = arr.length-1;
		int b = arr.length/2;
		System.out.println(a+arr[b]+arr[c]);
}
}