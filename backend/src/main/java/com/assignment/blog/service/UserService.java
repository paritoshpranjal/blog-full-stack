package com.assignment.blog.service;

import com.assignment.blog.entity.User;

public interface UserService {
    User registerUser(User user);
    User getUserByEmail(String email);
}
