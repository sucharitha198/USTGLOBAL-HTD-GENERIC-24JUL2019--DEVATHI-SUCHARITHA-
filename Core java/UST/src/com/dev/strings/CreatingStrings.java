package com.dev.strings;

public class CreatingStrings {
	public static void main(String[] args) {
		String str;
		str = "HELLO";
		
		String str1="JAVA";
		
		String str2 = new String("HELLO JAVA"); // str2 the reference variable stores the address of the object
		
		StringBuffer sb = new StringBuffer("Hello");
		StringBuilder sbi = new StringBuilder("HAiii");
		
//		StringBuffer sb1 = new StringBuffer(-1);  NegativeArraySizeException  if the {@code capacity} argument is less than {@code 0}.
		
		String str3 = new String(" ");
		
		System.out.println("String address: "+str3);
		System.out.println(str);
		System.out.println(str1);
		System.out.println(str2);
		System.out.println("StringBuffer: "+sb);
		System.out.println("StringBuilder: " +sbi);
		System.out.println(sb.length());
		System.out.println(sb.capacity());
	}

}
