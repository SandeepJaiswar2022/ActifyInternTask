package com.learning.backend_basicrestendpoints_actify.Repository;

import com.learning.backend_basicrestendpoints_actify.Model.UserProfile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepo extends JpaRepository<UserProfile, Integer> {
}
