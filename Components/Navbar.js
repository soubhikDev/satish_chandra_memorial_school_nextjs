
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
                    <li className={drop == 4 ? 'Navbar_LI_main' : "Navbar_LI_main Navbar_UL_SUB2"}  onMouseLeave={() => setDrop(0)}>
                        <span onClick={() => setDrop(4)}>Admission</span>
                        <ul className='Navbar_UL_SUB'>
                            <li>Procedures</li>
                            <li>Schedule</li>
                            <li>Student Details</li>
                        </ul>
                    </li>
                    <li className={drop == 5 || drop == 5.1 ? 'Navbar_LI_main' : "Navbar_LI_main Navbar_UL_SUB2"}  onMouseLeave={() => setDrop(0)}>
                        <span  onClick={() => setDrop(5)}>Co-Curriculum</span>
                        <ul className='Navbar_UL_SUB'>
                            <li onClick={() => setDrop(5.1)}>
                                <span>Clubs</span>
                                <ul className={drop == 5.1 && 'Navbar_UL_mini'}  onMouseLeave={() => setDrop(5)}>
                                    <li>Club Name</li>
                                </ul>
                            </li>
                            <li>Project</li>
                            <li>Events</li>
                            <li>Excursion</li>
                        </ul>
                    </li>
                    <li className={drop == 6 ? 'Navbar_LI_main' : "Navbar_LI_main Navbar_UL_SUB2"}  onMouseLeave={() => setDrop(0)}>
                        <span onClick={() => setDrop(6)}>Facilities</span>
                        <ul className='Navbar_UL_SUB'>
                            <li>Laboratories</li>
                            <li>Infirmary</li>
                            <li>Transport</li>
                            <li>Special Education</li>
                            <li>Digital Classroom</li>
                            <li>Class Work</li>
                        </ul>
                    </li>
                    <li className={drop == 7 ? 'Navbar_LI_main' : "Navbar_LI_main Navbar_UL_SUB2"}  onMouseLeave={() => setDrop(0)}>
                        <span onClick={() => setDrop(7)}>Growth Activities</span>
                        <ul className='Navbar_UL_SUB'>
                            <li>Accolades</li>
                            <li>Workshops</li>
                            <li>Teaching Methods</li>
                            <li>Career Counselling</li>
                            <li>School Intiatives</li>
                        </ul>
                    </li>
                    <li className={drop == 8 ? 'Navbar_LI_main' : "Navbar_LI_main Navbar_UL_SUB2"}  onMouseLeave={() => setDrop(0)}>
                        <span onClick={() => setDrop(8)}>Support & Libraries</span>
                        <ul className='Navbar_UL_SUB'>
                            <li>Mission</li>
                            <li>Art Workshops</li>
                            <li>Activities</li>
                            <li>Know More</li>
                        </ul>
                    </li>
                    <li className={drop == 9 ? 'Navbar_LI_main' : "Navbar_LI_main Navbar_UL_SUB2"}  onMouseLeave={() => setDrop(0)}>
                        <span onClick={() => setDrop(9)}>Media Gallery</span>
                        <ul className='Navbar_UL_SUB'>
                            <li>Photo Gallery</li>
                            <li>Video Gallery</li>
                        </ul>
                    </li>
                    <li className='Navbar_LI_main'>Contact Us</li>
                </ul>
            </div>
        </div>
    </>
  )
}









