import './App.css';
import React, { useState }    from "react";

function App() {
const [postData, setPostData] = useState('');
const [getData, setGetdata] = useState('');

const sendData = async () => {
  console.log(postData);
  try{
    const responce = await fetch('http://localhost:5000/record-post', {
      method: "POST",
      headers: {
      'Content-Type': 'application/json'
      },
      mode: "no-cors",
      body: JSON.stringify({text:postData})
    });
    const result = await responce;
     console.log(result);
  } catch (error) {
    console.error("Error sending data:", error);
  }
}

const fetchData = async () => {
  try {
    const responce = await fetch('http://localhost:5000/record-get');
    const result = await responce.json();
    setGetdata(result.data);
    } catch(error){
       console.error("Error fetching data: " + error);
    }
  };


  return (
    <div className="App">
      <header className="App-header">
      <label>
        <input 
          type="text" 
          value={postData} 
          placeholder="Insert something"
          onChange={(e) => setPostData(e.target.value)}/>
      </label>
      <button onClick={sendData} > Send Message </button>
      <div>
      <button onClick={fetchData} >Get Message</button>
      </div>
      <div>
        <h3>Received Data:</h3>
        <p>{getData}</p>
      </div>
      </header>
    </div>
  );

}
export default App;
