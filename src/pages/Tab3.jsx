import { IonContent, IonHeader,IonLoading, IonList,IonItemGroup,IonPage, IonIcon, IonSearchbar, IonTitle,IonButton, IonToolbar, IonCard, IonGrid, IonRow, IonCol, IonText, IonItem } from '@ionic/react';
import './general.css';
import axios from 'axios';

import {useState,useEffect} from 'react';
import Recipebox from '../components/Recipebox';
import { chevronForward } from 'ionicons/icons';


const Tab3 = () => {
  const [respo,setresponse] = useState('');
  const [showLoading, setShowLoading] = useState(false);
  const [search, setsearch] = useState('');
  let keyhandle = (e) => {
    if(e.key=='Enter'){
      if(search == '') return;
      console.log(search);
      setShowLoading(true);
      axios.get("https://poetic-orb-283600.ew.r.appspot.com/search/"+search).then(response => {
        setShowLoading(false);
        setresponse(response.data);
        console.log(response.data);
      }, err => {
        setShowLoading(false);
        console.log(err)
      });
    }
  }
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
        <IonItem lines="none" className="custom-font">Primi piatti<IonIcon slot="end" icon={chevronForward}/></IonItem>
        </IonList>
      </IonList>
      );
    }
  }
  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonTitle className="custom-font" color="primary"><strong>Ricerca ricette</strong></IonTitle>
        </IonToolbar>
        <IonRow>
        <IonCol/>
          <IonCol size-xl="4" size="12">
              <IonSearchbar color="light" placeholder="Ricerca" className="input custom-font" onKeyPress={e => keyhandle(e)} onIonChange={e => setsearch(e.detail.value)}></IonSearchbar>
          </IonCol>
          <IonCol/>
        </IonRow>
      </IonHeader>
      <IonContent fullscreen>
      <IonGrid>
        <IonRow>
          <IonCol></IonCol>
          <IonCol size-xl="4" size="12" className="ion-padding-end">
            <Navigator/>
          </IonCol>
          <IonCol></IonCol>
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