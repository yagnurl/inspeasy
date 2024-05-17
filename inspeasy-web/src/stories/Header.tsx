import { HeaderBase, Title } from "./header.style";

import { useState } from "react";

const Header = () => {
  const [isBeste, setIsBeste] = useState("ilk deger");

  const handleClick = () => {
    setIsBeste("degistirdim");
  };
  const handleMouseLeave = () => {
    setIsBeste("cik arkamdan ciiiiik");
  };

  return (
    <HeaderBase>
      <Title>{isBeste}</Title>

      <div onMouseEnter={handleClick} onMouseLeave={handleMouseLeave}>
        buna tikla
      </div>
    </HeaderBase>
  );
};

export default Header;
