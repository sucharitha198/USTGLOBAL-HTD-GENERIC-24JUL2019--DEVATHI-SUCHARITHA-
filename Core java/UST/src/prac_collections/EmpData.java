package prac_collections;


import com.dev.collections.Employee;

public class EmpData {

	public static void main(String[] args) {
		EmpIntImp eii =new EmpIntImp();
		
		Emp e1 = new Emp();
		e1.setName("suchi");
		e1.setId(101);
		e1.setEmail("sucharitha198@gmail.com");
		
		Emp e2 = new Emp();
		e2.setName("sravya");
		e2.setId(142);
		e2.setEmail("sravya@gmail.com");

		Employee e3 = new Employee();
		e3.setName("revanth");
		e3.setId(133);
		e3.setEmail("revanthsteyn@gmail.com");

		Employee e4 = new Employee();
		e4.setName("bhanu");
		e4.setId(104);
		e4.setEmail("ybhanuprakash@gmail.com");
		
		boolean b = eii.putEmp("101",e1);
		boolean b1 = eii.putEmp("102", e2);
		System.out.println(b+""+b1);
		eii.getEmp();
		
		boolean b2 = eii.remove("101", e1);
		System.out.println(b2);
		
		eii.getEmp();

	}

}
