import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonIcon,
  IonButtons,
} from "@ionic/react";
import "./Tab1.css";
import { exitOutline, chevronBackOutline } from "ionicons/icons";
import { useHistory } from "react-router-dom";

const JoiningRoom = () => {
  // const { signout } = useContext(AuthContext);
  const history = useHistory();
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   signout();
  // };

  const handleGoBack = (event) => {
    event.preventDefault();
    history.push("/");
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>参加中のルーム</IonTitle>
          <IonButtons slot="start" onClick={handleGoBack}>
            <IonButton slot="icon-only">
              <IonIcon icon={chevronBackOutline} color="dark"></IonIcon>
            </IonButton>
          </IonButtons>
          <IonButtons slot="end">
            <IonButton slot="icon-only">
              <IonIcon icon={exitOutline} color="dark"></IonIcon>
            </IonButton>
          </IonButtons>
          {/* <IonItem lines="none">
            <IonButtons slot="start" onClick={handleGoBack}>
              <IonButton slot="icon-only">
                <IonIcon icon={chevronBackOutline} color="dark"></IonIcon>
              </IonButton>
            </IonButtons>
            <IonTitle style={{ paddingLeft: "10%" }}>参加中のルーム</IonTitle>
          </IonItem> */}
        </IonToolbar>
      </IonHeader>
      <IonContent></IonContent>
      {/* <IonButton onClick={handleSubmit}></IonButton> */}
    </IonPage>
  );
};

export default JoiningRoom;
