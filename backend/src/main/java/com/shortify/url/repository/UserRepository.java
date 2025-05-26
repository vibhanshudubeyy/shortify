package com.shortify.url.repository;

import com.shortify.url.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public class UserRepository extends JpaRepository<User, Long>{
    public UserRepository() {

    }

    public String findByUsername(String username) {
        return findByUsername(username);
    }

}
