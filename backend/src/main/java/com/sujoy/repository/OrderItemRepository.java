package com.sujoy.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sujoy.modal.OrderItem;

public interface OrderItemRepository extends JpaRepository<OrderItem, Long> {

}
