
import { IonTabs, IonRouterOutlet,IonTabBar,IonTabButton,IonContent,IonRadio, IonHeader, IonPage,IonItemGroup, IonTitle,IonToast,  IonInput, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton, IonToolbar, IonGrid, IonCol, IonRow,IonImg, IonText } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import { storefront, search, layers } from 'ionicons/icons';
import './Home.css';
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

import '../theme/variables.css';
import './general.css';

const Home = () => {
  return (
      // router per la scelta della pagina da visualizzare nella navbar
      <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/Home/tab1">
            <Tab1 />
          </Route>
          <Route exact path="/Home/tab2">
            <Tab2 />
          </Route>
          <Route path="/Home/tab3">
            <Tab3 />
          </Route>
          <Route exact path="/Home">
            <Redirect to="/Home/tab1" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/Home/tab1">
            <IonIcon icon={storefront}  />
            <IonLabel className="custom-font">Consigliati</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/Home/tab2">
            <IonIcon icon={layers} />
            <IonLabel className="custom-font">Salvati</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/Home/tab3">
            <IonIcon icon={search} />
            <IonLabel className="custom-font">Cerca</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  );
};

export default Home;
