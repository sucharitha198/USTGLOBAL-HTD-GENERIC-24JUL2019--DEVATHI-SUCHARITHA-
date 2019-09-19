package com.dev.lambdaexp;

public class Test {

	public static void main(String[] args) {
		FuncInt f = () -> {
			for (int i = 1; i <=10; i++) {
				System.out.println("i= "+i);	
			}
		}; //lamda expression
		f.printVal();
	}

		/*FuncInt f = () -> {
			try {
				int i = 10/0;
				System.out.println(i);
			}catch(Exception e) {
				System.out.println("Exception");
			}	
		};
		f.printVal();

		 */
		/*
		 * FuncInt f = () -> System.out.println("hai"); f.printVal();
		 */

		/*
		 * FuncInt2 f2 = (int i) -> { for (int j = 1; j <=i; j++) {
		 * System.out.println(j); } }; f2.printVal(5);
		 */

	}
