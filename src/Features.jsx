import React from 'react'
import { BiCheck, BiX } from 'react-icons/bi'
import './styles.css'

export const Features = () => {
    return (
        <div>
            <h2> Features </h2>
            <table class="ifs" >
                <tr class="bigtr" >
                    <th> 
                            <tr><th> </th></tr>
                             <tr><th> ANC</th></tr>
                             <tr><th> Battery life</th></tr>
                    </th>
                    <th>
                             <tr><th> Sony WF-1000XM4</th></tr>
                             <tr><th> <BiCheck /></th></tr>
                               <tr><th> 8+16 </th></tr>
                    </th>
                    <th>
                             <tr><th> AirPods 3</th></tr>
                             <tr><th> <BiX /></th></tr>
                               <tr><th> 6+24 </th></tr>
                    </th>
                    <th>
                             <tr><th> AirPods Pro</th></tr>
                             <tr><th> <BiCheck /></th></tr>
                               <tr><th> 4,5+19,5 </th></tr>
                    </th>
                    <th>
                             <tr><th> AirPods Pro 2</th></tr>
                             <tr><th> <BiCheck /></th></tr>
                               <tr><th> 6+24 </th></tr>
                    </th>
                </tr>
            </table>
        </div>
    )
}
export default Features