package com.sujoy.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sujoy.modal.Address;

public interface AddressRepository extends JpaRepository<Address, Long> {

}
