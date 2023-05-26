package br.com.registrovet.RegistroVet.service;

import br.com.registrovet.RegistroVet.model.User;
import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;
import java.time.ZoneOffset;

@Service
public class TokenService {

    public String generateToken(User user) {
        return JWT.create()
                .withIssuer("RegistroVet")
                .withSubject(user.getUsername())
                .withClaim("id", user.getId())
                .withExpiresAt(LocalDateTime.now()
                        .plusMinutes(10)
                        .toInstant(ZoneOffset.of("-03:00"))
                ).sign(Algorithm.HMAC256("secretKey"));
    }

    public String getSubject(String token) {
        return JWT.require(Algorithm.HMAC256("secretKey"))
                .withIssuer("RegistroVet")
                .build().verify(token).getSubject();
    }
}
