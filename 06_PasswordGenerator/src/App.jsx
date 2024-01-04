import { useCallback, useEffect , useRef} from "react";
import { useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [charAllowed, setCharAllowed] = useState(false);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null); 

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";

    if (charAllowed) str += "!@#$%^&*()_+";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, charAllowed, numberAllowed, setPassword]);

  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);  
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, charAllowed, numberAllowed, passwordGenerator]);



  return (
    <>
      <h1 className="flex justify-center text-3xl pt-10 ">
        Password Generator
      </h1>
      <div className="flex flex-col mt-5 ">
        <div className=" flex w-3/4 h-24 bg-lime-500 rounded-xl shadow-xl mx-auto justify-center">
          <input
            type="text"
            value={password}
            placeholder="Password"
            className="outline-none py-1 px-3 mt-5 text-2xl rounded-l-lg w-11/12 h-14 shadow-xl"
            readOnly
            ref={passwordRef}
          />
          <button
           className="outline-none bg-blue-700 text-white rounded-r-lg mt-5 px-3 py-0.5 h-14 shadow-2xl"
           onClick={copyPassword}
           >
            Copy
          </button>
        </div>
        <div className="flex justify-center text-2xl gap-x-1 my-10 mx-auto">
          <div className="flex items-center gap-x-1 ">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer mx-3"
              onChange={(e) => setLength(e.target.value)}
            />
            <br />
            <label> Length: {length}</label>
            <br />
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              className="cursor-pointer h-6 w-6 mx-3"
              onChange={() => setCharAllowed((prev) => !prev)}
            />
            <br />
            <label htmlFor="characterInput"> Character</label>
            <br />
            <input
              type="checkbox"
              checked={numberAllowed}
              id="numberInput"
              className="cursor-pointer h-6 w-6 mx-3"
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
            <br />
            <label htmlFor="numberInput"> Numbers</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
