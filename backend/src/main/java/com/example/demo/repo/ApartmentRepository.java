package com.example.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Apartment;

public interface ApartmentRepository extends JpaRepository<Apartment, Long> {

}
