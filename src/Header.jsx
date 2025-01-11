import React from "react";
import { useNavigate } from "react-router-dom";
// import "./Header.css"; // Optional: Create separate styles for Header

const Header = () => {
let navigate =  useNavigate()

    function handleclick(){
        navigate("/")
    }
  return (
    <header className="header">
      <img onClick={handleclick} style={{cursor:"pointer"}}
        src="https://s3-alpha-sig.figma.com/img/5529/14e3/9180c5b3071ce91b6340d823396dbeea?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AcJEiDlDKmcR1RAoNACA08cK0wlTe6zFlplznrKiyd2vN3KlxxKF1uIDWXeZ-zwZemvEiD36vPEZ-E7AxMoB198xnzTuZNtyVrYWHqTQMdam3mLYpPpjq6Qb1UJWsr2CYK7VxiExMc8Ki9Qh3JoWk68jbmeyauzYvlatNgH6U4UBcZTCzMfhvxf0Hta~ylIbos67jzG~sXwvnK45GVJzsmm1MUthSRM69MTkX71JONXk3Fpd0WGBFZ6KWlk1SdmTdmGfRrAlQZ4EX0WwVG4o502v6pQ6uodFZadPKDXTLIIjhKWTxwi0Qrwwr7UT6SfN875~1zdtmn9QFYNfsNlHrA__"
        alt="Logo"
      />
    </header>
  );
};

export default Header;
