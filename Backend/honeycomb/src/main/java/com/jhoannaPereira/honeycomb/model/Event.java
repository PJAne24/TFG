package com.jhoannaPereira.honeycomb.model;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.Date;
@Data
@Document("events")
public class Event {
    @Id
    private String id;
    private String idUser;
    private Date start;
    private Date end;
    private String title;


    public Event() {
    }
}
