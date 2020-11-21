import React, { useState } from "react";
import SignIn from "../components/signin.component";
import SignUp from "../components/signup.component";

enum ScreenType {
  SIGN_IN = "SIGN_IN",
  SIGN_UP = "SIGN_UP",
}

const HomePage: React.FC = () => {
  const [screen, setScreen] = useState<ScreenType>(ScreenType.SIGN_IN);

  const onClick = (screen: ScreenType) => {
    setScreen(screen);
  };

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <div className="nav-link" onClick={() => onClick(ScreenType.SIGN_IN)}>
                  Login
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-link" onClick={() => onClick(ScreenType.SIGN_UP)}>
                  Sign up
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="auth-wrapper">
        <div className="auth-inner">{screen === ScreenType.SIGN_IN ? <SignIn /> : <SignUp />}</div>
      </div>
    </div>
  );
};

export default HomePage;
