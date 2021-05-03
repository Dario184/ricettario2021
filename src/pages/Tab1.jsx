import { IonContent,IonLoading,IonAvatar,IonLabel,IonImg,IonItemGroup, IonList ,IonText,IonGrid, IonCol,IonThumbnail, IonRow,IonItem,IonRouterLink, IonHeader, IonPage, IonSlides, IonSlide, IonTitle, IonToolbar } from '@ionic/react';
import './general.css';
import axios from 'axios';
import {useState,useEffect} from 'react';
import CardImage from '../components/Cardimage';
const Tab1 = () => {
  const [loading, setShowLoading] = useState(false);
  const [response, setResponse] = useState([]);
  const Function = () => {
    if (response != '') return;
    axios.get("https://poetic-orb-283600.ew.r.appspot.com/explore").then(arr => {
    setResponse(arr.data);  
    console.log(arr.data);
  }, err => console.log(err));}
  const Component = () =>{
    Function();
    return(<div>{response.map(i => <CardImage nome={i.titolo} link={i.immagine} />)}</div>);
  }
  return (
    <IonPage>
      <IonContent>
      <IonGrid>
        <IonRow>
          <IonCol></IonCol>
          <IonCol size-xl="4" size="12" className="ion-padding">
          <IonItem className="ion-margin-bottom" lines="none">
            <IonThumbnail slot="end">
              <IonAvatar><img className="avatar" src="https://images.pexels.com/photos/3841338/pexels-photo-3841338.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"></img></IonAvatar>
            </IonThumbnail>
            <IonText className="custom-font"><strong><h1>I nostri cibi preferiti</h1></strong></IonText>
          </IonItem>
              <Component/>
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
