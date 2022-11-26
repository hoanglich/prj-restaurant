import Header from "../../component/header/header"
import Slide  from "./slide/slide"
import BlogHome from "./blogHome/blogHome"
import Notify from "./notify/notify"
import Footer from "../../component/footer/footer"
function Home(){
    return (
        <div> 
            <Header /> 
            <Slide />   
            <BlogHome />
            <Notify />
            <Footer/>
        </div>
    )
}

export default Home