import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router';

const Success = () => {

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
      src="/src/Aparichit files/videos/Video 2.mp4" className="flex w-full h-full object-cover"  
      autoPlay 
      muted={muted}
      onEnded={()=>navigate('/thanks')}
      >

        
    Your video Not Supported
      </video>
      </div>
  )
}

export default Success