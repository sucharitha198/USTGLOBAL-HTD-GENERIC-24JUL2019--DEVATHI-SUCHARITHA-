package com.dev.encapsulation;

public class Dog implements Comparable<Dog>{
	@Override
	public String toString() {
		return "Dog [name=" + name + ", age=" + age + ", breed=" + breed + ", color=" + color + "]";
	}
	private String name;
	private int age;
	private String breed;
	private String color;
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public String getBreed() {
		return breed;
	}
	public void setBreed(String breed) {
		this.breed = breed;
	}
	public String getColor() {
		return color;
	}
	public void setColor(String color) {
		this.color = color;
	}
	@Override
	public int compareTo(Dog c) {
		// TODO Auto-generated method stub
		return (this.age - c.age);
	}
		}



