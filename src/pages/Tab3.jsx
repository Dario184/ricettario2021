import { IonContent, IonThumbnail,IonAvatar,IonHeader,IonLoading, IonList,IonItemGroup,IonPage, IonIcon, IonSearchbar, IonTitle,IonButton, IonToolbar, IonCard, IonGrid, IonRow, IonCol, IonText, IonItem } from '@ionic/react';
import './general.css';
import axios from 'axios';
import Popover from "../components/menu";

import {useState,useEffect} from 'react';
import Recipebox from '../components/Recipebox';
import { chevronForward } from 'ionicons/icons';


const Tab3 = () => {
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
  const [respo,setresponse] = useState('');
  const [showLoading, setShowLoading] = useState(false);
  const [search, setsearch] = useState('');
  // invio delle informazioni e ricerca delle ricette adatte all'utente solo con il tasto invio
  let keyhandle = (e) => {
    if(e.key=='Enter'){
      if(search == '') return;
      console.log(search);
      setShowLoading(true);
      axios.get("https://poetic-orb-283600.ew.r.appspot.com/search/"+search,{
        headers : {
          'auth-token' : GetCookie("jwt")
        }
      }).then(response => {
        setShowLoading(false);
        setresponse(response.data);
        console.log(response.data);
      }, err => {
        setShowLoading(false);
        console.log(err)
      });
    }
  }
  //qui vengono mostrate le ricette se l'utente ha premuto almeno una volta su invio
  let Navigator = () => {
    if(respo!=''){
    return(
      <IonList>{respo.map(e => <Recipebox link={e.immagine} name={e.titolo} category=""/>)}</IonList>
    );
    }else{
      return(
      <IonList>
        <IonItem lines="none">
        <IonText className="custom-font"><h4>Categorie ricette</h4></IonText>
        </IonItem>
        <IonList>
        <IonItem lines="none" className="custom-font">Primi piatti</IonItem>
        <Recipebox link="https://www.giallozafferano.it/images/229-22941/Lasagne-alla-Bolognese_450x300.jpg" name="Lasagne alla Bolognese" category=""/>
        <Recipebox link="https://www.giallozafferano.it/images/174-17481/Risotto-allo-Zafferano_450x300.jpg" name="Risotto allo Zafferano" category=""/>
        <Recipebox link="https://www.giallozafferano.it/images/230-23062/Ravioli-cinesi-al-vapore_450x300.jpg" name="Ravioli cinesi al vapore" category=""/>
        <IonItem lines="none" className="custom-font">Secondi piatti</IonItem>
        <Recipebox link="https://www.giallozafferano.it/images/174-17464/Parmigiana-di-melanzane_450x300.jpg" name="Parmigiana di melanzane" category=""/>
        <Recipebox link="https://www.giallozafferano.it/images/166-16604/Polpette-al-sugo_450x300.jpg" name="Polpette al sugo" category=""/>
        <IonItem lines="none" className="custom-font">Dolci</IonItem>
        <Recipebox link="https://www.giallozafferano.it/images/207-20759/Macarons_450x300.jpg" name="Macarons" category=""/>
        <Recipebox link="https://www.giallozafferano.it/images/179-17923/Sacher-torte_450x300.jpg" name="Sachertorte" category=""/>
        </IonList>
      </IonList>
      );
    }
  }
  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonRow>
        <IonCol/>
          <IonCol size-xl="4" size="12">
              <IonItem lines="none">
                <IonText className="custom-font"><h1>Ricerca ricette</h1></IonText>
                <IonThumbnail slot="end">
                <Popover/>
            </IonThumbnail>
              </IonItem>
              <IonSearchbar color="light" placeholder="Ricerca" className="input custom-font" onKeyPress={e => keyhandle(e)} onIonChange={e => setsearch(e.detail.value)}></IonSearchbar>
          </IonCol>
          <IonCol/>
        </IonRow>
      </IonHeader>
      <IonContent>
      <IonGrid>
        <IonRow className="ion-justify-content-around">
          <IonCol size-xl="4" size="12">
            <Navigator/>
          </IonCol>
        </IonRow>
        <IonLoading
            isOpen={showLoading}
            onDidDismiss={() => setShowLoading(false)}
            message={'Attendere...'}
            duration={5000}
          />
      </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
