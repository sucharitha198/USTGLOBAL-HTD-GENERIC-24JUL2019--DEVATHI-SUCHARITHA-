package com.dev.methods;

public class Method2 {

	public static void main(String[] args) {
		int area = Method.calcArea(8);
		System.out.println("Calling method from another class: "+area);

		Method m = new Method();
		int a = m.areaRec(3 ,5);
		System.out.println("area of rectangle: " +a);
	}

}
