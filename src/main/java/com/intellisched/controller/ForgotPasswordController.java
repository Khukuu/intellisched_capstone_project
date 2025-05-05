package com.example.intellisched.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping; // Add this import
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class ForgotPasswordController {

    // Show the Forgot Password page
    @GetMapping("/fpass")
    public String showForgotPasswordPage() {
        return "fpass"; // Load fpass.html from /templates folder
    }

    // Handle form submission
    @PostMapping("/fpass")
    public String handleForgotPassword(@RequestParam("email") String email, Model model) {
        System.out.println("Reset link sent to: " + email);
        model.addAttribute("message", "A reset link has been sent to your email address.");
        return "fpass"; // Redisplay the same page with success message
    }
}