import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  formContext: {
    flex: 1,
    marginTop: 30,
    backgroundColor: "#FFF",
    alignItems: "center",
    paddingTop: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  form: {
    width: "100%",
    height: "auto",
    
  },
  formLabel: {
    color: "#000000",
    fontSize: 18,
    paddingLeft: 20,
  },
  input: {
    width: "90%",
    borderRadius: 50,
    backgroundColor: "#f6f6f6",
    height: 40,
    margin: 12,
    paddingLeft: 10,
  },
  buttonCalcultor: {
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    backgroundColor: "#FF0043",
    paddingTop: 14,
    paddingBottom: 14,
    marginLeft: 12,
    marginTop: 30,
    marginBottom: 30,
  },
  TextButtonCalcultor: {
    fontSize: 20,
    color: "#fff",
  },
  errorMessage:{
    fontSize: 12, 
    color: 'red',
    fontWeight: 'bold',
    paddingLeft: 20, 
  },
  exhibitionResultImc:{
    width: '100%',
    height: '60%',
  }
});

export default styles;
