package com.sujoy.service;

import java.util.List;

import com.sujoy.exception.UserException;
import com.sujoy.modal.User;

public interface UserService {

	public User findUserById(Long userId) throws UserException;

	public User findUserProfileByJwt(String jwt) throws UserException;

	public List<User> findAllUsers();

}
