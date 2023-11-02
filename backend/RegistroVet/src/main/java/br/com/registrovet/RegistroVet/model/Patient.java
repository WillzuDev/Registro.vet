package br.com.registrovet.RegistroVet.model;

import br.com.registrovet.RegistroVet.model.enums.Breeds;
import br.com.registrovet.RegistroVet.model.enums.Gender;
import br.com.registrovet.RegistroVet.model.enums.Species;
import jakarta.persistence.*;

@Entity
@Table(name = "patients")
public class Patient {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @JoinColumn (nullable = false)
    private String name;
    private int age;
    private double weight;
    private int height;
    @JoinColumn (nullable = false)
    @Enumerated(EnumType.STRING)
    private Gender gender;
    @JoinColumn (nullable = false)
    @Enumerated(EnumType.STRING)
    private Species specie;
    @JoinColumn (nullable = false)
    @Enumerated(EnumType.STRING)
    private Breeds breed;
    @ManyToOne
    @JoinColumn (name = "CPF_tutor", nullable = false)
    private Tutor tutorCPF;

    public Long getId() {
        return this.id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getName() {
        return this.name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public int getAge() {
        return age;
    }
    public void setAge(int age) {
        this.age = age;
    }
    public double getWeight() {
        return this.weight;
    }
    public void setWeight(double weight) {
        this.weight = weight;
    }
    public int getHeight() {
        return this.height;
    }
    public void setHeight(int height) {
        this.height = height;
    }
    public Gender getGender() {
        return this.gender;
    }
    public void setGender(Gender gender) {
        this.gender = gender;
    }
    public Species getSpecie() {
        return this.specie;
    }
    public void setSpecie(Species specie) {
        this.specie = specie;
    }
    public Breeds getBreed() {
        return this.breed;
    }
    public void setBreed(Breeds breed) {
        this.breed = breed;
    }
    public Tutor getTutorCPF() {
        return  tutorCPF;
    }
    public void setTutorCPF(Tutor tutorCPF) {
        this.tutorCPF = tutorCPF;
    }
}