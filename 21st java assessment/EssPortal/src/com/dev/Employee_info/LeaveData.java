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
		e1.setPassword("ankita");

		Leave l1 = new Leave();
		l1.setId(101);
		l1.setLeaveDate("21/09/2019");
		l1.setLeaveStatus("pending");
		
		Leave l2 = new Leave();
		l2.setId(102);
		l2.setLeaveDate("17/10/2019");
		l2.setLeaveStatus("pending");
		
		ls.add("5" ,l1);
		ls.add("6" ,l2);
		
	
		System.out.println("Manager");
		
		System.out.println("press 1 to see leave requests "
				+ "press 2 to approve/reject");
		Scanner s = new Scanner(System.in);
		int k = s.nextInt();
		
		if(k==1) {
			if(e1.getEmployeeId()==101 && (e1.getPassword())=="ankita") {
				ls.get();
			}
		}
		if(k==2) {
			if(e1.getEmployeeId()==101 && (e1.getPassword())=="ankita") {
				l1.setLeaveStatus("Approved");
				ls.get();
				
			}
			}
		}
	}
