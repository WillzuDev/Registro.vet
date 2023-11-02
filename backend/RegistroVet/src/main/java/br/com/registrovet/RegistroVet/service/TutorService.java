package br.com.registrovet.RegistroVet.service;

import br.com.registrovet.RegistroVet.dto.TutorDTO;
import br.com.registrovet.RegistroVet.model.Tutor;
import br.com.registrovet.RegistroVet.repository.TutorRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TutorService {
    @Autowired
    private TutorRepository tutorRepository;

    @Autowired
    private ModelMapper modelMapper;

    public TutorDTO saveTutor (TutorDTO tutorDTO) {
        tutorDTO.setPhone((formatPhone(tutorDTO.getPhone())));
        tutorDTO.setCPF((formatCPF(tutorDTO.getCPF())));

        Tutor tutor = convetToTutor(tutorDTO);
        Tutor savedTutor = tutorRepository.save(tutor);

        return convertToTutorDTO(savedTutor);
    }

    private Tutor convetToTutor(TutorDTO tutorDTO) {
        return modelMapper.map(tutorDTO, Tutor.class);
    }

    private TutorDTO convertToTutorDTO(Tutor tutor) {
        return modelMapper.map(tutor, TutorDTO.class);
    }

    public String formatPhone(String phone) {
        return phone.replaceAll("[^0-9]", "");
    }

    public String formatCPF(String CPF) {
        return CPF.replaceAll("[^0-9]", "");
    }
}