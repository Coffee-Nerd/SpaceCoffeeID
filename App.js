import React, { useEffect, useState } from "react";
import { WebView } from "react-native-webview";
import axios from "axios";

const App = () => {
  const [source, setSource] = useState({ uri: "http://localhost:4321" });

  useEffect(() => {
    axios.get("http://localhost:4321/").catch(() => {
      // If there is an error (the website is not available), use the local file
      setSource(require("./dist/index.html"));
    });
  }, []);

  return <WebView source={source} />;
};

export default App;
