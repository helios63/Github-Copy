import React from 'react'
import LogoFooter from "./logofooter.png";
import { Footer } from "./styles"

const FooterComponent = () => (
  <Footer>
    <img src={LogoFooter} alt="github logo" />
    <div>
      Maxime Mondet - 2021
    </div>
  </Footer>
)

export default FooterComponent
