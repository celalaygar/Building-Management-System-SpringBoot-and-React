package com.example.demo.model;

import java.util.Date;

import javax.persistence.*;

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
	
	@Column(name  = "uname",nullable = false)
	@NotNull
	private String username;
	
	@Column(name  = "name")
	private String name;
	
	@Column(name  = "surname")
	private String surname;
	
	@Column(name  = "password")
	private String password;
	
	@Column(name  = "real_password")
	private String realPassword;
	
	@Column(name  = "email", nullable = false)
	@NotNull
	private String email;
	
	@Column(name  = "bornDate")
	private Date bornDate;

	@Column(name  = "createdDate")
	private Date createdDate;
	
	@Column(name  = "status")
	private int status;
	
}
