package com.shortify.url.service;

import com.shortify.url.dtos.LoginRequest;
import com.shortify.url.models.User;
import com.shortify.url.repository.UserRepository;
import com.shortify.url.security.jwt.JwtAuthenticationResponse;
import com.shortify.url.security.jwt.JwtUtils;
import lombok.AllArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService {

    private final PasswordEncoder passwordEncoder;
    private final UserRepository userRepository;
    private final AuthenticationManager authenticationManager;
    private JwtUtils jwtUtils;

    @Override
    public User registerUser(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

    @Override
    public JwtAuthenticationResponse authenticateUser(LoginRequest loginRequest) {
        try {
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            loginRequest.getUsername(),
                            loginRequest.getPassword()
                    )
            );

            System.out.println("✅ User authenticated: " + authentication.getName());
            SecurityContextHolder.getContext().setAuthentication(authentication);

            UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
            String jwt = jwtUtils.generateToken(userDetails);

            return new JwtAuthenticationResponse(jwt);
        } catch (Exception ex) {
            System.err.println("❌ Authentication failed: " + ex.getMessage());
            ex.printStackTrace();  // Log full cause
            throw ex; // rethrow so you still get the 403, but now we know why
        }
    }


}
