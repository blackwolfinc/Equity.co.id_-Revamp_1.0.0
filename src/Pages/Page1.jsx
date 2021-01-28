import React from 'react'
import { NavbarPage } from '../Components/Global/Navbar/NavbarPage'
import { BeritaLDP } from '../Components/User/BeritaLDP/BeritaLDP'
import { HeaderLDP } from '../Components/User/HeaderLDP/HeaderLDP'
import { SecHeaderLDP } from '../Components/User/SecHeaderLDP/SecHeaderLDP'

export const Page1 = () => {
    return (
        <>
        <NavbarPage/>
        <HeaderLDP/>
        <SecHeaderLDP/>
        <BeritaLDP/>
        </>
    )
}
