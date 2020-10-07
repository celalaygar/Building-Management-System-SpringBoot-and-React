package com.example.demo.dto;

import com.example.demo.model.Building;
import com.example.demo.model.BuildingAdress;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Data
public class BuildingAdressDto {
    private Long id;
    private String city;
    private String district;
    private String quarter;
    private String street;
    private String buildingNo;
    private String image;
    
    public BuildingAdressDto(BuildingAdress adress) {
    	this.id = adress.getId();
    	this.city = adress.getCity();
    	this.district = adress.getDistrict();
    	this.quarter = adress.getQuarter();
    	this.street = adress.getStreet();
    	this.buildingNo = adress.getBuildingNo(); 
    	this.image = adress.getImage();
    }
}
