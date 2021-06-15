import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonPage, IonContent, IonText, IonImg, IonItem,IonCol,IonRow,IonGrid , IonButton} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Access from './pages/Login';
import Register from './pages/Register'
import Home from './pages/Home';
import Splash from './pages/splash';
import Recipe from './pages/Recipe';
import Notion from './pages/Notion';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

// schema del routing della applicazione
const App = () => {
    const Click = async() => {
      window.location.reload();
    }
    if (navigator.onLine)
      return (
          <IonApp>
            <IonReactRouter>
              <IonRouterOutlet>
                <Route exact path="/login">
                  <Access />
                </Route>
                <Route exact path="/">
                  <Redirect to="/login" />
                </Route>
                <Route exact path="/Register">
                  <Register/>
                </Route>
                <Route exact path="/Home">
                  <Home/>
                </Route>
                <Route exact path="/Home/tab1">
                  <Redirect to="/Home"/>
                </Route>
                <Route exact path="/Home/tab2">
                  <Redirect to="/Home"/>
                </Route>
                <Route exact path="/Home/tab3">
                  <Redirect to="/Home"/>
                </Route>
                <Route exact path="/Splash">
                  <Splash/>
                </Route>
                <Route exact path="/Recipe/:recipe">
                  <Recipe/>
                </Route>
                <Route exact path="/Notion">
                  <Notion/>
                </Route>
              </IonRouterOutlet>
            </IonReactRouter>
          </IonApp>
      );
    else {
      window.setTimeout(window.location.reload(),3000);
      return (
          <IonPage>
            <IonContent>
              <IonGrid className="ion-padding">
                <IonRow>
                  <IonCol></IonCol>
                  <IonCol size-xl="4" size="12">
                    <IonImg color="primary" src="./assets/happy.png" className="ion-padding-start"/>
                    <br/>
                    <IonItem lines="none">
                      <IonText className="custom-font" color="dark"><h1 className="ion-padding-start">Nessuna
                        connessione...</h1></IonText>
                      <br/>
                      <IonButton onClick={Click} color={"primary"}>Ricarica ...</IonButton>
                    </IonItem>
                  </IonCol>
                  <IonCol></IonCol>
                </IonRow>
              </IonGrid>
            </IonContent>
          </IonPage>
      );
    }
}

export default App;
