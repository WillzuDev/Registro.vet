package br.com.registrovet.RegistroVet.service;

import br.com.registrovet.RegistroVet.dto.PatientDTO;
import br.com.registrovet.RegistroVet.model.Patient;
import br.com.registrovet.RegistroVet.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PatientService {

    @Autowired
    private PatientRepository patientRepository;

    public PatientDTO savePatient (PatientDTO patientDTO) {
        Patient patient = convetToPatient(patientDTO);
        Patient savedPatient = patientRepository.save(patient);
        return convertToPatientDTO(savedPatient);
    }

    private Patient convetToPatient(PatientDTO patientDTO) {
        Patient patient = new Patient();
        patient.setId(patientDTO.getId());
        patient.setName(patientDTO.getName());
        patient.setAge(patientDTO.getAge());
        patient.setWeight(patientDTO.getWeight());
        patient.setHeight(patientDTO.getHeight());
        patient.setGender(patientDTO.getGender());
        patient.setSpecie(patientDTO.getSpecie());
        patient.setBreed(patientDTO.getBreed());
        return patient;
    }

    private PatientDTO convertToPatientDTO(Patient patient) {
        PatientDTO patientDTO = new PatientDTO();
        patientDTO.setId(patient.getId());
        patientDTO.setName(patient.getName());
        patientDTO.setAge(patient.getAge());
        patientDTO.setWeight(patient.getWeight());
        patientDTO.setHeight(patient.getHeight());
        patientDTO.setGender(patient.getGender());
        patientDTO.setSpecie(patient.getSpecie());
        patientDTO.setBreed(patient.getBreed());
        return patientDTO;
    }
}