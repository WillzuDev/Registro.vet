package br.com.registrovet.RegistroVet.service;

import br.com.registrovet.RegistroVet.repository.TutorRepository;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class TutorServiceTest {

    @Autowired
    private TutorService tutorService;

    @Mock
    private TutorRepository tutorRepository;

    @Test
    void testFormatCPF() {
        String unformattedCPF = "111.111.111-11";
        String formattedCPF = tutorService.formatCPF(unformattedCPF);
        assertEquals("11111111111", formattedCPF);
    }

    @Test
    void testFormatPhone() {
        String unformattedPhone = "(83) 12345-6789";
        String formattedPhone = tutorService.formatPhone(unformattedPhone);
        assertEquals("83123456789", formattedPhone);
    }
}