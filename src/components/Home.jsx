import Experience from "./Experience/Experience";
import Intro from "./Intro/Intro";
import Portfolio from "./Portfolio/Portfolio";
import Services from "./Services/Services";
import Works from "./Works/Works";
import Contact from "./Contact/Contact";

const Home=()=>{
    return(
<>
<Intro/>
<Services/>
<Experience/>
<Works/>
<Portfolio/>
<Contact/>

</>
    );
}

export default Home;