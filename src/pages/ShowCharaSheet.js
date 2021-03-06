import React, { useContext } from "react";
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
// import { AuthContext } from "../contexts/Auth";
import { useHistory } from "react-router-dom";

const ShowCharaSheet = () => {
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
          <IonTitle>キャラクターシート一覧</IonTitle>
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
            <IonIcon slot="start" icon={chevronBackOutline}></IonIcon>
            <IonLabel>キャラクターシート一覧</IonLabel>
            <IonIcon
              slot="end"
              icon={exitOutline}
              onClick={handleSubmit}
            ></IonIcon>
          </IonItem> */}
        </IonToolbar>
      </IonHeader>
      <IonContent></IonContent>
      {/* <IonButton onClick={handleSubmit}></IonButton> */}
    </IonPage>
  );
};

export default ShowCharaSheet;
