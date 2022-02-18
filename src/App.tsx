import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Login from "./pages/authentication/Login";
import Home from "./pages/core/Home";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import Location from "./pages/core/Location";
import Profile from "./pages/core/Profile";
import EditPassword from "./pages/core/EditPassword";
import EditProfile from "./pages/core/EditProfile";
import EditProfilePicture from "./pages/core/EditProfilePicture";
import ForgotPassword from "./pages/authentication/ForgotPassword";
import Register from "./pages/authentication/Register";
import ResetPassword from "./pages/authentication/ResetPassword";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/authentication/forgotten-password">
           <ForgotPassword/>
        </Route>
        <Route exact path="/register/create-business-account">
            <Register/>
        </Route>
        <Route exact path="/authentication/Reset-password">
            <ResetPassword/>
        </Route>
        <Route exact path="/set-up-locations">
          <Location/>
        </Route>
        <Route exact path="/profile">
          <Profile/>
        </Route>
        <Route exact path="/edit-password">
           <EditPassword/>
        </Route>
        <Route exact path="/edit-profile">
            <EditProfile/>
        </Route>
        <Route exact path="/edit-profile-picture">
             <EditProfilePicture/>
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
