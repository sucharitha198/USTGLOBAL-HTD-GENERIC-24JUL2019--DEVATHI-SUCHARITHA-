package com.dev.finalassessment;

import java.util.ArrayList;
import java.util.HashMap;

public class ContactOperations {

	static HashMap<String, ArrayList<Contact>> hm = new HashMap<String, ArrayList<Contact>>();

	public static boolean add(String s,ArrayList<Contact> arr) {
		if (arr!=null) {
			hm.put(s, arr);
			System.out.println(hm);
			return true;
		}
		return false;
	}
	public void getData() {
		System.out.println(hm);

	}
	}

