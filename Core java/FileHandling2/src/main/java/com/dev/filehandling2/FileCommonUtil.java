package com.dev.filehandling2;

import java.io.File;
import java.io.IOException;

import org.apache.commons.io.FileUtils;

public class FileCommonUtil {

	public static void main(String[] args) throws IOException {
		File file = new File("D:/Text.txt");
		FileUtils.touch(file);
		
		if(file.exists()) {
			System.out.println("File Exists....");
		}else {
			System.out.println("File doesn't exist...");
		}
		
		FileUtils.deleteQuietly(file);
		if(file.exists()) {
			System.out.println("File exixts...");
		}else {
			System.out.println("File doesn't eists....");
		}

	}

}
