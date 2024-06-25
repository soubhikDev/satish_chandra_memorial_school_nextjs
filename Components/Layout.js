import { useRouter } from 'next/router';
import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
    const router = useRouter();


    return (
        <>
                {
                    (router.pathname != '/login' && router.pathname != '/subscription')
                    && <Navbar />
                }

            <main>
                {children}
            </main>
            {
                (router.pathname != '/login' && router.pathname != '/subscription')

                && <Footer />
            }
        </>
    )
}

export default Layout