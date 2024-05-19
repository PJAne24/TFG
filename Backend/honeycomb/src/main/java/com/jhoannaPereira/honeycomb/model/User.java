package com.jhoannaPereira.honeycomb.model;

import jakarta.persistence.Id;
import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("user")
@Data
public class User {

    @Id
    private Integer id;
    private String user;
    private String password;

    public User() {
    }
}
