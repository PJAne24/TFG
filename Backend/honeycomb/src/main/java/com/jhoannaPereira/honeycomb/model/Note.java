package com.jhoannaPereira.honeycomb.model;

import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;

public class Note {

    @Id
    private String id;
    @OneToMany
    @JoinColumn(name = "id",referencedColumnName = "idUser")
    private User user;
    private String idUser;
    private String description;
}
