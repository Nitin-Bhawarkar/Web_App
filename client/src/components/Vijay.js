import React from 'react';

import Vijays from '../Images_V/Vijay.jpeg'
import CutiePie from '../Images_V/CutiePie.jpeg'
import Krishna from '../Images_V/Little_Krishna.jpeg'
import MamaMi from '../Images_V/Mama_Mami.jpeg'
import Nandi from '../Images_V/Nandi.jpeg'
import Parvati from '../Images_V/Parvati.jpeg'
import Shriu from '../Images_V/Shriu.jpeg'
import Blue from '../Images_V/Blue.jpeg'
import NitinPro from '../Images_V/NitinPRO.jpeg'


const Vijay = () => {
  return (
    <>

    <div className='Birthday'>
    <div class="container">
    <div className='Birthday2'>
    <div className='row'>
            <div className='col-md-4 CutiePie'>
              <img src={CutiePie} alt='Vijay'/>
            </div>
            <div className='col-md-4 MamaMi'>
              <img src={MamaMi} alt='Vijay'/>
            </div>
    
            <div className='col-md-4 Krishna'>
            <img src={Krishna} alt='Vijay'/>
            </div>
    </div>

    <div className='row bigg'>

    <div className='col-md-4 NitinPro'>
            <img src={NitinPro} alt='Vijay'/>
            </div>

            <div className='col-md-4 VijayMama'>
              <img src={Vijays} alt='Vijay'/>
            </div>

            <div className='col-md-4 Blue'>
            <img src={Blue} alt='Vijay'/>
            </div>


    </div>

    <div className='row'>
            <div className='col-md-4 Nandi'>
            <img src={Nandi} alt='Vijay'/>
            </div>
            <div className='col-md-4 Shriu'>
            <img src={Shriu} alt='Vijay'/>
            </div>
    
            <div className='col-md-4 Parvati'>
            <img src={Parvati} alt='Vijay'/>
            </div>
        </div>
      </div>


      
    </div>
    
</div>
    
    </>
  )
}

export default Vijay