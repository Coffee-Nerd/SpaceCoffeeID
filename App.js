import React, { useEffect, useState } from "react";
import { WebView } from "react-native-webview";
import { SafeAreaView, View, StyleSheet } from "react-native";
import axios from "axios";

const App = () => {
  const [source, setSource] = useState({ uri: "http://localhost:4321" });

  useEffect(() => {
    axios.get("http://localhost:4321/").catch(() => {
      // If there is an error (the website is not available), use the local file
      setSource(require("./dist/index.html"));
    });
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <WebView source={source} androidHardwareAccelerationDisabled={false} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "rgba(15, 36, 15, 0.612)",
  },
});

export default App;
