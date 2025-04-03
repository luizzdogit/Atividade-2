import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

const infoList = [
  {
    title: 'Eduardo Pereira Rodrigues',
    description: 'Posição: Atacante(ponta), Idade: 33 anos, Nacionalidade: Brasileiro, Peso: 63Kg, Altura: 1,63 m .',
    image: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDfeHjLMCa-5rlQgEJuD_xIb_wK2V1FD12Iw&s' },
  },
  {
    title: 'Gabriel Barbosa Almeida',
    description: 'Posição: Atacante, Idade: 28 anos, Nacionalidade: Brasileiro, Peso: 68Kg, Altura: 1,78 m  .',
    image: { uri: 'https://cdn.oantagonista.com/uploads/2025/01/Gabigol-e-anunciado-pelo-Cruzeiro-1024x682.jpg' },
  },
  {
    title: 'Matheus Fellipe Costa Pereira',
    description: 'Posição: Meio-campista, Idade: 28 anos, Nacionalidade: Brasileiro, Peso: 65Kg, Altura: 1,75 m.',
    image: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB_p4GmNmjF_CKeVF6Uyj0Xn3S4D4xMn2W6A&s' },
  },
  {
    title: 'Cassio Roberto Ramos',
    description: 'Possição: Goleiro, Idade: 37 anos, Nacionalidade: Brasileiro, Peso: 92KG, Altura: 1,96 m.',
    image: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhOzH9qe-d0WRCY3A8wnK8McvEQqBhGMBc8g&s' },
  },
  {
    title: 'Lucas Hérnan Villalba',
    description: 'Posição: Zagueiro(lateral esquerdo), Idade: 30 anos, Nacionalidade: Argentino, Peso: 73Kg, Altura: 1,77 m .',
    image: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlFabg_2GwkpDJEZap2I7t6DMiwF5T_mAd-Q&s' },
  },
  {
    title: 'Lucas Daniel Romero',
    description: 'Posição: Volante, Idade: 30 anos, Nacionalidade: Argentino, Peso: 70Kg, Altura: 1,67 m .',
    image: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQowFZJWB_4laAF9aBixE6Z-nQHmiGECIdQSA&s' },
  }
];

const InfoCard = ({ title, description, image }) => {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Sua Seleção</Text>
      {infoList.map((item, index) => (
        <InfoCard key={index} {...item} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
});
