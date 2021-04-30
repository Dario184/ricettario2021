import { IonContent,IonLoading,IonLabel,IonImg,IonItemGroup, IonList ,IonText,IonGrid, IonCol,IonThumbnail, IonRow,IonItem,IonRouterLink, IonHeader, IonPage, IonSlides, IonSlide, IonTitle, IonToolbar } from '@ionic/react';
import './general.css';
import axios from 'axios';
import {useState,useEffect} from 'react';
import CardImage from '../components/Cardimage';
const Tab1 = () => {
  const [loading, setShowLoading] = useState(false);
  return (
    <IonPage>
      <IonContent>
      <IonGrid>
        <IonRow>
          <IonCol></IonCol>
          <IonCol size-xl="4" size="12" className="ion-padding">
          <IonItem className="ion-margin-bottom" lines="none">
            <IonText className="custom-font"><strong><h1>I nostri cibi preferiti</h1></strong></IonText>
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
