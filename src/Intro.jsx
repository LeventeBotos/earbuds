import React from 'react'
import './styles.css'

export const Intro = () => {
    return (
        <div>
            <div class="flex vstack hstack@md" id="stack" >
                <div className="Sony" id="bud" > <div class='gradient1'> Sony WF-1000XM4 </div> </div> 
                <div className="AirPods" id="bud" > <div class='grad2'> AirPods 2 </div> </div>
                <div className="AirPods3" id="bud" > <div class="grad3"> AirPods 3 </div> </div>
                <div className="AirPodsPro" id="bud" > <div class="grad4"> AirPods Pro </div> </div>
            </div>    
        </div>    
    )
}
export default Intro