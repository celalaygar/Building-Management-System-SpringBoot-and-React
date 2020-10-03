package com.example.demo.dto;

import java.util.Date;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Data
public class ApartmentDto {

    private Long id;
    
    private String apartmentNo;
    private String apartmentDetail;
    private Date createdDate;
}
