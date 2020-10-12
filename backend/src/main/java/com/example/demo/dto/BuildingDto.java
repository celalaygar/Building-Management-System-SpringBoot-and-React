package com.example.demo.dto;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.example.demo.model.Building;
import com.example.demo.model.BuildingAdress;
import com.example.demo.model.User;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Getter
@Setter
public class BuildingDto {
    private Long id;
	@NotEmpty
	@NotNull
	@Size(min = 5, max = 1000)
    private String buildingName;
	@NotEmpty
	@NotNull
	@Size(min = 5, max = 1000)
    private String buildingAdress;
    private Date createdAt;
    private Date startDate;
    private BuildingAdressDto adress;
    private UserDto createdUser;
    public BuildingDto() {
		// TODO Auto-generated constructor stub
	}
    public BuildingDto(Building building) {
    	this.id=building.getId();
    	this.buildingName = building.getBuildingName();
    	this.buildingAdress = building.getBuildingAdress();
    	this.createdAt = building.getCreatedAt();
    	this.startDate = building.getStartDate();
    	this.adress = new BuildingAdressDto(building.getAdress());
    	this.createdUser = new UserDto(building.getCreatedUser());
    	
    }
}
