package com.sujoy.service;

import java.util.List;

import com.sujoy.exception.ProductException;
import com.sujoy.modal.Rating;
import com.sujoy.modal.User;
import com.sujoy.request.RatingRequest;

public interface RatingServices {

	public Rating createRating(RatingRequest req, User user) throws ProductException;

	public List<Rating> getProductsRating(Long productId);

}
