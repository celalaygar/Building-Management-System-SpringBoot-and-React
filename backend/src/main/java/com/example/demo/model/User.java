package com.example.demo.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

import org.hibernate.validator.constraints.UniqueElements;

import com.sun.istack.NotNull;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name  = "users")
public class User {
	@Id
	@GeneratedValue (strategy = GenerationType.AUTO)
	private Long id;
	
	
	@Column(name  = "uname",nullable = false,length = 200, unique = true)
	private String username;
	
	@Column(name  = "name")
	private String name;
	
	@Column(name  = "surname")
	private String surname;
	
	@Column(name  = "password")
	@NotNull
	private String password;
	
	@Column(name  = "real_password")
	private String realPassword;
	
	@Column(name  = "email",unique = true )
	@NotEmpty
	@Size(min = 10,max = 200, message = "Email adresi mevcuttur.")
	private String email;
	
	
	@Column(name  = "bornDate")
	private Date bornDate;

	@Column(name  = "createdDate")
	private Date createdDate;
	
	@Column(name  = "status")
	private int status;
	
}
