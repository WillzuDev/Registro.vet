package br.com.registrovet.RegistroVet.service;

import br.com.registrovet.RegistroVet.dto.PatientDTO;
import br.com.registrovet.RegistroVet.model.Patient;
import br.com.registrovet.RegistroVet.model.Tutor;
import br.com.registrovet.RegistroVet.repository.PatientRepository;
import br.com.registrovet.RegistroVet.repository.TutorRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PatientService {

    @Autowired
    private PatientRepository patientRepository;
    @Autowired
    private TutorRepository tutorRepository;
    @Autowired
    private ModelMapper modelMapper;

    public PatientDTO savePatient (PatientDTO patientDTO) {
        Patient patient = convertToPatient(patientDTO);
        Tutor tutor = tutorRepository.findByCPF(patientDTO.getTutorCPF());
        if (tutor != null) {
            patient.setTutorCPF(tutor);
        }
        Patient savedPatient = patientRepository.save(patient);
        return convertToPatientDTO(savedPatient);
    }

    private Patient convertToPatient(PatientDTO patientDTO) {
        return modelMapper.map(patientDTO, Patient.class);
    }

    private PatientDTO convertToPatientDTO(Patient patient) {
        return modelMapper.map(patient, PatientDTO.class);
    }
}