package com.jhoannaPereira.honeycomb.model;

import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.Date;
@Data
@Document("events")
@AllArgsConstructor
public class Event {
    @Id
    private String id;
    @OneToMany
    @JoinColumn(name = "id",referencedColumnName = "idUser")
    private User user;

    private String idUser;
    private Date start;
    private Date end;
    private String title;


    public Event() {
    }
}
