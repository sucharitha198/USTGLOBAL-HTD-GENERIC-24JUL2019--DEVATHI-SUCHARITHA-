package com.dev.Employee_info;

import java.util.HashMap;
import java.util.Scanner;

public class EmpData {

	HashMap<String , Emp> hm = new HashMap<String , Emp>();
	
	
	public static void main(String[] args) {

		EmpIntImp eii = new EmpIntImp();
		Emp e1 = new Emp();
		Emp e2 = new Emp();
		
		System.out.println("press 1 to register");
		Scanner scn = new Scanner(System.in);
		int n = scn.nextInt();
		if ( n==1 ) {
			e1.setEmployeeId(101);
			e1.setEmployeeName("Ankith");
			e1.setEmployeeType("Employee");
			e1.setEmail("ankith.c@gmail.com");
			e1.setPassword("ankita");

			String c = eii.add("1", e1);
			

			e2.setEmployeeId(102);
			e2.setEmployeeName("Ramesh");
			e2.setEmployeeType("Employee");
			e2.setEmail("ramesh@gmail.com");
			e2.setPassword("ramesh@123");

			String d = eii.add("2", e2);

			eii.get();
			System.out.println("Employee 1 & 2  registered successfully");

			System.out.println("press 2 to login");
			Scanner sc = new Scanner(System.in);
			int i = sc.nextInt();

			if(i==2) {
				boolean p =((e2.getEmployeeId()==101) && (e1.getPassword())=="ankita");
				if(p) {
					System.out.println("login success");
				}else {
					System.out.println("enter correct details");
				}
				boolean p1 =((e1.getEmployeeId()==101) && (e1.getPassword())=="ankita");
				if(p1) {
					System.out.println("entered correct details");
					System.out.println("login success");
				}else {
					System.out.println("enter correct details");
				}
				
			}
		}
	}
}
