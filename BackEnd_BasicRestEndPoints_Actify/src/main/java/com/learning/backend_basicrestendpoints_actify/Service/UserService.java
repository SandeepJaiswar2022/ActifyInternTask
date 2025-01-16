package com.learning.backend_basicrestendpoints_actify.Service;

import com.learning.backend_basicrestendpoints_actify.Model.UserProfile;
import com.learning.backend_basicrestendpoints_actify.Repository.UserRepo;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    private final UserRepo userRepository;
    public UserService(UserRepo userRepository) {
        this.userRepository = userRepository;
    }

    public ResponseEntity<List<UserProfile>> getAllUsers() {
        List<UserProfile> users = userRepository.findAll();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    public ResponseEntity<UserProfile> saveUser(UserProfile userProfile) {
        UserProfile user = userRepository.save(userProfile);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    public ResponseEntity<String> saveListOfUser(List<UserProfile> userProfiles) {
        List<UserProfile> users = userRepository.saveAll(userProfiles);
        if (!users.isEmpty()) {
            return new ResponseEntity<>("Saved Successfully", HttpStatus.OK);
        }

        return new ResponseEntity<>("Unable to Save List of Users", HttpStatus.BAD_REQUEST);
    }
}
