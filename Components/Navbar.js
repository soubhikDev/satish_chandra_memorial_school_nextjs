
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
                    <li className={drop == 1 ? 'Navbar_LI_main' : "Navbar_LI_main Navbar_UL_SUB2"}  onMouseLeave={() => setDrop(0)} >
                        <span onClick={() => setDrop(1)}>About Us</span> 
                        <ul className='Navbar_UL_SUB'>
                            <li>History</li>
                            <li>Infrastructure</li>
                            <li>Vision & Mission</li>
                            <li>School Calendar</li>
                        </ul>
                    </li>
                    <li className={drop == 2 || drop == 2.1 || drop == 2.2 ? 'Navbar_LI_main' : "Navbar_LI_main Navbar_UL_SUB2"}  onMouseLeave={() => setDrop(0)}>
                        <span onClick={() => setDrop(2)}>Academics</span>
                        <ul className='Navbar_UL_SUB'>
                            <li onClick={() => setDrop(2.1)}>
                                <span>Curriculam</span>
                                <ul className={drop == 2.1 && 'Navbar_UL_mini'}  onMouseLeave={() => setDrop(2)}>
                                    <li>Junior</li>
                                    <li>Intermidiate</li>
                                    <li>Senior</li>
                                </ul>
                            </li>
                            <li>Examination</li>
                            <li>HomeWork</li>
                            <li onClick={() => setDrop(2.2)}>
                                <span>Result</span>
                                <ul className={drop == 2.2 && 'Navbar_UL_mini'} onMouseLeave={() => setDrop(2)}>
                                    <li>Result Class XII-2020</li>
                                    <li>Result Class X - 2020</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li className={drop == 3 ? 'Navbar_LI_main' : "Navbar_LI_main Navbar_UL_SUB2"}  onMouseLeave={() => setDrop(0)}>
                        <span onClick={() => setDrop(3)}>Administration</span>
                        <ul className='Navbar_UL_SUB'>
                            <li>Managing Commitee</li>
                            <li>Faculty</li>
                            <li>Fee Payment Rules</li>
                            <li>School Rules & Regulations</li>
                        </ul>
                    </li>
                    <li className={drop == 1 ? 'Navbar_LI_main' : "Navbar_LI_main Navbar_UL_SUB2"}  onMouseLeave={() => setDrop(0)}>Admission</li>
                    <li className={drop == 1 ? 'Navbar_LI_main' : "Navbar_LI_main Navbar_UL_SUB2"}  onMouseLeave={() => setDrop(0)}>Co-Curriculum</li>
                    <li className={drop == 1 ? 'Navbar_LI_main' : "Navbar_LI_main Navbar_UL_SUB2"}  onMouseLeave={() => setDrop(0)}>Facilities</li>
                    <li className={drop == 1 ? 'Navbar_LI_main' : "Navbar_LI_main Navbar_UL_SUB2"}  onMouseLeave={() => setDrop(0)}>Growth Activities</li>
                    <li className={drop == 1 ? 'Navbar_LI_main' : "Navbar_LI_main Navbar_UL_SUB2"}  onMouseLeave={() => setDrop(0)}>Support & Libraries</li>
                    <li className={drop == 1 ? 'Navbar_LI_main' : "Navbar_LI_main Navbar_UL_SUB2"}  onMouseLeave={() => setDrop(0)}>Media Gallery</li>
                    <li className='Navbar_LI_main'>Contact Us</li>
                </ul>
            </div>
        </div>
    </>
  )
}









