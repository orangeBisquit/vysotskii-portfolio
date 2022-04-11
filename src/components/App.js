import "./App.scss";
import Main from "./Main/Main";
import Layout from "./Layout/Layout";
import { useEffect, useState } from "react";
import PageLoading from "./PageLoading/PageLoading";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  return (
    <div className="App">
      <Layout>{isLoading ? <PageLoading /> : <Main />}</Layout>
    </div>
  );
};

export default App;
