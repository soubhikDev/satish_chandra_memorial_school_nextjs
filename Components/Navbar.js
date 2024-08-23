
import { Link } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useState } from 'react'

export default function Navbar() {
        const [drop , setDrop] = useState(0)
        console.log(drop);
        const router = useRouter()
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
                    <li className='Navbar_LI_main'><Link onClick={() => router.push('/')}>Home</Link></li>
                    <li className={drop == 1 ? 'Navbar_LI_main' : "Navbar_LI_main Navbar_UL_SUB2"}  onMouseLeave={() => setDrop(0)} >
                        <span onClick={() => setDrop(1)}>About Us</span> 
                        <ul className='Navbar_UL_SUB'>
                            <li><Link>History</Link></li>
                            <li><Link>Infrastructure</Link></li>
                            <li><Link>Vision & Mission</Link></li>
                            <li><Link>School Calendar</Link></li>
                        </ul>
                    </li>
                    <li className={drop == 2 || drop == 2.1 || drop == 2.2 ? 'Navbar_LI_main' : "Navbar_LI_main Navbar_UL_SUB2"}  onMouseLeave={() => setDrop(0)}>
                        <span onClick={() => setDrop(2)}>Academics</span>
                        <ul className='Navbar_UL_SUB'>
                            <li onClick={() => setDrop(2.1)}>
                                <span>Curriculam</span>
                                <ul className={drop == 2.1 && 'Navbar_UL_mini'}  onMouseLeave={() => setDrop(2)}>
                                    <li><Link>Junior</Link></li>
                                    <li><Link>Intermidiate</Link></li>
                                    <li><Link>Senior</Link></li>
                                </ul>
                            </li>
                            <li><Link>Examination</Link></li>
                            <li><Link>HomeWork</Link></li>
                            <li onClick={() => setDrop(2.2)}>
                                <span>Result</span>
                                <ul className={drop == 2.2 && 'Navbar_UL_mini'} onMouseLeave={() => setDrop(2)}>
                                    <li><Link>Result Class XII-2020</Link></li>
                                    <li><Link>Result Class X - 2020</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li className={drop == 3 ? 'Navbar_LI_main' : "Navbar_LI_main Navbar_UL_SUB2"}  onMouseLeave={() => setDrop(0)}>
                        <span onClick={() => setDrop(3)}>Administration</span>
                        <ul className='Navbar_UL_SUB'>
                            <li><Link>Managing Commitee</Link></li>
                            <li><Link>Faculty</Link></li>
                            <li><Link>Fee Payment Rules</Link></li>
                            <li><Link>School Rules & Regulations</Link></li>
                        </ul>
                    </li>
                    <li className={drop == 4 ? 'Navbar_LI_main' : "Navbar_LI_main Navbar_UL_SUB2"}  onMouseLeave={() => setDrop(0)}>
                        <span onClick={() => setDrop(4)}>Admission</span>
                        <ul className='Navbar_UL_SUB'>
                            <li><Link>Procedures</Link></li>
                            <li><Link>Schedule</Link></li>
                            <li><Link>Student Details</Link></li>
                        </ul>
                    </li>
                    <li className={drop == 5 || drop == 5.1 ? 'Navbar_LI_main' : "Navbar_LI_main Navbar_UL_SUB2"}  onMouseLeave={() => setDrop(0)}>
                        <span  onClick={() => setDrop(5)}>Co-Curriculum</span>
                        <ul className='Navbar_UL_SUB'>
                            <li onClick={() => setDrop(5.1)}>
                                <span>Clubs</span>
                                <ul className={drop == 5.1 && 'Navbar_UL_mini'}  onMouseLeave={() => setDrop(5)}>
                                    <li><Link>Club Name</Link></li>
                                </ul>
                            </li>
                            <li><Link>Project</Link></li>
                            <li><Link>Events</Link></li>
                            <li><Link>Excursion</Link></li>
                        </ul>
                    </li>
                    <li className={drop == 6 ? 'Navbar_LI_main' : "Navbar_LI_main Navbar_UL_SUB2"}  onMouseLeave={() => setDrop(0)}>
                        <span onClick={() => setDrop(6)}>Facilities</span>
                        <ul className='Navbar_UL_SUB'>
                            <li><Link>Laboratories</Link></li>
                            <li><Link>Infirmary</Link></li>
                            <li><Link>Transport</Link></li>
                            <li><Link>Special Education</Link></li>
                            <li><Link>Digital Classroom</Link></li>
                            <li><Link>Class Work</Link></li>
                        </ul>
                    </li>
                    <li className={drop == 7 ? 'Navbar_LI_main' : "Navbar_LI_main Navbar_UL_SUB2"}  onMouseLeave={() => setDrop(0)}>
                        <span onClick={() => setDrop(7)}>Growth Activities</span>
                        <ul className='Navbar_UL_SUB'>
                            <li><Link>Accolades</Link></li>
                            <li><Link>Workshops</Link></li>
                            <li><Link>Teaching Methods</Link></li>
                            <li><Link>Career Counselling</Link></li>
                            <li><Link>School Intiatives</Link></li>
                        </ul>
                    </li>
                    <li className={drop == 8 ? 'Navbar_LI_main' : "Navbar_LI_main Navbar_UL_SUB2"}  onMouseLeave={() => setDrop(0)}>
                        <span onClick={() => setDrop(8)}>Support & Libraries</span>
                        <ul className='Navbar_UL_SUB'>
                            <li><Link>Mission</Link></li>
                            <li><Link>Art Workshops</Link></li>
                            <li><Link>Activities</Link></li>
                            <li><Link>Know More</Link></li>
                        </ul>
                    </li>
                    <li className={drop == 9 ? 'Navbar_LI_main' : "Navbar_LI_main Navbar_UL_SUB2"}  onMouseLeave={() => setDrop(0)}>
                        <span onClick={() => setDrop(9)}>Media Gallery</span>
                        <ul className='Navbar_UL_SUB'>
                            <li><Link>Photo Gallery</Link></li>
                            <li><Link>Video Gallery</Link></li>
                        </ul>
                    </li>
                    <li className='Navbar_LI_main'><Link>Contact Us</Link></li>
                </ul>
            </div>
        </div>
    </>
  )
}









