import { IonContent, IonHeader,IonList,IonSegment, IonFab,IonFabButton, IonIcon,IonSegmentButton, IonLabel, IonPage, IonTitle,IonButton, IonToolbar, IonCard, IonGrid, IonRow, IonCol, IonText, IonItem } from '@ionic/react';
import './general.css';
import {useState,useEffect} from 'react';
import Recipebox from '../components/Recipebox';
import { add } from 'ionicons/icons';

const Tab2 = () => {
  const [segment, setsegment] = useState('');
  const Page = () => {
    if(segment == 'ricette') {
      return(<div>
        <IonItem lines="none">
            <IonText className="custom-font"><h4>Le tue ricette</h4></IonText>
          </IonItem>
          <IonList>
            <IonItem lines="none">
              <Recipebox/>
            </IonItem>
          </IonList>
      </div>);
    }else{
      return(<div>
        <IonItem lines="none">
            <IonText className="custom-font"><h4>Le tue liste</h4></IonText>
          </IonItem>
          <IonList>
            <IonItem lines="none">
            <Recipebox/>
            </IonItem>
          </IonList>
      </div>);
    }
  }
  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonTitle className="custom-font" color="primary"><strong>Le mie raccolte</strong></IonTitle>
        </IonToolbar>
        <IonRow>
        <IonCol/>
          <IonCol size-xl="4" size="12">
          <IonSegment onIonChange={e => setsegment(e.detail.value)}>
          <IonSegmentButton value="ricette">
            <IonText className="custom-font">Ricette</IonText>
          </IonSegmentButton>
          <IonSegmentButton value="liste">
            <IonText className="custom-font">Liste</IonText>
          </IonSegmentButton>
          </IonSegment>
          </IonCol>
          <IonCol/>
        </IonRow>
      </IonHeader>
      <IonContent fullscreen>
      <IonGrid>
        <IonRow>
          <IonCol></IonCol>
          <IonCol size-xl="4" size="12" className="ion-padding-end">
          <Page/>
          </IonCol>
          <IonCol></IonCol>
        </IonRow>
      </IonGrid>
      <IonFab vertical="bottom" horizontal="end" slot="fixed">
            <IonFabButton><IonIcon color="light" icon={add}/></IonFabButton>
      </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
