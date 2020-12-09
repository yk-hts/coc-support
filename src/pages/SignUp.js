import React, { useContext } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInput,
  IonItem,
  IonButton,
  IonIcon,
  IonRouterOutlet,
} from "@ionic/react";
import "./Tab1.css";
import { chevronBackOutline } from "ionicons/icons";
import { AuthContext } from "../contexts/Auth";

const SignUp = ({ history }) => {
  const { signup } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    signup(email.value, password.value, history);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <a href="/signin">
            <IonIcon icon={chevronBackOutline}></IonIcon>
          </a>
          <IonTitle>アカウントを作成</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div style={{ padding: "5% 5% 0 5%" }}>
          <form onSubmit={handleSubmit}>
            <div style={{ padding: "0 5%" }}>
              <IonItem>
                <IonInput placeholder="mail" name="email" type="email" />
              </IonItem>
              <IonItem>
                <IonInput
                  placeholder="password"
                  name="password"
                  type="password"
                />
              </IonItem>
            </div>
            <IonButton type="submit" style={{ float: "right" }}>
              Sign Up
            </IonButton>
          </form>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default SignUp;
