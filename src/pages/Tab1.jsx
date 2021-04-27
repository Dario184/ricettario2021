import { IonContent,IonLoading,IonLabel,IonImg,IonItemGroup, IonList ,IonText,IonGrid, IonCol,IonThumbnail, IonRow,IonItem,IonRouterLink, IonHeader, IonPage, IonSlides, IonSlide, IonTitle, IonToolbar } from '@ionic/react';
import './general.css';
import axios from 'axios';
import {useState,useEffect} from 'react';
import CardImage from '../components/Cardimage';
const Tab1 = () => {
  const [loading, setShowLoading] = useState(false);
  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonTitle className="custom-font" color="primary"><strong>Esplora ricette</strong></IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      <IonGrid>
        <IonRow>
          <IonCol></IonCol>
          <IonCol size-xl="4" size="10" className="ion-padding">
          <IonItem className="ion-margin-bottom" lines="none">
            <IonText className="custom-font"><strong><h4>I nostri cibi preferiti</h4></strong></IonText>
            <IonText className="custom-font" slot="end"><IonRouterLink href="#"><small>vedi di più-></small></IonRouterLink></IonText>
            </IonItem>
              <CardImage nome="Torta sachertorte di germania"/>
          </IonCol>
          <IonCol></IonCol>
        </IonRow>
        <IonLoading
            isOpen={setShowLoading}
            onDidDismiss={() => setShowLoading(false)}
            message={'Attendere...'}
            duration={5000}
          />
      </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
