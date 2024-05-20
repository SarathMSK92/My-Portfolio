import React from "react";
import Bottom from "../components/BottomSection/Bottom";
import Guarantee from "../components/Guarantee/Guarantee";
import Main from "../components/Main/Main";
import WhoIAm from "../components/Profile/WhoIAm";
import Skills from "../components/Skills/Skills";

function Home() {
  return (
    <div>
      <Main />
      <Guarantee />
      <WhoIAm />
      <Skills />
      <footer>
        <Bottom />
      </footer>
    </div>
  );
}

export default Home;
