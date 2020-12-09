import React, { useContext } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonItem,
  IonLabel,
  IonIcon,
  IonList,
  IonButtons,
  IonButton,
  IonToolbar,
} from "@ionic/react";
import "./Tab1.css";
import { exitOutline } from "ionicons/icons";
import { AuthContext } from "../contexts/Auth";
import { useHistory } from "react-router";

const Top = () => {
  const { signout } = useContext(AuthContext);
  const history = useHistory();
  const handleSubmit = (event) => {
    event.preventDefault();
    signout(history);
    // history.push("/");
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar lines="full">
          <IonButtons slot="end" onClick={handleSubmit}>
            <IonButton slot="icon-only" href="/">
              <IonIcon icon={exitOutline} color="dark"></IonIcon>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem lines="full" href="/joinroom">
            <IonLabel style={{ padding: "20px 0" }}>ルームに参加</IonLabel>
          </IonItem>
          <IonItem lines="full" href="/createroom">
            <IonLabel style={{ padding: "20px 0" }}>ルームを作成</IonLabel>
          </IonItem>
          <IonItem lines="full" href="/joiningroom">
            <IonLabel style={{ padding: "20px 0" }}>参加中のルーム</IonLabel>
          </IonItem>
          <IonItem lines="full" href="createcharasheet">
            <IonLabel style={{ padding: "20px 0" }}>
              キャラクターシート作成
            </IonLabel>
          </IonItem>
          <IonItem lines="full" href="showcharasheet">
            <IonLabel style={{ padding: "20px 0" }}>
              キャラクターシート一覧
            </IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
      {/* <IonButton onClick={handleSubmit}></IonButton> */}
    </IonPage>
  );
};

export default Top;
