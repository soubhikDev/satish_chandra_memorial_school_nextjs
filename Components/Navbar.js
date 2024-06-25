
import Link from 'next/link'
import React, { useState } from 'react'

export default function Navbar() {
        const [drop , setDrop] = useState(0)
        console.log(drop);
  return (
    <>
        <div className='Navbar_main'>
            {/* =============== School Logo and Name =============== */}
            <div className="Nav_NameOFSchool">
                <img src="https://project-assetss.s3.ap-south-1.amazonaws.com/SCMS/SCMS_logo.png" alt="SCMS_logo" />
                <h1>Satish Chandra Memorial School <span>Affiliated to CBSE - DELHI</span></h1>
            </div>
            {/* =============== Navbar Menu =============== */}
            <div className='Navbar_Menu'>
                <ul className='Navbar_UL_main'>
                    <li className='Navbar_LI_main'>Home</li>
                    <li className='Navbar_LI_main' onClick={() => setDrop(1)} >
                        <span>About Us</span> 
                        <ul className={drop == 1 ? 'Navbar_UL_SUB' : "Navbar_UL_SUB2"} onMouseLeave={() => setDrop(0)}>
                            <li>History</li>
                            <li>Infrastructure</li>
                            <li>Vision & Mission</li>
                            <li>School Calendar</li>
                        </ul>
                    </li>
                    <li className='Navbar_LI_main'>Academics</li>
                    <li className='Navbar_LI_main'>Administration</li>
                    <li className='Navbar_LI_main'>Admission</li>
                    <li className='Navbar_LI_main'>Co-Curriculum</li>
                    <li className='Navbar_LI_main'>Facilities</li>
                    <li className='Navbar_LI_main'>Growth Activities</li>
                    <li className='Navbar_LI_main'>Support & Libraries</li>
                    <li className='Navbar_LI_main'>Media Gallery</li>
                    <li className='Navbar_LI_main'>Contact Us</li>
                </ul>
            </div>
        </div>
    </>
  )
}









