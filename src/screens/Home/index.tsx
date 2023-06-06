import { View, Text, TextInput, TouchableOpacity, FlatList } from "react-native";
import { styles } from "./styles";
import { Participant } from "../../Components/Participant";

export function Home() {
  const participants = ['Elias', 'Pedro', 'Erica', 'João', 'Sergio', 'Daniel', 'Junior', 'Fernando', 'Manoel', 'André']

  function handleParticipantAdd(){
    console.log('Participante adicionado!');
  }

  function handleParticipantRemove(name: string) {
    console.log(`Participante removido - ${name}`);
  }

  return(
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Sexta-feira, 25 de julho</Text>
      
      <View style={styles.form}>
        <TextInput 
          style={styles.input} 
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList 
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant 
            key={item} 
            name={item} 
            onRemove={() => handleParticipantRemove("Elias")} 
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou aqui ainda! Adicione participantes a sua lista.
          </Text>
        )}
      />

    </View>
  )
}