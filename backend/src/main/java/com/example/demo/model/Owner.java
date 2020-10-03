package com.example.demo.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Data
@EqualsAndHashCode
@Entity
@Table(name = "owner")
public class Owner {
	@Id
	@Column(name = "id")
	@SequenceGenerator(name = "seq_owner", initialValue = 1, allocationSize = 1)
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seq_owner")
	private Long id;
	@Column(name = "name", unique = true, length = 5000)
	private String name;
	@Column(name = "surname", unique = true, length = 5000)
	private String surname;
	private Date bornDate;
	@Column(name = "tcNo", unique = true,length = 11)
	private String tcNo;
	
    @OneToOne(mappedBy = "owner")
	private Apartment apartment;
}
