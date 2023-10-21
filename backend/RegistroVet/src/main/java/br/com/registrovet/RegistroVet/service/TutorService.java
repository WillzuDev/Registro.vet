package br.com.registrovet.RegistroVet.service;

import br.com.registrovet.RegistroVet.dto.TutorDTO;
import br.com.registrovet.RegistroVet.model.Tutor;
import br.com.registrovet.RegistroVet.repository.TutorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TutorService {
    @Autowired
    private TutorRepository tutorRepository;

    public TutorDTO saveTutor (TutorDTO tutorDTO) {
        Tutor tutor = convetToTutor(tutorDTO);
        Tutor savedTutor = tutorRepository.save(tutor);
        return convertToTutorDTO(savedTutor);
    }

    private Tutor convetToTutor(TutorDTO tutorDTO) {
        Tutor tutor = new Tutor();
        tutor.setId(tutorDTO.getId());
        tutor.setName(tutorDTO.getName());
        tutor.setCPF(tutorDTO.getCPF());
        tutor.setPhone(tutorDTO.getPhone());
        tutor.setAddress(tutorDTO.getAddress());
        return tutor;
    }

    private TutorDTO convertToTutorDTO(Tutor tutor) {
        TutorDTO tutorDTO = new TutorDTO();
        tutorDTO.setId(tutor.getId());
        tutorDTO.setName(tutor.getName());
        tutorDTO.setCPF(tutor.getCPF());
        tutorDTO.setPhone(tutor.getPhone());
        tutorDTO.setAddress(tutor.getAddress());
        return tutorDTO;
    }
}