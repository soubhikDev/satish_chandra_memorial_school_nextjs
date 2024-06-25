import React from 'react'

export default function Navbar() {
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
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Academics</li>
                    <li>Administration</li>
                    <li>Admission</li>
                    <li>Co-Curriculum</li>
                    <li>Facilities</li>
                    <li>Growth Activities</li>
                    <li>Support & Libraries</li>
                    <li>Media Gallery</li>
                    <li>Contact Us</li>
                </ul>
            </div>
        </div>
    </>
  )
}









