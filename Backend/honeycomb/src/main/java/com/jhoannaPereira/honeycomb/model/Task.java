package com.jhoannaPereira.honeycomb.model;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("taskmaker")
@Data
@AllArgsConstructor
public class Task {

    @Id
    private String id;

    @OneToMany
    @JoinColumn(name = "id",referencedColumnName = "idUser")
    private User user;

    private String idUser;
    private String title;
    private String description;
    private Boolean priority;

    public Task() {

    }
}
