package com.dev.methods;

public class ArithematicOperations {
	static ArithematicOperations ao = new ArithematicOperations();
	// Multiplication of 2,3,4 arguments -method overloading
	public void mul(int i,int j) {
		int s = i*j;
		System.out.println("multiplication of "+i+","+j+" is  "+s);
	}
	public void mul(int i,int j,int k) {
		int s = i*j*k;
		System.out.println("multiplication of "+i+","+j+","+k+" is  "+s);
	}
	public void mul(int i,int j,int k,int m) {
		int s = i*j*k*m;
		System.out.println("multiplication of "+i+","+j+","+k+","+m+" is  "+s);
	}
	// Addition of 2,3,4 arguments -method overloading
	public void add(int j , int k) {
		int s = j+k;
		System.out.println("Addition of "+j+","+k+" is "+  s);
	}
	public void add(int j , int k , int l) {
		int s = j+k+l;
		System.out.println("Addition of "+j+","+k+","+l+" is "+  s);
	}
	public void add(int j , int k , int l,int m) {
		int s = j+k+l+m;
		System.out.println("Addition of "+j+","+k+","+l+","+m+" is "+  s);
	}
	// Subtraction of 2,3,4 arguments -method overloading
	public void sub( int j,int k) {
		int m= j-k;
		System.out.println("substraction of "+j+","+k+" is " +m);
	}
	public void sub( int j,int k,int l) {
		int m= j-k-l;
		System.out.println("substraction of "+j+","+k+","+l+" is " +m);
	}
	public void sub( int j,int k,int l,int n) {
		int m= j-k-l;
		System.out.println("substraction of "+j+","+k+","+l+","+n+" is " +m);
	}
	//Division of 2,3,4 arguments -method overloading
	public void div(int i,int j) {
		int m=i/j;
		System.out.println("division of "+i+","+j+ " is "+m );
	}
	public void div(int i,int j, int k) {
		int m=i/j/k;
		System.out.println("division of "+i+","+j+","+k+ " is "+m );
	}
	public void div(int i,int j, int k,int l) {
		int m=i/j/k/l;
		System.out.println("division of "+i+","+j+","+k+","+l+ " is "+m );
	}
	public static void main(String[] args) {
		ao.add(10, 20);
		ao.add(29,34,89);
		ao.add(32,43,65,67);

		ao.sub(98, 43);
		ao.sub(78, 43,21);
		ao.sub(98, 41,12,67);
		ao.mul(23,12);
		ao.mul(1, 3,4);
		ao.mul(3, 5,7,9);
		ao.div(90, 10);
		ao.div(31,2,1);
		ao.div(21, 4,2,1);

	}

}
