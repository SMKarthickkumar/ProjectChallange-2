import "./App.css";
import { useEffect, useState } from "react";
import Form from "./components/Form";
import Content from "./components/Content";

function App() {
  const API_URL = "https://jsonplaceholder.typicode.com/";
  const [ReqType, setReqType] = useState("users");
  const [Item, setItems] = useState([]);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await fetch(`${API_URL}${ReqType}`);
        const data = await response.json();
        setItems(data);
      } catch (err) {
        console.log(err.Message);
      } finally {
      }
    };
    console.log("call");
    console.log(ReqType);
    fetchItem();
  }, [ReqType]);

  const handleUserClick = () => {
    console.log("User Clicked");
  };

  const handlePostClick = () => {
    console.log("Post Clicked");
  };

  const handleCommentsClick = () => {
    console.log("Comments Clicked");
  };

  return (
    <div className="App">
      <Form ReqType={ReqType} setReqType={setReqType} />
      <Content Item={Item} />
    </div>
  );
}

export default App;
