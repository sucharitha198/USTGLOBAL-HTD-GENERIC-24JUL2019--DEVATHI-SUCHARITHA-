/*we can provide multiple exceptions
 * if there is no problem in the code it wont throw exception
 * if there is no throws at particular method
 * that calling method can also have throws */
package com.dev.exceptions;

public class throwsException {
	public static void main(String[] args) throws Exception,NegativeArraySizeException
	{
		s();
		System.out.println("code after the Exception");
		
	}
	public static void s() throws Exception,NegativeArraySizeException{
		StringBuffer sb = new StringBuffer(-9);
		
		
	}

}
