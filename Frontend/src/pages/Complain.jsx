import { useRef, useState } from "react"
import { useNavigate } from "react-router";
import backendCom from "../BackendCommunication/backendCom";
import { toast } from "sonner";



const Complain = () => {
  const audioRef=useRef(null);
  const [text, setText] = useState('');
  const [email, setEmail] = useState('');
  const navigate=useNavigate();


  const handleMute=()=>{
    if (audioRef.current) {
      audioRef.current.muted=!audioRef.current.muted;
      
      
    }

  }

  const handleSubmit=async (e)=>{
    e.preventDefault();
    navigate('/success');
    console.log("this is text and email",text,email);
    const response=await backendCom.sendMail(email,text);

    console.log("response in complain is: ",response);

    toast.warning(response.message);
    
    

  }


  return (
    <div
    onClick={handleMute}
    className="h-screen bg-[url('/images/complain2.jpg')] bg-cover relative ">

      <audio ref={audioRef} src="/src/Aparichit files/Theme Song.mp3" autoPlay loop></audio>

      <div >


    <form onSubmit={handleSubmit}
    className="  flex flex-col items-center justify-center gap-4 w-full h-screen"
    >


      <div className="flex gap-5 items-center justify-center">

     
      <label 
      className="text-rose-950 font-bold text-2xl shadow-lg shadow-violet-800 font-nosifer"
      htmlFor="email">Enter Your Email: </label>

      <input 
      type="email" 
      name="email"
       id="email"
       value={email}
       onChange={(e)=>setEmail(e.target.value)}
       className=" focus:outline-none focus:ring-2 focus:ring-red-700 rounded-md p-2 bg-slate-800 text-red-500 shadow-lg shadow-red-800 font-bold font-nosifer resize-none overflow-auto"
       />
        </div>

      <label className="text-rose-950 font-bold text-2xl shadow-lg shadow-violet-800 font-nosifer" htmlFor="complain"> Complain</label>
      <textarea className="w-1/3 h-1/3 focus:outline-none focus:ring-2 focus:ring-red-700 rounded-md p-2 bg-slate-800 text-red-500 shadow-lg shadow-red-800 font-bold font-nosifer resize-none overflow-auto scrollbar-thin scrollbar-track-gray-400 scrollbar-thumb-red-600 text-pretty" name="complain" 
      id="complain"
      value={text}
      onChange={(e)=>setText(e.target.value)}
      ></textarea>

      <button className="bg-red-800 text-white p-2 rounded-md hover:bg-black shadow-sm shadow-purple-800"
      type="submit"
      >
        Submit
      </button>

      </form>
      </div>

    
      
    </div>
  )
}

export default Complain