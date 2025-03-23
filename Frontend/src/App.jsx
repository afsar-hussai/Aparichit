
import { useState } from "react";
import { useRef } from "react"
import { useNavigate } from "react-router";



function App() {

  const videoRef=useRef(null);
  const [muted, setmuted] = useState(true);
  const navigate=useNavigate();

  const handlePageClick=()=>{
    setmuted(false);
    videoRef.current.muted=false;
  }

  
  

  
  

  return (
    <div onClick={handlePageClick} className="fixed inset-0 w-full h-full overflow-hidden" >

  
  
      <video 
      ref={videoRef} 
      src="/src/Aparichit files/videos/Video 1.mp4" className="flex w-full h-full object-cover"  
      onEnded={()=>navigate('/complain')}
      autoPlay 
      muted={muted}>

        
    Your video Not Supported
      </video>
      </div>

  )
}

export default App
