import React from "react";
import { Route } from "react-router-dom";
import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

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
// import { title } from "process";

import Top from "./pages/Top";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import PrivateRoute from "./pages/PrivateRoute";
import CreateRoom from "./pages/CreateRoom";
import JoinRoom from "./pages/JoinRoom";
import JoiningRoom from "./pages/JoiningRoom";
import CreateCharaSheet from "./pages/CreateCharaSheet";
import ShowCharaSheet from "./pages/ShowCharaSheet";
import { AuthProvider } from "./contexts/Auth";

const App = () => {
  return (
    <IonApp>
      <AuthProvider>
        <IonReactRouter>
          <IonRouterOutlet>
            <PrivateRoute exact path="/" component={Top} />
            {/* <Route
            path="/signin" render={() => <SignIn location={window.location} />}
            exact={true}
            /> */}
            <Route path="/signin" component={SignIn} exact={true} />
            <Route path="/signup" component={SignUp} exact={true} />
            <Route path="/createroom" component={CreateRoom} exact={true} />
            <Route path="/joinroom" component={JoinRoom} exact={true} />
            <Route path="/joiningroom" component={JoiningRoom} exact={true} />
            <Route
              path="/createcharasheet"
              component={CreateCharaSheet}
              exact={true}
            />
            <Route
              path="/showcharasheet"
              component={ShowCharaSheet}
              exact={true}
            />
          </IonRouterOutlet>
        </IonReactRouter>
      </AuthProvider>
    </IonApp>
  );
};
export default App;
