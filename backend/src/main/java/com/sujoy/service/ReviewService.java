package com.sujoy.service;

import java.util.List;

import com.sujoy.exception.ProductException;
import com.sujoy.modal.Review;
import com.sujoy.modal.User;
import com.sujoy.request.ReviewRequest;

public interface ReviewService {

	public Review createReview(ReviewRequest req, User user) throws ProductException;

	public List<Review> getAllReview(Long productId);

}
