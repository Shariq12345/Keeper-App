import React from "react";

function Footer() {
  let getYear = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright &copy; {getYear} All Rights Reserved</p>
    </footer>
  );
}

export default Footer;
