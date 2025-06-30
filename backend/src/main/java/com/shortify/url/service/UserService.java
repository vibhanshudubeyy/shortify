package com.shortify.url.service;

import com.shortify.url.dtos.LoginRequest;
import com.shortify.url.models.User;
import com.shortify.url.security.jwt.JwtAuthenticationResponse;

public interface UserService {
    User registerUser(User user);
    JwtAuthenticationResponse authenticateUser(LoginRequest loginRequest);
}
