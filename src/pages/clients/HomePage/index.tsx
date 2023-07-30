import { useEffect } from "react"
import Footer from '../Footer'
import "../../../css/bootstrap-icons.css"
import "../../../css/bootstrap.min.css"
import "../../../css/teamplatemo-topic-listing.css"
import "../../../js/bootstrap.bundle.min"
import Header from '../Header'
import Contacts from '../contacts'
import Questions from '../quetions'

const Layout = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            <Header />
            <Questions />
            <Contacts />
            <Footer />

        </div>
    )
}

export default Layout