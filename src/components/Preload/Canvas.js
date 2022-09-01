import React, { useRef, useEffect } from "react";

const Canvas = (props) => {
  const canvasRef = useRef(null);

 
  
  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);

    let frame=1
    let animationFrameId;
   let height = (canvas.height = window.innerHeight);
   let width = (canvas.width = window.innerWidth);
   let font_size = 10;
   let columns = width / font_size
   let letters = "010110";
   let drops = [];
    letters = letters.split("");
    for(let i = 0; i < columns; i++){
       drops[i] = 1;
      }
      
      clear();
      function showLetters() {
    context.fillStyle = "#fff";
    context.font = font_size + "px Gotham";

    for (let i = 0; i < drops.length; i++) {
      let text = letters[Math.floor(Math.random() * letters.length)];
      let textPosY = drops[i] * font_size;
      context.fillText(text, i * font_size, textPosY);
      if (textPosY > height && Math.random() > 0.956) {
       drops[i] = 0;
      }

     drops[i]++;
    }
  }
  function clear() {
    context.fillStyle = "rgba(107, 36, 179, 0.1)";
    context.fillRect(0, 0, width, height);
  }
      const render = () => {
        if(frame === 1){
           clear(context);
            showLetters();
          }else if(frame === 2){
            frame = 0;
          }
        frame++
        animationFrameId = window.requestAnimationFrame(render)
       
      }
      render()
     
    
    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} {...props} />;
};

export default Canvas;
