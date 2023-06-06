import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#131016',
  },

  eventName: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: 48,
  },

  eventDate: {
    color: '#6b6b6b',
    fontSize: 16,
  },

  input: {
    flex: 1,
    color: '#fff',
    height: 56,
    padding: 15,
    borderRadius: 5,
    marginRight: 10,
    backgroundColor: '#1f1e25',
  },

  button: {
    backgroundColor: '#31cf67',
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },

  buttonText: {
    color: '#fff',
    fontSize: 18
  },

  form: {
    width: '100%',
    marginTop: 20,
    marginBottom: 40,
    flexDirection: 'row',
  },

  listEmptyText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 16,
  }
});