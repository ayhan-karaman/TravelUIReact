import React, { useEffect } from 'react'
import './main.css'
import Data from '../../data/data'
import { HiOutlineClipboardCheck, HiOutlineLocationMarker } from 'react-icons/hi'
import Aos from 'aos'
import 'aos/dist/aos.css';



const Main = () => {
  const data = Data();
  useEffect(() => {
    Aos.init({duration:2000})
}, [])


  return (
    <section className="main container section">
       <div className="secTitle">
            <h3 data-aos="fade-right" className="title">
               Most visited destinations
            </h3>
       </div>
        <div className="secContent grid">
          {
             data.map((d) =>{
                  return <div key={d.id} data-aos="fade-up" className="singleDestination">
                    <div className="imageDiv">
                       <img src={d.imgSrc} alt="" />
                    </div>
                    <div className="cardInfo">
                        <h4 className="destTitle">{d.destTitle}</h4>
                        <span className="continent flex">
                           <HiOutlineLocationMarker className='icon' />
                          <span className="name">{d.location}</span>
                        </span>
                        <div className="fees flex">
                              <div className="grade">
                                <span>{d.grade} <small>+1</small></span>
                              </div>
                              <div className="price">
                                <h5>${d.fees}</h5>
                              </div>
                        </div>
                        <div className="desc">
                           <p> {d.description} </p>
                        </div>

                        <button className="btn flex">
                           DETAILS <HiOutlineClipboardCheck className='icon'/>
                        </button>
                    </div>
                  </div>
             })
          }
        </div>
    </section>
  )
}

export default Main