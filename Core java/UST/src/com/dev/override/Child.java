package com.dev.override;

public class Child extends Parent {
	static Child c = new Child();
	@Override
	public void m1() {
		int k = 10;
		int m = 90;
		System.out.println(k-m);

	}
//	@Override
//	public void m2() { // private methods can't be overridden
//		int i=10;
//		int j =20;
//		System.out.println(i =-j);
//	}
//	@Override
//	public void m3() { // final methods can't be overridden
//		String s = "s";
//		String d ="f";
//		System.out.println(s+d);
//	}
	public static void main(String[] args) {
		c.m1();
//		c.m2();
//		c.m3();
	}
}
