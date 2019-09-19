package com.dev.methods;

public class Method {
	static int j=0;
	static Method me = new Method();
	public static void main(String[] args) {
		int j = calcArea(9);
		System.out.println("Area of square is: "+j);

		int area1 = me.areaRec(3, 7);
		System.out.println("Area of rectangle: " +area1);
	}
	public static int calcArea(int side) {
		int t = side*side;
		int n = me.areaRec(3, 20);
		System.out.println(n);
		return t;
	}

	public int areaRec(int len, int width) {
		int j = len*width;
		return j;
	}

}
