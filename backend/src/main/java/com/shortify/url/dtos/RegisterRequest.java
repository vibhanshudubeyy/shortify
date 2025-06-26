package com.shortify.url.dtos;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.util.Set;

@Data
public class RegisterRequest {
    private String username;
    private String password;
    private Set<String> roles;
    private String email;
}
