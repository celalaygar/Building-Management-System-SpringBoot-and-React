package com.example.demo.model;

import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.Valid;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

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
@Table(name = "building")
public class Building {

	@Id
	@Column(name = "id")
	@SequenceGenerator(name = "seq_building", initialValue = 1, allocationSize = 1)
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seq_building")
	private Long id;

	@Column(name = "building_name",  length = 1000)
	@NotEmpty
	@NotNull
	@Size(min = 5, max = 1000)
	private String buildingName;
	
	@Column(name = "building_adress",  length = 1000)
	@NotEmpty
	@NotNull
	@Size(min = 5, max = 1000)
	private String buildingAdress;
	
	@Column(name = "createdAt")
	@Temporal(TemporalType.TIMESTAMP)
	private Date createdAt;
	
	@Column(name = "start_date", unique = true)
	@Temporal(TemporalType.DATE)
	private Date startDate;
	
	@OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL, mappedBy = "building")
	private BuildingAdress adress;

	@ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", referencedColumnName = "id")
	private User createdUser;
	
	@OneToMany(mappedBy = "building")
    @Valid private List<Apartment> apartments;
	
//    @Column(name = "alim_zamani", columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
//    @Temporal(TemporalType.TIMESTAMP)
//    private Date alimZamani;
}
