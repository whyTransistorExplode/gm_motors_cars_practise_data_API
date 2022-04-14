package uz.pdp.appgm.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import uz.pdp.appgm.entity.User;
import uz.pdp.appgm.payload.ApiResponse;
import uz.pdp.appgm.payload.ReqLogin;
import uz.pdp.appgm.payload.ReqRegister;
import uz.pdp.appgm.payload.ResToken;
import uz.pdp.appgm.repository.UserRepository;
import uz.pdp.appgm.security.JwtTokenProvider;
import uz.pdp.appgm.service.AuthService;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    @Autowired
    AuthService authService;
    @Autowired
    AuthenticationManager authenticationManager;
    @Autowired
    UserRepository userRepository;
    @Autowired
    JwtTokenProvider jwtTokenProvider;

    @PostMapping("/register")
    public HttpEntity<?> register(@RequestBody ReqRegister reqRegister) {
        ApiResponse response = authService.register(reqRegister);
        return ResponseEntity.status(response.isSuccess() ? HttpStatus.CREATED : HttpStatus.CONFLICT)
                .body(response.isSuccess() ? new ApiResponse(response.getMessage(), true, generateToken(reqRegister.getPhoneNumber())) : response);
    }


    @PostMapping("/login")
    public HttpEntity<?> login(@RequestBody ReqLogin request) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getPhoneNumber(), request.getPassword())
        );
        return ResponseEntity.ok(new ResToken(generateToken(request.getPhoneNumber())));
    }

    private String generateToken(String phoneNumber) {
        User user = userRepository.findByPhoneNumber(phoneNumber).orElseThrow(() -> new UsernameNotFoundException("getUser"));
        return jwtTokenProvider.generateToken(user.getId());
    }


}
