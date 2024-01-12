import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Myapp = () => {
  return (
    <View style={styles.ner}>
      <Text>
        Намайг Балдандорж гэдэг, 25 настай, Энэ бол миний анхны android mobile
        app. Миний аппны санаа болбол Е-эмийн сан. Энэ эмийн сан нь, үйлчлүүлэгч
        эмчийн бичиж өгсөн эмийн жорыг манай аппликэйшнд бүртгэлтэй тухайн
        үйлчлүүлэгчтэй хамгийн ойр эмийн сан руу автоматаар илгээгдэх бөгөөд
        тухайн эмийн сан нь хүргэлттэй бол өөрсдөө хүргэнэ. Хүргэлтгүй бол бид
        хүргэнэ.
      </Text>
    </View>
  );
};

export default Myapp;

const styles = StyleSheet.create({
  ner: {
    padding: 20,
    flex: 1,
    backgroundColor: "cyan",
  },
});
