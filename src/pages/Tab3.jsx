import { IonContent, IonThumbnail,IonAvatar,IonHeader,IonLoading, IonList,IonItemGroup,IonPage, IonIcon, IonSearchbar, IonTitle,IonButton, IonToolbar, IonCard, IonGrid, IonRow, IonCol, IonText, IonItem } from '@ionic/react';
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
      <IonList>{respo.map(e => <Recipebox image={e.immagine} link={e.link} name={e.titolo} category=""/>)}</IonList>
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
        <IonRow>
        <IonCol/>
          <IonCol size-xl="4" size="12">
              <IonItem lines="none">
                <IonText className="custom-font"><h1>Ricerca ricette</h1></IonText>
                <IonThumbnail slot="end">
              <IonAvatar><img className="avatar" src="https://images.pexels.com/photos/3841338/pexels-photo-3841338.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"></img></IonAvatar>
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
