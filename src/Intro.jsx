import React from 'react'
import Sony from './imgs/sony.png'
import AirPodsPro from './imgs/AirPodsPro.png'
import AirPods3 from './imgs/AirPods3.png'
import './styles.css'

export const Intro = () => {
    return (
        <div>
            <div class="flex vstack hstack@md" id="stack" >
                <div className="Sony" id="bud" >
                     <div class='grad1'>
                          <div> <h2> Sony WF-1000XM4 </h2> </div>
                          <div> 80 580 Ft </div>
                      </div> 
                     <img src={Sony} alt="Kép" />
                </div> 
                <div className="AirPods3" id="bud" >
                     <div class='grad2'>
                          <div> <h2> AirPods 3 </h2> </div>
                          <div> 71,990 Ft </div>
                      </div> 
                     <img src={AirPods3} alt='Kép' />
                </div>
                <div className="AirPodsPro" id="bud" >
                     <div class='grad3'>
                          <div> <h2> AirPods Pro </h2> </div>
                          <div> 81,490 Ft </div>
                      </div> 
                     <img src={AirPodsPro} alt='Kép' />
                </div>
                <div className="AirPodsPro2" id="bud" >
                     <div class='grad4'>
                          <div> <h2> AirPods Pro 2 </h2> </div>
                          <div> 124,990 Ft </div>
                      </div> 
                     <img src={AirPodsPro} alt='Kép' />
                </div>
            </div>    
        </div>    
    )
}
export default Intro