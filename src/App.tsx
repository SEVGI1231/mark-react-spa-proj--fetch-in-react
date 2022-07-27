import { useState } from "react";
import { resourceLimits } from "worker_threads";

interface Dog {
  message: string;
  status: string;
}

function App() {
  const [dog, setDog] = useState<Dog[]>([]);

  const handleGetDog = async () => {
    const response = await fetch(
      "https://dog.ceo/api/breeds/image/random"
    );
    const jsonBody: Dog = await response.json();
    setDog([...dog,jsonBody]);
    console.log("")
  };

  // const handleGetJoke = () => {
  //   fetch("https://jokestemp.neillbogie.repl.co/jokes/general/random")
  //     .then((response) => response.json())
  //     .then((jsonBody: Joke[]) => setJoke(jsonBody[0]));
  // };
    const callBackFunc=(dog:Dog[]): JSX.Element[]=>{
      let result= dog.map(a=>{return(<img src={a.message} alt="random dog" width={500} height={600}/>)});
      console.log("is it working")
      return result
    }
    

      //let result = objArray.map(a => a.foo);
    
  if (dog) {
    return (
      <div>
        <h1>Dog app</h1>
        <div>
          <ul>
            {callBackFunc(dog)}
          </ul>
        </div>
        <hr />
        <button onClick={handleGetDog}>Get another dog</button>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Dog app</h1>
        <p>
          Click the button to trigger a <code>fetch</code> that gets a random
          dog image from an API!
        </p>
        <button onClick={handleGetDog}>Get dog</button>
      </div>
    );
  }
}

export default App;
