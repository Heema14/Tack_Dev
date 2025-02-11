"use client";

import React, { useState } from "react";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const ResponsiveNav = () => {
  const [showNav, setShowNav] = useState(false);
  const OpenNavHandler = () => setShowNav(true);
  const CloseNavHandler = () => setShowNav(false);

  return (
    <div>
      <Nav openNav={OpenNavHandler} />
      <MobileNav showNav={showNav} closeNav={CloseNavHandler} />
    </div>
  );
};

export default ResponsiveNav;
