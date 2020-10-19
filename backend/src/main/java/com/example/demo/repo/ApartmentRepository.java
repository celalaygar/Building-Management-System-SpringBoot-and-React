package com.example.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Flat;

public interface ApartmentRepository extends JpaRepository<Flat, Long> {

}
