package br.com.registrovet.RegistroVet.repository;

import br.com.registrovet.RegistroVet.model.Tutor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TutorRepository extends JpaRepository<Tutor, Long> {

}
