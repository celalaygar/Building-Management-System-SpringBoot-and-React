package com.example.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Apartment;
import com.example.demo.model.Owner;

public interface OwnerRepository extends JpaRepository<Owner, Long> {

}
