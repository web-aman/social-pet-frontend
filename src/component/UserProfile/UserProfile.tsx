import { useNavigate } from "react-router-dom";
import FooterSection from "../Footer/FooterSection";
import LogoHeader from "../HeroSection/LogoHeader";
import Navbar from "../HeroSection/Navbar";
import ProfileSection from "./ProfileSection";
import { useEffect, useState } from "react";
import Button from "../ui/Button";

const UserProfile = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);

  const checkLoggedIn = () => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLogin(true);
    }
  };

  useEffect(() => {
    checkLoggedIn();
  }, []);

  const redirectToLogin = () => {
    navigate("/login");
  };
  return (
    <div className="bg-userprofile">
      <Navbar />
      <LogoHeader />
      <div>
        {!isLogin && (
          <Button
            variant={{ theme: "dark", thickness: "thick" }}
            className="px-4 py-2 lg:px-10 lg:py-4 "
            onClick={redirectToLogin}
          >
            Login
          </Button>
        )}
        {/* {isLogin && <UserActionDropDown />} */}
      </div>
      <div className="container mx-auto md:px-6 px-4 relative mt-10">
        <ProfileSection />
      </div>
      <FooterSection />
    </div>
  );
};

export default UserProfile;
