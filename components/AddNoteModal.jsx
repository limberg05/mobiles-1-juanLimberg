import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const AddNoteModal = ({
  modalVisible,
  setModalVisible,
  newNote,
  setNewNote,
  addNewNote,
}) => {
  return (
    <Modal
      visible={modalVisible}
      animationType="slide"
      transparent
      onRequestClose={() => setModalVisible(false)}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Nueva nota</Text>

          <TextInput
            style={styles.input}
            placeholder="Teclea una descripción"
            placeholderTextColor={'#000000'}
            value={newNote}
            onChangeText={setNewNote}
          />

          <View style={styles.modalButtons}>
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={() => setModalVisible(false)}
            >
              <Text>Cancelar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.acceptButton} onPress={addNewNote}>
              <Text>Aceptar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default AddNoteModal;

const styles = StyleSheet.create({
  input: {
    fontWeight: 'bold',
    color: '#000000',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
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
  cancelButton: {
    backgroundColor: '#ff0000',
    borderRadius: 15,
    padding: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  acceptButton: {
    backgroundColor: '#00ff2f',
    borderRadius: 15,
    padding: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalButtons: {
    flex: 1,
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 30,
  },
});
