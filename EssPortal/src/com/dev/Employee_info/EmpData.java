package com.dev.Employee_info;

import java.util.HashMap;
import java.util.Scanner;

public class EmpData {

	HashMap<String , Emp> hm = new HashMap<String , Emp>();
	
	public static void main(String[] args) {

		EmpIntImp eii = new EmpIntImp();
		Emp e1 = new Emp();
		Emp e2 = new Emp();
		Emp e3 = new Emp();
		
		System.out.println("press 1 to register");
		Scanner scn = new Scanner(System.in);
		int n = scn.nextInt();
		if ( n==1 ) {
			e1.setEmployeeId(101);
			e1.setEmployeeName("Ankith");
			e1.setEmployeeType("Employee");
			e1.setEmail("ankith.c@gmail.com");
			e1.setPassword("ankith");

			eii.add("1", e1);
			
			e2.setEmployeeId(102);
			e2.setEmployeeName("Ramesh");
			e2.setEmployeeType("Employee");
			e2.setEmail("ramesh@gmail.com");
			e2.setPassword("ramesh");

			eii.add("2", e2);
			
			e3.setEmployeeId(103);
			e3.setEmployeeName("Suresh");
			e3.setEmployeeType("Employee");
			e3.setEmail("suresh@gmail.com");
			e3.setPassword("suresh");

			eii.get();
			System.out.println("Employee 1 & 2  registered successfully");

			System.out.println("press 2 to login");
			Scanner sc = new Scanner(System.in);
			int i = sc.nextInt();			

			if(i==2) {
				System.out.println("Enter Employee_ID to login");
				int id = sc.nextInt();
				System.out.println("Enter Password");
				String psd = sc.next();
				
				if((id==e1.getEmployeeId()) && (psd.equals(e1.getPassword())) || (id==e3.getEmployeeId()) && (psd.equals(e3.getPassword()))){
					System.out.println("login success");
				}else {
					System.out.println("id and password doesn't match");
				}	
			}
		}
	}
}
