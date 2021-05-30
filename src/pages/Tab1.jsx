import { IonContent,IonLoading,IonAvatar,IonLabel,IonImg,IonItemGroup, IonList ,IonText,IonGrid, IonCol,IonThumbnail, IonRow,IonItem,IonRouterLink, IonHeader, IonPage, IonSlides, IonSlide, IonTitle, IonToolbar } from '@ionic/react';
import './general.css';
import Popover from '../components/menu';
import axios from 'axios';
import {useState,useEffect} from 'react';
import CardImage from '../components/Cardimage';
const Tab1 = () => {
  const [loading, setShowLoading] = useState(false);
  const [response, setResponse] = useState([]);
  function GetCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  const Function = () => {
    if (response != '') return;
    axios.get("https://poetic-orb-283600.ew.r.appspot.com/explore",{
      headers : {
        'auth-token' : GetCookie("jwt")
      }
    }).then(arr => {
    setResponse(arr.data);
    console.log(arr,arr.headers,GetCookie("immagine"));
  }, err => console.log(err));}
  const Component = () =>{
    return(<div>{response.map(i => <CardImage nome={i.titolo} link={i.immagine} />)}</div>);
  }
  return (
    <IonPage onLoad={Function}>
      <IonContent>
      <IonGrid>
        <IonRow>
          <IonCol></IonCol>
          <IonCol size-xl="4" size="12" className="ion-padding">
          <IonItem className="ion-margin-bottom" lines="none">
            <IonThumbnail slot="end">
              <Popover/>
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
