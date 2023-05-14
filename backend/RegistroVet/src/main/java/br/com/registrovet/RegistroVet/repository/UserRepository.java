package br.com.registrovet.RegistroVet.repository;

import br.com.registrovet.RegistroVet.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

}
