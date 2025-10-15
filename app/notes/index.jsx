import { useState } from 'react';
import {
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const NoteScreen = () => {
  const [notes, setNotes] = useState([
    {
      id: '1',
      text: 'nota 1',
    },
    {
      id: '2',
      text: 'nota 2',
    },
    {
      id: '3',
      text: 'nota 3',
    },
    {
      id: '4',
      text: 'nota 4',
    },
  ]);

  const [modalVisible, setModalVisible] = useState(false);
  const [newNote, setNewNote] = useState('');

  return (
    <View style={styles.container}>
      <FlatList
        data={notes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.noteItem}>
            <Text style={styles.noteText}>{item.text}</Text>
          </View>
        )}
      />
      <TouchableOpacity
        style={styles.agregarButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.addButtonText}>agregar</Text>
      </TouchableOpacity>
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>
              <TextInput
                style={styles.input}
                placeholder="teclea una descripcion"
                placeholderTextColor={'#000000'}
                onChange={setNewNote}
              />
              <View style={styles.modalButtons}>
                <TouchableOpacity
                  style={styles.cancelButton}
                  onPress={() => setModalVisible(false)}
                >
                  <Text style={styles.cancelButton}>Cancelar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.acceptButton}
                  onPress={() => setModalVisible(false)}
                >
                  <Text style={styles.acceptButton}>aceptar</Text>
                </TouchableOpacity>
              </View>
            </Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default NoteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#7e7e7e',
  },
  noteItem: {
    flex: 4,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
    backgroundColor: '#000000',
    borderRadius: 10,
  },
  noteText: {
    fontWeight: 'bold',
    fontSize: 25,
    color: '#ffff',
  },
  agregarButton: {
    backgroundColor: '#ffff',
    borderRadius: 15,
    position: 'absolute',
    bottom: 20,
    right: 20,
    padding: 10,
  },
  addButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
  },
  modalContent: {
    backgroundColor: '#ffff',
    right: 20,
    left: 20,
    position: 'absolute',
    padding: 20,
    borderRadius: 15,
    width: '80%',
  },
  modalTitle: {
    color: '#ffff',
    fontWeight: 'bold',
  },
  input: {
    fontWeight: 'bold',
    color: '#000000',
  },
  cancelButton: {
    backgroundColor: '#ff0000',
    borderRadius: 15,
    padding: 3,
    fontSize: 16,
  },
  acceptButton: {
    backgroundColor: '#00ff2f',
    borderRadius: 15,
    padding: 3,
    fontSize: 16,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 20,
  },
});
