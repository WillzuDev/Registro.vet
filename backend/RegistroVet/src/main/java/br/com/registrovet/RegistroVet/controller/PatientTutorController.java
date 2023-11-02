package br.com.registrovet.RegistroVet.controller;

import br.com.registrovet.RegistroVet.dto.PatientDTO;
import br.com.registrovet.RegistroVet.dto.TutorDTO;
import br.com.registrovet.RegistroVet.service.PatientService;
import br.com.registrovet.RegistroVet.service.TutorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class PatientTutorController {

    @Autowired
    private PatientService patientService;
    @Autowired
    private TutorService tutorService;

    @PostMapping("/newtutor")
    public ResponseEntity<Object> createTutor(@RequestBody TutorDTO tutorDTO) {
        System.out.println("cadastrando tutor");
        try {
            TutorDTO savedTutor = tutorService.saveTutor(tutorDTO);
            if (savedTutor != null) {
                return ResponseEntity.status(HttpStatus.OK).build();
            } else {
                String errorMessage = "Erro: CPF já cadastrado";
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorMessage);
            }
        } catch (Exception e) {
            String errorMessage = "Erro: já existe um tutor já cadastrado com este CPF";
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorMessage);
        }
    }

    @PostMapping("/newpet")
    public ResponseEntity<Object> createPet(@RequestBody PatientDTO patientDTO) {
        PatientDTO savedPatient = patientService.savePatient(patientDTO);
        if (savedPatient != null) {
            System.out.println("pet cadastrado");
            return ResponseEntity.status(HttpStatus.OK).build();
        } else {
            System.out.println("erro");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }
}