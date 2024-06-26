package com.jhoannaPereira.honeycomb.model;

import jakarta.persistence.Id;
import lombok.Data;
import lombok.NonNull;
import org.antlr.v4.runtime.misc.NotNull;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("user")
@Data
public class User {

    @Id
    private String id;
    @NonNull
    @Indexed(unique = true)
    private String name;
    @NonNull
    @Indexed(unique = true)
    private String email;
    @NonNull
    private String password;
    private int role;
    private String profileImage; // Base64 encoded image

    public User() {
    }
}
