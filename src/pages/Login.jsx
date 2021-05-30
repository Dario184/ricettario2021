import { Redirect, Route } from 'react-router-dom';
import { IonContent,IonRadio, IonHeader,IonLoading, IonPage,IonItemGroup, IonTitle,IonToast,  IonInput, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton, IonToolbar, IonGrid, IonCol, IonRow,IonImg, IonText } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, logoApple, logoFacebook, logoGoogle, square, triangle } from 'ionicons/icons';
import '@ionic/react/css/core.css';
import './general.css';
import {useState,useEffect} from 'react';
import axios from 'axios';


const Access = () =>{
  const [message, setmessage] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showToast,setShowToast] = useState(false);
  const [eemail, seteemail] = useState(false);
  const [epassword, setepassword] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const login = () =>{
    seteemail(false);
    setepassword(false);
    if(!email){
      seteemail(true);
    }
    if(!password){
      setepassword(true);
    }
    if(!eemail && !epassword){
      let json = {
        'mail': email,
        'password' : password
      }
      setShowLoading(true);
      axios.post('https://poetic-orb-283600.ew.r.appspot.com/login',json).then(response => {
        if(response.data == 'conf'){
          setShowLoading(false);
          setmessage('Devi usare il link di comferma inviato via mail');
          setShowToast(true);
        }else{
          setShowLoading(false);
          document.cookie = "jwt=" + response.data.token;
          document.cookie = "user=" + response.data.user;
          document.cookie = "immagine=" + response.data.immagine;
          console.log('autenticato');
          window.location.assign('/Home');
        }
      }, () => {
        setShowLoading(false);
        setmessage('Mail o password errati');
        setShowToast(true);
      });
    }
  }
  return(
      <IonPage>
        <IonHeader className="ion-no-border">
          <ion-toolbar>
            <IonTitle className="ion-text-center custom-font " color="primary"><strong>Accesso</strong></IonTitle>
          </ion-toolbar>
        </IonHeader>
        <IonContent>
          <ion-grid>
            <ion-row className="ion-justify-content-center">
              <IonCol/>
              <IonCol size-lg="4" size="10">
                  <IonItem lines="none">
                      <IonImg src="./assets/logo.svg" alt="immagine non caricata"/>
                    </IonItem>
                  <IonItemGroup>
                    <IonItem className="input" color="light" lines="none">
                      <IonInput type="email" value={email} placeholder="Email" className="custom-font" spellCheck={false} autocapitalize="off" onIonChange={e => setEmail(e.detail.value)}
                required></IonInput>
                    </IonItem>
                    {eemail && <IonText color="danger" className="custom-font"><small>Email non inserita</small></IonText>}
                    <br/>
                    <IonItem className="input" color="light" lines="none">
                      <IonInput type="password" className="custom-font" placeholder="Password" value={password} onIonChange={e => setPassword(e.detail.value)}
                required></IonInput>
                    </IonItem>
                    {epassword && <IonText color="danger" className="custom-font"><small>Password non inserita</small></IonText>}
                  </IonItemGroup>
                  <br/>
                  <IonButton expand="block" className="custom-font" color="primary" onClick={login}><IonText color="light">Accedi</IonText></IonButton>
                  <br/>
                  <IonText color="dark" className="custom-font"><small>Non ancora iscritto? <ion-router-link href="/Register">Iscriviti</ion-router-link></small></IonText>
                  <br/>
                  <IonToast
                  isOpen={showToast}
                  onDidDismiss={() => setShowToast(false)}
                  message={message}
                  duration={400}
                  />
                  <IonLoading
                    isOpen={showLoading}
                    onDidDismiss={() => setShowLoading(false)}
                    message={'Attendere...'}
                    duration={5000}
                  />
              </IonCol>
              <IonCol/>
            </ion-row>
          </ion-grid>
        </IonContent>
      </IonPage>
  );
};

export default Access;