import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Info from "./Components/Info";
import MobileNavbar from "./Components/MobileNav";
import { ExampleProject } from "./Components/ExampleProject";
import Footer from "./Components/Footer";
import bigImage from "./assets/big-Image.png";
import portfolio1 from "./assets/portfolio1.png"
import portfolio2 from "./assets/portfolio2.png"
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
      <ExampleProject image={portfolio1} title={"Example Project"} desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptatum, illo eligendi exercitationem neque officia, modi, itaque reiciendis fugiat libero earum. Minima natus reiciendis perferendis asperiores obcaecati assumenda atque dolore."}/>
      <ExampleProject image={portfolio2} flip={true} title={"Example Project"} desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptatum, illo eligendi exercitationem neque officia, modi, itaque reiciendis fugiat libero earum. Minima natus reiciendis perferendis asperiores obcaecati assumenda atque dolore."}/>
        <Footer />
      </div>
    </>
  );
};
export default App;
