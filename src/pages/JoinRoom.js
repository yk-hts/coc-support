import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import {
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonButton,
  IonIcon,
  IonButtons,
  IonTitle,
  IonInput,
  IonItem,
} from "@ionic/react";
import "./Tab1.css";
import { exitOutline, chevronBackOutline } from "ionicons/icons";
import { AuthContext } from "../contexts/Auth";

const JoinRoom = () => {
  const { signout } = useContext(AuthContext);
  const history = useHistory();

  const handleSignOut = (event) => {
    event.preventDefault();
    signout();
    // history.push("/");
  };

  const handleGoBack = (event) => {
    event.preventDefault();
    history.push("/");
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>ルームに参加</IonTitle>
          <IonButtons slot="start" onClick={handleGoBack}>
            <IonButton slot="icon-only">
              <IonIcon icon={chevronBackOutline} color="dark"></IonIcon>
            </IonButton>
          </IonButtons>
          <IonButtons slot="end" onClick={handleSignOut}>
            <IonButton slot="icon-only">
              <IonIcon icon={exitOutline} color="dark"></IonIcon>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <form>
          <IonItem>
            <IonInput placeholder="roomID" name="roomID" type="text" />
          </IonItem>
          <IonButton style={{ float: "right" }}>参加</IonButton>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default JoinRoom;
