package com.dev.strings;

public class PracticeMethods {

	public static void main(String[] args) {
		String str = "UST GLOBAl";
		String str1 = "ust global";

		System.out.println(str.length());
		System.out.println(str.toCharArray());
		System.out.println(str.charAt(6));
		System.out.println(str.equals(str1));
		System.out.println(str.equalsIgnoreCase(str1));

		int length = str.length();
		System.out.println("Output for length() : "+length);

		char[] ch = str.toCharArray();
		System.out.println("Output for toCharArray() : "+ch);


		char c = str.charAt(8);
		System.out.println("Output for charAt() : "+c);


		boolean b = str.equals(str1);
		System.out.println("Output for equals : "+b);

		boolean d = str.equalsIgnoreCase(str1);
		System.out.println("Output for equalsIgnoreCase() : "+d);


	}

}
