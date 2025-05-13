package com.sujoy.service;

import com.sujoy.exception.ProductException;
import com.sujoy.modal.Cart;
import com.sujoy.modal.CartItem;
import com.sujoy.modal.User;
import com.sujoy.request.AddItemRequest;

public interface CartService {

	public Cart createCart(User user);

	public CartItem addCartItem(Long userId, AddItemRequest req) throws ProductException;

	public Cart findUserCart(Long userId);

}
