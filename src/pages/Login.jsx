import { Redirect, Route } from 'react-router-dom';
import { IonContent, IonHeader, IonPage, IonTitle, IonInput, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton, IonToolbar, IonGrid, IonCol, IonRow,IonImg } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, logoApple, logoFacebook, logoGoogle, square, triangle } from 'ionicons/icons';
import '@ionic/react/css/core.css';
import './login.css';
import {useState,useEffect} from 'react';


const Access = () =>{
  return(
      <IonPage>
        <IonHeader>
          <IonToolbar color="secondary">
            <IonTitle>LOGIN</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ion-content>
          <ion-grid>
            <ion-row className="ion-justify-content-center">
              <ion-col></ion-col>
              <ion-col size-lg="4" size="10">
                    <ion-item lines="none">
                      <ion-img src="./assets/mylogo.png" alt="immagine non caricata"/>
                    </ion-item>
                  <ion-item-group>
                    <ion-item>
                    <ion-label position="stacked">Email</ion-label>
                      <IonInput type="email"></IonInput>
                    </ion-item>
                    <br/>
                    <ion-item>
                      <ion-label position="stacked">Password</ion-label>
                      <ion-input type="password" color="dark"></ion-input>
                    </ion-item>
                  </ion-item-group>
                  <br/>
                  <ion-button shape="round" expand="block" color="primary">Login</ion-button>
                  <br/>
                  <ion-text>Non ancora iscritto? <ion-router-link href="#">Iscriviti qui</ion-router-link></ion-text>
                  <br/>
                  <br/>
                  <ion-button expand="block" color="danger"><ion-icon icon={logoGoogle}/>&nbsp;&nbsp;Google Login</ion-button>
                  <br/>
                  <ion-button expand="block" color="tertiary"><ion-icon icon={logoFacebook}/>&nbsp;&nbsp;Facebook Login</ion-button>
              </ion-col>
              <ion-col></ion-col>
            </ion-row>
          </ion-grid>
        </ion-content>
      </IonPage>
  );
};

export default Access;