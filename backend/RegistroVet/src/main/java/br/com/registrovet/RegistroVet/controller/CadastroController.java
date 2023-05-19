package br.com.registrovet.RegistroVet.controller;

import br.com.registrovet.RegistroVet.dto.UserDTO;
import br.com.registrovet.RegistroVet.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class CadastroController {

    @Autowired
    private UserService userService;

    @PostMapping("/cadastro")
    public ResponseEntity<UserDTO> createUser(@RequestBody UserDTO userDTO) {

        System.out.println("Controller chamado");

        UserDTO savedUser = userService.saveUser(userDTO);
        if (savedUser != null) {
            return ResponseEntity.status(HttpStatus.OK).build();
        } else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

}
