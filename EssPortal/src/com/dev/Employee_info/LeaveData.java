package com.dev.Employee_info;

import java.util.HashMap;
import java.util.Scanner;

public class LeaveData {

	HashMap<String , Leave> h = new HashMap<String , Leave>();

	public static void main(String[] args) {

		LeaveStatus ls = new LeaveStatus();

		Emp e1 = new Emp();
		e1.setEmployeeId(101);
		e1.setEmployeeName("Ankith");
		e1.setEmployeeType("Employee");
		e1.setEmail("ankith.c@gmail.com");
		e1.setPassword("ankith");

		Emp e2 = new Emp();
		e2.setEmployeeId(102);
		e2.setEmployeeName("Ramesh");
		e2.setEmployeeType("Employee");
		e2.setEmail("ramesh@gmail.com");
		e2.setPassword("ramesh");

		Emp e3 = new Emp();
		e3.setEmployeeId(103);
		e3.setEmployeeName("Suresh");
		e3.setEmployeeType("Employee");
		e3.setEmail("suresh@gmail.com");
		e3.setPassword("suresh");

		Leave l1 = new Leave();
		l1.setId(101);
		l1.setLeaveDate("21/09/2019");
		l1.setLeaveStatus("pending");

		Leave l3 = new Leave();
		l3.setId(103);
		l3.setLeaveDate("17/10/2019");
		l3.setLeaveStatus("pending");

		ls.add("5" ,l1);
		ls.add("6" ,l3);

		System.out.println("press 1 to user as 'Manager'");
		System.out.println("Press 2 to user as 'Employee'");

		Scanner s = new Scanner(System.in);
		int i = s.nextInt();

		if(i==1) {
			System.out.println("logged into Manager account");
			System.out.println("press 1 to see leave requests");
			System.out.println("press 2 to approve/reject");
			int k = s.nextInt();
			if(k==1) {
				if(((e1.getEmployeeId()==101) && (e1.getPassword()=="ankith")) || 
						((e3.getEmployeeId()==103) && (e3.getPassword()=="suresh"))) {
					ls.get();
				}
			}
			if(k==2) {
				if(e1.getEmployeeId()==101 && (e1.getPassword())=="ankith") {
					if(e3.getEmployeeId()==103 && (e3.getPassword())=="suresh")
						l1.setLeaveStatus("Approved");
					l3.setLeaveStatus("Rejected");
					ls.get();
				}
			}
		} else if(i==2) {
			System.out.println("logged into Employee account");
			System.out.println("press 1 to see leave requests");
			System.out.println("press 2 to request a leave");
			int k1 = s.nextInt();
			if(k1==1) {
				if(((e1.getEmployeeId()==101) && (e1.getPassword()=="ankith")) || 
						((e3.getEmployeeId()==103) && (e3.getPassword()=="suresh"))) {
					ls.get();
				}
			}

			if(k1==2) {
				System.out.println("Enter Employee_ID to appply leave");
				int id = s.nextInt();
				System.out.println("Enter Password");
				String psd = s.next();

				if((id==e1.getEmployeeId()) && (psd.equals(e1.getPassword())) ||
						(id==e2.getEmployeeId()) && (psd.equals(e2.getPassword())) ||
						(id==e3.getEmployeeId()) && (psd.equals(e3.getPassword()))){
					System.out.println("Leave request accepted");
				}else {
					System.out.println("Leave not accepted because id and password doesnt match");
				}	
			}
		}
	} 
}
