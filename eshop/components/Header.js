import React from "react";

import headerStyles from "../styles/Header.module.css";
const Header = () => {
    let x=3;
  return <> <div>
      <h1 className={headerStyles.title}><span>official shop of Angelo</span></h1>

      <style jsx>{`
        h1 {
            
            font-size: 3rem;
            font-weight: 700;
            text-align: center;
            margin-bottom: 0;
            padding-bottom: 0;
            margin-top: 0;
            padding-top: 0;
            font-family: 'Roboto', sans-serif;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            line-height: 1.2;

        }
        .title {
           background-color: ${x>3 ? 'black' : 'green'};} } `}</style>

  </div>
  </>;
};
export default Header;
