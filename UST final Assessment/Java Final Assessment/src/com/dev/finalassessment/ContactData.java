package com.dev.finalassessment;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Scanner;

public class ContactData {

	public static void main(String[] args) {
		ContactOperations co = new ContactOperations();
		HashMap<String, ArrayList<Contact>> hm = new HashMap<String, ArrayList<Contact>>();
		 
		ArrayList<Contact> em = new ArrayList<Contact>();

		Contact c = new Contact();
		c.setName("suchi");
		c.setNumber(915412024);
		c.setGroup("Family");

		Contact c1 = new Contact();
		c1.setName("Harshini");
		c1.setNumber(701386910);
		c1.setGroup("Friend");

		Contact c2 = new Contact();
		c2.setName("Deepika");
		c2.setNumber(701381090);
		c2.setGroup("Friend");

		em.add(c);
		em.add(c1);
		em.add(c2);

		System.out.println("Enter 1 to see the contact names");
		System.out.println("Enter 2 to search for contact");
		System.out.println("Enter 3 to operate on contact");
		Scanner scn = new Scanner(System.in);
		int e = scn.nextInt();

		if(e == 1) {
			for(Contact h: em){
				System.out.println(h.getName()); 
			}

		}
		else if(e == 2) {
			System.out.println("Enter Contact Name");
			String s = scn.next();
			for(Contact h: em){
				if(s.equalsIgnoreCase(h.getName())) {
					System.out.println("press 1 to call");
					System.out.println("Press 2 message");
					System.out.println("Press 3 to go to the main menu");
					int z = scn.nextInt();
					if(z == 1) {
						System.out.println("calling to ........ "+s);
						System.out.println("press 9  to end the call");
						int w = scn.nextInt();
						System.out.println("Call Ended.....");
					}
					else if(z == 2) {
						System.out.println("Type the Message");
						String o = scn.next();
						System.out.println("Sending message to "+h.getName() +":"+ o);
					}
					else if(z == 3) {
						System.out.println("Main menu");
					}
				}
			}
		}else if( e==3 ) {
			System.out.println("Press 1 to add Contact");
			System.out.println("Press 2 to Delete Contact");
			System.out.println("Press 3 to edit contact");
			int i = scn.nextInt();
			if(i==1) {
			System.out.println("Enter Name: ");
			String name = scn.next();
			System.out.println("Enter Number: ");
			long number = scn.nextInt();
			System.out.println("Enter Group");
			String group = scn.next();
			Contact c3 = new Contact();
			c3.setName(name);
			c3.setNumber(number);
			c3.setGroup(group);
			em.add(c3);
			for(Contact h: em){
				System.out.println(h.getName()); 
			}
		}else if(i == 2) {
			System.out.println("Before Deleting");
			System.out.println(em);
			em.remove(c2);
			System.out.println(em);
			
	}else if(i == 3) {
		System.out.println(em);
		String n = scn.next();
		c1.setName(n);
		em.add(c1);
		System.out.println(em);
	}
		}
	}
}