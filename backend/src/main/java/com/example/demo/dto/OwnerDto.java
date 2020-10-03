package com.example.demo.dto;

import java.util.Date;

import javax.persistence.Column;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
@Getter
@Setter
@Data
public class OwnerDto {

	private Long id;
	private String name;
	private String surname;
	private Date bornDate;
	private String tcNo;
}
