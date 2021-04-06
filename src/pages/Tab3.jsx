import { IonContent, IonHeader,IonList,IonItemGroup,IonPage, IonIcon, IonSearchbar, IonTitle,IonButton, IonToolbar, IonCard, IonGrid, IonRow, IonCol, IonText, IonItem } from '@ionic/react';
import './general.css';

import {useState,useEffect} from 'react';
import Recipebox from '../components/Recipebox';
import { chevronForward } from 'ionicons/icons';


const Tab3 = () => {
  const [search, setsearch] = useState('');
  let Navigator = () => {
    if(search.length==0){
    return(
      <div>
        <IonItem lines="none">
        <IonText className="custom-font"><h4>Categorie ricette</h4></IonText>
        </IonItem>
        <IonList>
        <IonItem lines="none" className="custom-font">Primi piatti<IonIcon slot="end" icon={chevronForward}/></IonItem>
        </IonList>
      </div>);
    }else{
      return(<div><Recipebox/></div>);
    }
  }
  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonTitle className="custom-font" color="primary"><strong>Le mie liste</strong></IonTitle>
        </IonToolbar>
        <IonRow>
        <IonCol/>
          <IonCol size-xl="4" size="12">
              <IonSearchbar color="light" placeholder="Ricerca" className="input custom-font" onIonChange={e => setsearch(e.detail.value)}></IonSearchbar>
              <IonText className="custom-font ion-margin-start" color="primary"><small>Parametri di ricerca avanzata</small></IonText>
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
      </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
