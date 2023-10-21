package br.com.registrovet.RegistroVet.dto;

import br.com.registrovet.RegistroVet.model.enums.Breeds;
import br.com.registrovet.RegistroVet.model.enums.Gender;
import br.com.registrovet.RegistroVet.model.enums.Species;

public class PatientDTO {
    private Long id;
    private String name;
    private int age;
    private double weight;
    private int height;
    private Gender gender;
    private Species specie;
    private Breeds breed;

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getName() {
        return name;
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
        return weight;
    }
    public void setWeight(double weight) {
        this.weight = weight;
    }
    public int getHeight() {
        return height;
    }
    public void setHeight(int height) {
        this.height = height;
    }
    public Gender getGender() {
        return gender;
    }
    public void setGender(Gender gender) {
        this.gender = gender;
    }
    public Species getSpecie() {
        return specie;
    }
    public void setSpecie(Species specie) {
        this.specie = specie;
    }
    public Breeds getBreed() {
        return breed;
    }
    public void setBreed(Breeds breed) {
        this.breed = breed;
    }
}