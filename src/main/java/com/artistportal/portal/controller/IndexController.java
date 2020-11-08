package com.artistportal.portal.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class IndexController {

    private List<String> pietja = new ArrayList<String>(List.of("hello"," ","pietja !!!!"));


    @GetMapping(produces = "application/json")
    @RequestMapping( {"/index"} )
    public List<String> getSimpleHelloForPietja(){
        return pietja;
    }
}
