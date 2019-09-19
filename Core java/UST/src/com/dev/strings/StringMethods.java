package com.dev.strings;

public class StringMethods {

	public static void main(String[] args) {
		String str = "DevAthi_sucHaritha";
		String str1 = "devathi sucharitha";
		// length()
		int length = str.length();
		System.out.println("Output for length() : "+length);
		
		 // toCharArray():returns character array
		char[] ch = str.toCharArray();
		System.out.println("Output for toCharArray() : "+ch[9]);

		//range : 0 to length()-1 returns particular character
		char c = str.charAt(8);
		System.out.println("Output for charAt() : "+c);
		
		//equals :returns boolean
		boolean b = str.equals(str1);
		System.out.println("Output for equals : "+b);
		
		//Ignores cases of the letters  
		boolean d = str.equalsIgnoreCase(str1);
		System.out.println("Output for equalsIgnoreCase() : "+d);
		
		//contains() for checking the char is present or not in the string
		boolean v = str.contains("char");
		System.out.println("Output for contains() : "+v);
		
		//replace( , )
		String s = str.replace('D', 'R');
		System.out.println("Output for contains() : "+s);
		
		//indexOf()
		int y = str.indexOf('a');
		System.out.println("Output for indexOf() :"+y);
		
		//toUpperCase
		String si = str1.toUpperCase();
		System.out.println(si);
		
		//toLowerCase
		String i = str1.toLowerCase();
		System.out.println(i);
		
		// substring()
		String a = str.substring(7);
		System.out.println("Output for substr(): "+a);
		
		// start index included ,end index not included in the substring,max index value :length()
		String q = str.substring(3, 18);
		System.out.println("output for substr(int,int) : " +q);
		
		
				
	}
}