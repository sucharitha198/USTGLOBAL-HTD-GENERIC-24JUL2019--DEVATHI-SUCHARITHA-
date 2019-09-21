package com.dev.Employee_info;

public class Leave {
	private int id;
	private String leaveDate;
	private String leaveStatus;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getLeaveDate() {
		return leaveDate;
	}
	public void setLeaveDate(String leaveDate) {
		this.leaveDate = leaveDate;
	}
	public String getLeaveStatus() {
		return leaveStatus;
	}
	public void setLeaveStatus(String leaveStatus) {
		this.leaveStatus = leaveStatus;
	}
	@Override
	public String toString() {
		return "Leave [id=" + id + ", leaveDate=" + leaveDate + ", leaveStatus=" + leaveStatus + "]";
	}
	
	

}
