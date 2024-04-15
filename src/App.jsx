import React, { useEffect, useState,useCallback } from "react";

function App() {
  const [length, setLength] = useState(8);
  const[isNumAllowed, setIsNumAllowed] = useState(false);
  const[isCharacterAllowed, setIsCharacterAllowed] = useState(false);
  const[password, setPassword] = useState('')


  useEffect(() => {
    let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let pass = '';
    if (isNumAllowed) str += '012345789';
    if (isCharacterAllowed) str += "`'!@#$%^&*()";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);

  }, [length, isNumAllowed, isCharacterAllowed]);
  return (
   <>
   
   <div className="flex items-center justify-center h-[100vh]">
    
   <div className="bg-black w-96 h-96 rounded-lg ">
   <h1 className="text-cyan-500  text-center text-3xl mt-4 font-bold ">Password Generator</h1>
     <input
       className="mx-14 my-8 w-[300px]  outline-none rounded-md px-1 py-2 text-cyan-500 font-bold "
       placeholder="Password"
       value={password}
       readOnly
     />
     <div className="flex items-center justify-center">
       <input className="mx-8 cursor-pointer" type="range" 
       min={6}
       max={20}
       value={length}
       onChange={(e)=>{setLength(e.target.value)}}
       />
       <label className="text-white font-semibold">Length : {length} </label>
     </div>
     <div className="flex items-center justify-center mt-4">
       <input className="mx-2" type="checkbox" 
       defaultChecked={isNumAllowed}
       onChange={()=>{
         setIsNumAllowed(!isNumAllowed);
       }}
       />
       <label className="text-white font-semibold">Number </label>
       <input className="mx-2" type="checkbox" 
       defaultChecked={isCharacterAllowed}
       onChange={()=>{
        setIsCharacterAllowed(!isCharacterAllowed)
       }}
       />
       <label className="text-white font-semibold">Characters  </label>
     </div>
   </div>
 </div>
  
   </>
  );
}

export default App;
