import { Suspense } from "react"
import { Outlet } from "react-router-dom"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import AuthModal from "../shared/components/modals/auth/AuthModal"

const Layout = () => {

    return (
        <>
            <Header/>
            <Suspense fallback={<div>Page Loading...</div>}>
                <Outlet/>
            </Suspense>
            <Footer/>
            <AuthModal/>
        </>
    )
}

export default Layout