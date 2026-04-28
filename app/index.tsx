import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import React from "react";

import {
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  const abrirWhats = () => Linking.openURL("https://wa.me/5585991913169");

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../assets/images/isa-trancas/logo.jpeg")}
          style={styles.logo}
        />
      </View>

      <View style={styles.servicos}>
        <Text style={styles.tituloSecao}>
          <MaterialCommunityIcons name="hair-dryer" size={24} color="black" />
          {"  "}
          Nossos Serviços
        </Text>

        <View style={styles.card}>
          <Text style={styles.servico}>Tranças</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.servico}>Escova</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.servico}>Penteados</Text>
        </View>
      </View>

      <View style={styles.galeria}>
        <Text style={styles.tituloSecao}>Galeria</Text>

        <Image
          style={styles.foto}
          source={require("../assets/images/isa-trancas/tranca2.jpeg")}
        />

        <Image
          style={styles.foto}
          source={require("../assets/images/isa-trancas/tranca1.jpeg")}
        />
      </View>

      <View style={styles.contato}>
        <Text style={styles.tituloSecao}>Contato</Text>

        <Text>
          <FontAwesome5 name="whatsapp" size={14} color="black" /> WhatsApp:
          (85) 9 9191-3169
        </Text>
        <Text>
          <Entypo name="instagram" size={12} color="black" /> Instagram:
          @isatrancaas
        </Text>
        <Text>
          <Feather name="map-pin" size={14} color="black" /> Endereço: Rua 2,
          718 Parque Soledade{" "}
        </Text>
        <Text>
          <Ionicons name="time-outline" size={14} color="black" /> Horário: Por
          Agendamento
        </Text>

        <TouchableOpacity style={styles.botao} onPress={abrirWhats}>
          <Text style={styles.textoBotao}>
            <FontAwesome5 name="whatsapp" size={14} color="white" /> Agendar
            pelo WhatsApp
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  logo: {
    flex: 1,
    height: 200,
    width: 500,
    objectFit: "cover",
  },

  container: {
    backgroundColor: "#fff0f6",
  },

  header: {
    backgroundColor: "#ff4da6",
    alignItems: "center",
  },

  titulo: {
    fontSize: 26,
    color: "#fff",
    fontWeight: "bold",
  },

  subtitulo: {
    color: "#fff",
    marginTop: 10,
    textAlign: "center",
  },

  servicos: {
    padding: 20,
  },

  tituloSecao: {
    fontSize: 22,
    color: "#ff4da6",
    marginBottom: 15,
    fontWeight: "bold",
  },

  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,
  },

  servico: {
    fontSize: 18,
  },

  galeria: {
    padding: 20,
  },

  foto: {
    width: "100%",
    height: 300,
    borderRadius: 10,
    marginBottom: 10,
  },

  contato: {
    padding: 20,
  },

  botao: {
    backgroundColor: "#25D366",
    padding: 15,
    borderRadius: 10,
    marginTop: 15,
    alignItems: "center",
  },

  textoBotao: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
