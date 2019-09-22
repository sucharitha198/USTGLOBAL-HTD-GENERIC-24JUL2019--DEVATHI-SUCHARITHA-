package com.dev.Employee_info;

import java.util.HashMap;

public class EmpIntImp implements EmpInt {

	HashMap<String , Emp> hm = new HashMap<String , Emp>();

	@Override
	public String add(String key, Emp e) {
		if(e!= null) {
			hm.put(key, e);
			return "Successfully added";
		}
		return "failed to add";
	}

	@Override
	public boolean remove(String key, Emp e) {
		boolean b = hm.remove(key,e);
		if(b) {
			return true;
		}
		return false;
	}

	@Override
	public void get() {
		System.out.println(hm);

	}

}
