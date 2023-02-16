import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Info from "./Components/Info";
import MobileNavbar from "./Components/MobileNav";
import { ExampleProject } from "./Components/ExampleProject";
import Footer from "./Components/Footer";
import bigImage from "./assets/big-Image.png";
// import mern from "./assets/mern.png";
// import bankApp from "./assets/bankApp.png";
// import capstone from "./assets/capstone.png";
import { useState } from "react";

const App = () => {
  const [display, setDisplay] = useState(false);
  const displayer = () => {
    setDisplay((old) => !old);
  };
  return (
    <>
      {<Navbar />}
      {<MobileNavbar displayer={displayer} display={display} />}
      <div
        className="mt-20 flex flex-col justify-center"
        onClick={() => setDisplay(false)}
      >
        <Hero />
        <Info />
        <img
          src={bigImage}
          alt="bigImage"
          className="w-3/6 mx-auto my-20 min-w-[320px]"
        />
        {/* <ExampleProject
          title={"Mern App"}
          desc={
            "This is a MERN blogging app with the login and signup page and after logging in you can write blogs in your account and look other people blogs. I have used Typescript and tailwind for frontend and expressJs and Monogodb for backend."
          }
          image={mern}
        /> */}
        {/* <ExampleProject
          title={"Banking App Dashoard"}
          desc={
            "This is a dummy but properly designed dashboard of a banking app and in this project I demonstrated my skills as a responsive web developer. This layout is totally responsive and also contained a Graph totally made by me from the scratch."
          }
          image={bankApp}
          flip={true}
        />
        <ExampleProject
          title={"Capstone"}
          desc={
            "This minor project is the example of a simple Ecommerce site and in this project I have done proper use of advance React concepts such as custom hooks and used Context api for managing state globally.Please do check it out this tiny website."
          }
          image={capstone}
        /> */}
        <Footer />
      </div>
    </>
  );
};
export default App;
