package prac_collections;

import java.util.HashMap;

public class EmpIntImp implements EmpInt{
	HashMap<String ,Emp> hm = new HashMap<String, Emp>();
	@Override
	public boolean putEmp(String key, Emp e) {
		if(e!=null) {
			hm.put(key,e);
			return true;
		}
		return false;
	}

	@Override
	public boolean remove(String key, Emp e) {
		boolean b1 = hm.remove(key,e);
		if(b1) {
		return true;
	}return false;
	}

	@Override
	public void getEmp() {
		System.out.println(hm);
		
	}

}
