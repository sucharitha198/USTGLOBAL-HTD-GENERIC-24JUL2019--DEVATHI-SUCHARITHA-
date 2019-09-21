package com.dev.Employee_info;

import java.util.HashMap;

public class LeaveStatus implements LeaveInt{
	HashMap<String , Leave> h = new HashMap<String , Leave>();
	@Override
	public boolean add(String key, Leave f) {
		if(f!= null) {
			h.put(key, f);
			return true;
		}
		return false;
	}

	@Override
	public void get() {
		System.out.println(h);
		
	}

}
