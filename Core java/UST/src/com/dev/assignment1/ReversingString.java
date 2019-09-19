package com.dev.assignment1;

public class ReversingString {

	public static void main(String[] args) {
		String str = "JAVA";
		String s = " ";
		for(int i= str.length()-1;i>=0 ;i--) {
			s = s + str.charAt(i);

		}
		System.out.println(s);
	}
}
