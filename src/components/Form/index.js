import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Vibration,
  Pressable,
  Keyboard,
  FlatList,
} from "react-native";
import ResultImc from "../ResultImc";
import styles from "./style";

export default function Form() {
  const [height, setheight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [messageImc, setMessageImc] = useState("Preencha o peso e a altura!");
  const [imc, setImc] = useState(null);
  const [textButton, setTextButton] = useState("Calcular");
  const [errorMessage, setErrorMessage] = useState(null);
  const [imcList, setImcList] = useState([]); //armazenar todos os imc calculados

  function imcCalculator() {
    let heightFormat = height.replace(",", ".");
    let weightFormat = weight.replace(",", ".");
    let totalImc = (weightFormat / (heightFormat * heightFormat)).toFixed(2);
    //para adicionar um item em um array no useState
    //id para ser o milissegundo
    setImcList((arr) => [...arr, { id: new Date().getTime(), imc: totalImc }]);
    setImc(totalImc);
  }

  function verificationImc() {
    if (imc == null) {
      setErrorMessage("Campo obrigatório!");
      Vibration.vibrate();
    }
  }

  function validationImc() {
    if (weight != null && height != null) {
      imcCalculator();
      setheight(null);
      setWeight(null);
      setMessageImc("Seu IMC é igual: ");
      setTextButton("Calcular Novamente");
      setErrorMessage(null);
      Keyboard.dismiss();
    } else {
      verificationImc();
      setImc(null);
      setTextButton("Calcular");
      setMessageImc("Preencha o peso e a altura!");
    }
  }

  return (
    <View style={styles.formContext}>
      {imc == null ? ( //validação para qnd o imc ainda não for calculado
        <Pressable onPress={Keyboard.dismiss} style={styles.form}>
          <Text style={styles.formLabel}>Altura</Text>
          <Text style={styles.errorMessage}>{errorMessage}</Text>
          <TextInput
            style={styles.input}
            onChangeText={setheight} //conforme digita, ela vai alterando o estado
            value={height}
            placeholder="Ex. 1.75"
            keyboardType="numeric" //indica qual teclado abrir qnd o usuário clicar
          />

          <Text style={styles.formLabel}>Peso</Text>
          <Text style={styles.errorMessage}>{errorMessage}</Text>
          <TextInput
            style={styles.input}
            onChangeText={setWeight}
            value={weight}
            placeholder="Ex. 85.65"
            keyboardType="numeric"
          />

          {/* <Button onPress={() => validationImc()} title={textButton} /> */}
          <TouchableOpacity
            style={styles.buttonCalcultor}
            onPress={() => validationImc()}
          >
            <Text style={styles.TextButtonCalcultor}>{textButton}</Text>
          </TouchableOpacity>
        </Pressable>
      ) : (
        //qndo o imc tiver um número, para ser carregado
        <View style={styles.exhibitionResultImc}>
          <ResultImc messageResultImc={messageImc} resultImc={imc} />

          <TouchableOpacity
            style={styles.buttonCalcultor}
            onPress={() => validationImc()}
          >
            <Text style={styles.TextButtonCalcultor}>{textButton}</Text>
          </TouchableOpacity>
        </View>
      )}
      <FlatList
        showsVerticalScrollIndicator={false} //para ocultar o scroll no lado
        style={styles.listImcs}
         //dados que serão renderizados na lista |reverse pega o último
        data={imcList.reverse()}

         //para cada item do data
        renderItem={({ item }) => {
         
          return (
            <Text style={styles.resultImcItem}> 
              <Text style={styles.textResultItemList}>Resultado IMC = </Text>
              {item.imc}  {/*pq no array tem o id e o imc - função imcCalculator*/}
            </Text>
          );
        }}

        //seta o imc
        keyExtractor={(item) =>{
          item.id;
        }}
      />
    </View>
  );
}
