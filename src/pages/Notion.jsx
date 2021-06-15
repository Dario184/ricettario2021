import { IonContent,IonThumbnail,IonAvatar, IonHeader,IonList,IonSegment, IonFab,IonFabButton, IonIcon,IonSegmentButton, IonLabel, IonPage, IonTitle,IonButton, IonToolbar, IonCard, IonGrid, IonRow, IonCol, IonText, IonItem } from '@ionic/react';
import './general.css';
import {useState,useEffect} from 'react';
import Recipebox from '../components/Notions';
import { home } from 'ionicons/icons';
import Popover from "../components/menu";
import Notions from '../components/Notions';
import axios from 'axios';

const Notion = () => {
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
    axios.get("https://poetic-orb-283600.ew.r.appspot.com/notion",{
      headers : {
        'auth-token' : GetCookie("jwt")
      }
    }).then(arr => {
    setResponse(arr.data)
    console.log(arr.data);
  }, err => console.log(err));}
  const Component = () =>{
    return(<div>{response.map(i => <Notions name={i.name} id={i.id} />)}</div>);
  }
    return (
        <IonPage onLoad={Function}>
        <IonHeader className="ion-no-border">
            <IonRow>
            <IonCol/>
            <IonCol size-xl="4" size="12">
            <IonItem lines="none" className="ion-margin-bottom">
            <IonText className="custom-font"><h1>Notizie e curiosità</h1></IonText>
            <IonThumbnail slot="end">
                <Popover/>
                </IonThumbnail>
            </IonItem>
            </IonCol>
            <IonCol/>
            </IonRow>
        </IonHeader>
        <IonContent >
        <IonGrid>
            <IonRow>
            <IonCol></IonCol>
            <IonCol size-xl="4" size="12" className="ion-padding">
            <Component/>
            <br/><br/><br/><br/><br/>
            </IonCol>
            <IonCol></IonCol>
            </IonRow>
        </IonGrid>
        <IonFab vertical="bottom" horizontal="center" slot="fixed" className="ion-margin-bottom">
                <IonFabButton href="/Home"><IonIcon color="light" icon={home}/></IonFabButton>
        </IonFab>

        </IonContent>
        </IonPage>
    );
};

export default Notion;
