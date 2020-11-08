package com.artistportal.portal.model;

import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.Email;

@Getter
@Setter
@Entity
public class ApkUser {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(unique = true)
    private String username;
    private String email;
    private String password;
    private String role;
    private boolean isEnabled;



    public ApkUser(String apkUser_successfully_authenticated) {
    }

    public ApkUser(){
        this.isEnabled=false;
    }

    public ApkUser(String username,
                   String email, String password, String role, boolean isEnabled) {

        this.username=username;
        this.password= password;
        this.role=role;
        this.email=email;
        this.isEnabled=isEnabled;

    }

}
