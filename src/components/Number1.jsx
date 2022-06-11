import './Rating/Rating.css'
import { useEffect, useRef } from 'react';


const Number1 = () => {

    const canvas = useRef(null)
  
    useEffect(() => {
        let dashLen = 220, dashOffset = dashLen, speed = 12,
        txt = "15000 +", x = 30, i = 0;
        const ctx = canvas.current.getContext("2d")
        canvas.current.width = window.innerWidth
        canvas.current.height = window.innerHeight
        function loop() {
            if(window.scrollY >= 1900){
                ctx.clearRect(x, 0, 120, 140);
                ctx.setLineDash([dashLen - dashOffset, dashOffset - speed]); // create a long dash mask
                dashOffset -= speed;                                         // reduce dash length
                ctx.strokeText(txt[i], x, 90);     
            }
            // console.log(window.scrollY);
        //   ctx.clearRect(x, 0, 120, 140);
        //   ctx.font = "200px Georgia"
        //   ctx.setLineDash([dashLen - dashOffset, dashOffset - speed]); // create a long dash mask
        //   dashOffset -= speed;                                         // reduce dash length
        //   ctx.strokeText(txt[i], x, 90);                               // stroke letter
          if (dashOffset > 0) requestAnimationFrame(loop);             // animate
          else {
            ctx.fillText(txt[i], x, 90);                               // fill final letter
            dashOffset = dashLen;                                      // prep next char
            x += ctx.measureText(txt[i++]).width + ctx.lineWidth * Math.random();
            ctx.setTransform(1, 0, 0, 1, 0, 3 * Math.random());        // random y-delta
            ctx.rotate(Math.random() * 0.005);                         // random rotation
            if (i < txt.length) requestAnimationFrame(loop);
          }
        };
            loop()
    
        
        ctx.font = "90px Pangolin, sans-serif"; 
        ctx.lineWidth = 5;  ctx.lineJoin = "round"; ctx.globalAlpha = 2/3;
        ctx.strokeStyle = ctx.fillStyle = "#3A896A";
      }, [canvas])


    return(
        <div className="number">
            <p className="rating-number"><canvas width={200} height={200} className='rating-canvas' ref={canvas}></canvas></p>
        </div>
    )
}
export default Number1