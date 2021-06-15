import { IonContent,IonThumbnail,IonAvatar, IonHeader,IonList,IonSegment, IonFab,IonFabButton, IonIcon,IonSegmentButton, IonLabel, IonPage, IonTitle,IonButton, IonToolbar, IonCard, IonGrid, IonRow, IonCol, IonText, IonItem } from '@ionic/react';
import './general.css';
import {useState,useEffect} from 'react';
import Recipebox from '../components/Recipebox';
import List from '../components/list';
import { add } from 'ionicons/icons';
import Popover from "../components/menu";
import axios from 'axios';

const Tab2 = () => {
  const [segment, setsegment] = useState('');
  const [response, setResponse] = useState([]);
  const [response1, setResponse1] = useState([]);
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
    axios.get("https://poetic-orb-283600.ew.r.appspot.com/recipe",{
      headers : {
        'auth-token' : GetCookie("jwt")
      }
    }).then(arr => {
    setResponse(arr.data);
  }, err => console.log(err));
  if (response1 != '') return;
    axios.get("https://poetic-orb-283600.ew.r.appspot.com/list",{
      headers : {
        'auth-token' : GetCookie("jwt")
      }
    }).then(arr => {
    setResponse1(arr.data);
  }, err => console.log(err));

}
  const Add = () => {
    axios.post("https://poetic-orb-283600.ew.r.appspot.com/list",{},{
      headers : {
        'auth-token' : GetCookie("jwt")
      }
    }).then(arr => {
    console.log(arr.data);
    window.location.assign('/list');
  }, err => console.log(err));
  axios.get("https://poetic-orb-283600.ew.r.appspot.com/list",{
      headers : {
        'auth-token' : GetCookie("jwt")
      }
    }).then(arr => {
    setResponse1(arr.data);
  }, err => console.log(err));
  
  }
  const Component = () =>{
    return(<div>{response.map(i => <Recipebox name={i.titolo} link={i.immagine} />)}</div>);
  }
  const Component1 = () =>{
    return(<div>{response1.map(i => <List name={i.nome} id={i.id} />)}</div>);
  }
  const Page = () => {
      //gestione del segmento che limita le ricette dalle liste
    if(segment == 'ricette') {
      return(<div>
          <IonList>
              <Component/>
          </IonList>
      </div>);
    }else{
      return(<div>
          <IonList>
            <Component1/>
          </IonList>
      </div>);
    }
  }
  return (
    <IonPage onLoad={Function}>
      <IonHeader className="ion-no-border">
        <IonRow>
        <IonCol/>
          <IonCol size-xl="4" size="12">
          <IonItem lines="none" className="ion-margin-bottom">
          <IonText className="custom-font"><h1>I tuoi salvati</h1></IonText>
          <IonThumbnail slot="end">
              <Popover/>
            </IonThumbnail>
          </IonItem>
          <IonSegment onIonChange={e => setsegment(e.detail.value)}>
          <IonSegmentButton value="liste">
            <IonText className="custom-font">Liste</IonText>
          </IonSegmentButton>
          <IonSegmentButton value="ricette">
            <IonText className="custom-font">Ricette</IonText>
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
      {segment != 'ricette'? <IonFab vertical="bottom" horizontal="center" className="ion-margin-bottom" slot="fixed">
            <IonFabButton><IonIcon color="light" icon={add} onClick={Add}/></IonFabButton>
      </IonFab>:<div></div>}
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
