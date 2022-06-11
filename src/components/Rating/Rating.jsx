import './Rating.css'
import { useEffect, useRef } from 'react';
import Fade from 'react-reveal/Fade';
import { useTranslation } from 'react-i18next';
import Number from '../Number';
import Number1 from '../Number1';
import Number2 from '../Number2';
import { useState } from 'react';


const Rating = () =>{

    const canvas = useRef(null)
    // const [scroll, setScroll] = useState(false)
  
    useEffect(() => {
        let dashLen = 220, dashOffset = dashLen, speed = 5,
        txt = "2 1", x = 30, i = 0;
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
    
        
        ctx.font = "120px Pangolin, sans-serif"; 
        ctx.lineWidth = 5;  ctx.lineJoin = "round"; ctx.globalAlpha = 2/3;
        ctx.strokeStyle = ctx.fillStyle = "#3A896A";
      }, [canvas])

// const canvas = useRef(null)
  
//   useEffect(() => {
//     let dashLen = 220, dashOffset = dashLen, speed = 5,
//     txt = "15000+",
//      x = 10, i = 0;
    
//     const ctx = canvas.current.getContext("2d")
//     canvas.current.width = window.innerWidth
//     canvas.current.height = window.innerHeight
//     function loop() {
//       ctx.clearRect(x, 0, 60, 150);
      
//       ctx.setLineDash([dashLen - dashOffset, dashOffset - speed]); // create a long dash mask
//       dashOffset -= speed;                                         // reduce dash length
//       ctx.strokeText(txt[i], x, 90);                               // stroke letter
    
//       if (dashOffset > 0) requestAnimationFrame(loop);             // animate
//       else {
//         ctx.fillText(txt[i], x, 90);                               // fill final letter
//         dashOffset = dashLen;                                      // prep next char
//         x += ctx.measureText(txt[i++]).width + ctx.lineWidth * Math.random();
//         ctx.setTransform(1, 0, 0, 1, 1, 3 * Math.random());        // random y-delta
//         ctx.rotate(Math.random() * 0.005);                         // random rotation
//         if (i < txt.length) requestAnimationFrame(loop);
//       }
//     };
//     loop()

    
//     ctx.font = "150px Comic Sans MS, cursive, TSCu_Comic, sans-serif"; 
//     ctx.lineWidth = 5;  ctx.lineJoin = "round"; ctx.globalAlpha = 2/3;
//     ctx.strokeStyle = ctx.fillStyle = "#1f2f90";
//   }, [canvas])

    const {t} = useTranslation()

    return(
        <div className="rating">
            <div className="container">
                <div 
                    className="rating-page">
                    <div className="rating-list">
                        <p className="rating-number"><canvas width={200} height={200} className='rating-canvas21' ref={canvas}></canvas></p>
                        <p className="rating-text">Лет мы на рынке Узбекистана</p>
                    </div>
                    <div className="rating-list">
                        {/* <p className='rating-number'><Fade top big cascade>200+</Fade></p> */}
                        <Number />
                        <p className="rating-text">Более продуктов на рынке</p>
                    </div>
                    <div className="rating-list">
                        {/* <p className="rating-number"><Fade bottom big cascade>15000+</Fade></p> */}
                        <Number1 />
                        <p className="rating-text">{t(15)}</p>
                    </div>
                    <div className="rating-list rating-lists">
                        {/* <p className="rating-number"><Fade bottom big  cascade>5+</Fade></p> */}
                        <Number2 />
                        <p className="rating-texts">Более стран с которыми мы сотрудничаем</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Rating