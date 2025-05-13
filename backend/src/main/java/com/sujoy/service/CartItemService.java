package com.sujoy.service;

import com.sujoy.exception.CartItemException;
import com.sujoy.exception.UserException;
import com.sujoy.modal.Cart;
import com.sujoy.modal.CartItem;
import com.sujoy.modal.Product;

public interface CartItemService {

	public CartItem createCartItem(CartItem cartItem);

	public CartItem updateCartItem(Long userId, Long id, CartItem cartItem) throws CartItemException, UserException;

	public CartItem isCartItemExist(Cart cart, Product product, String size, Long userId);

	public void removeCartItem(Long userId, Long cartItemId) throws CartItemException, UserException;

	public CartItem findCartItemById(Long cartItemId) throws CartItemException;

}
