package com.jhoannaPereira.honeycomb;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication
@EnableMongoRepositories
public class HoneycombApplication {

	public static void main(String[] args) {
		SpringApplication.run(HoneycombApplication.class, args);

		//System.out.println("hola");
	}
}
