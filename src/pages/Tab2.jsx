import { IonContent,IonThumbnail,IonAvatar, IonHeader,IonList,IonSegment, IonFab,IonFabButton, IonIcon,IonSegmentButton, IonLabel, IonPage, IonTitle,IonButton, IonToolbar, IonCard, IonGrid, IonRow, IonCol, IonText, IonItem } from '@ionic/react';
import './general.css';
import {useState,useEffect} from 'react';
import Recipebox from '../components/Recipebox';
import { add } from 'ionicons/icons';

const Tab2 = () => {
  const [segment, setsegment] = useState('');
  const Page = () => {
    if(segment == 'ricette') {
      return(<div>
          <IonList>
              <Recipebox/>
              <Recipebox/>
          </IonList>
      </div>);
    }else{
      return(<div>
          <IonList>
            <Recipebox/>
            <Recipebox />
            <Recipebox />
          </IonList>
      </div>);
    }
  }
  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonRow>
        <IonCol/>
          <IonCol size-xl="4" size="12">
          <IonItem lines="none" className="ion-margin-bottom">
          <IonText className="custom-font"><h1>I tuoi salvati</h1></IonText>
          <IonThumbnail slot="end">
              <IonAvatar><img className="avatar" src="https://images.pexels.com/photos/3841338/pexels-photo-3841338.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"></img></IonAvatar>
            </IonThumbnail>
          </IonItem>
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
      <IonContent >
      <IonGrid>
        <IonRow>
          <IonCol></IonCol>
          <IonCol size-xl="4" size="12" className="ion-padding">
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
