package com.learning.backend_basicrestendpoints_actify.Controller;

import com.learning.backend_basicrestendpoints_actify.Model.UserProfile;
import com.learning.backend_basicrestendpoints_actify.Service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/actify")
@CrossOrigin
public class UserController {
    private final UserService userService;
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping()
    public ResponseEntity<?> getAllUser()
    {
        return userService.getAllUsers();
    }

    @PostMapping()
    public ResponseEntity<?> addUser(@RequestBody UserProfile user)
    {
        return userService.saveUser(user);
    }

    @PostMapping("/saveAll")
    public ResponseEntity<?> saveAllUser(@RequestBody List<UserProfile> users)
    {
        return userService.saveListOfUser(users);
    }

}
