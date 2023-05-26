package br.com.registrovet.RegistroVet.controller;

import br.com.registrovet.RegistroVet.dto.UserDTO;
import br.com.registrovet.RegistroVet.model.LoginRequest;
import br.com.registrovet.RegistroVet.service.TokenService;
import br.com.registrovet.RegistroVet.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class UserController {
    @Autowired
    private TokenService tokenService;
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private UserService userService;

    @PostMapping("/cadastro")
    public ResponseEntity<Object> createUser(@RequestBody UserDTO userDTO) {
        System.out.println("Controller chamado");
        try {
            UserDTO savedUser = userService.saveUser(userDTO);
            if (savedUser != null) {
                return ResponseEntity.status(HttpStatus.OK).build();
            } else {
                String errorMessage = "Erro: email já cadastrado";
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorMessage);
            }
        } catch (Exception e) {
            String errorMessage = "Erro: já existe um usuário com este email cadastrado";
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorMessage);
        }

    }
    @PostMapping("/login")
    public String token(@RequestBody LoginRequest userLogin) {
        System.out.println("start auth");
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(userLogin.username(), userLogin.password()));
        return tokenService.generateToken(authentication);
    }
}