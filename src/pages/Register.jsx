import { Redirect, Route } from 'react-router-dom';
import { IonContent, IonHeader,IonToggle ,IonPage, IonTitle,IonItemGroup, IonText, IonToast,IonInput, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton, IonToolbar, IonGrid, IonCol, IonRow,IonImg } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, logoApple, logoFacebook, logoGoogle, square, triangle } from 'ionicons/icons';
import '@ionic/react/css/core.css';
import {useState,useEffect} from 'react';
import './general.css';



const Register = () =>{
    const [message, setmessage] = useState('');
    const [nome,setnome] = useState('');
    const [nickname, setnick] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [comferma, setcomferma] = useState('');
    const [showToast,setShowToast] = useState(false);
    const [enome, setenome] = useState(false);
    const [enickname, setenickname] = useState(false);
    const [eemail, seteemail] = useState(false);
    const [epassword,setepassword] = useState(false);
    const [ecomferma,setecomferma] = useState(false);
    const register = () =>{
      setenome(false);
      setenickname(false);
      seteemail(false);
      setepassword(false);
      setecomferma(false);

      if(!nome){
        setenome(true);
      }
      if(!nickname){
        setenickname(true);
      }
      if(!email){
        seteemail(true);
      }
      if(!password){
        setepassword(true);
      }
      if(!comferma){
        setecomferma(true);
      }
    }
    return(
        <IonPage>
          <IonHeader className="ion-no-border">
            <IonToolbar>
              <IonTitle className="ion-text-center custom-font " color="primary"><strong>Registrazione</strong></IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <IonGrid>
              <IonRow className="ion-justify-content-center">
                <IonCol/>
                <IonCol size-lg="4" size="10">
                      <IonItem lines="none">
                        <IonImg id="immagine" src="./assets/tmp.svg" alt="immagine non caricata"/>
                      </IonItem> 
                    <IonItemGroup>
                      <IonItem lines="none" color="light" className="input">
                        <IonInput type="text" placeholder="Nome" className="custom-font" onIonChange={e => {setnome(e.detail.value)}}></IonInput>
                      </IonItem> 
                      {enome && <IonText color="danger" className="custom-font"><small>Nome non inserito</small></IonText>}
                      <br/>
                      <IonItem lines="none" color="light" className="input">
                        <IonInput type="text" placeholder="Nickname" className="custom-font" onIonChange={e => setnick(e.detail.value)}></IonInput>
                      </IonItem >
                      {enickname && <IonText color="danger" className="custom-font"><small>Nickname non inserito o già esistente</small></IonText>}
                      <br/>
                      <IonItem lines="none" color="light" className="input">
                        <IonInput type="email" placeholder="Email" className="custom-font" onIonChange={e => setemail(e.detail.value)}></IonInput>
                      </IonItem>
                      {eemail && <IonText color="danger" className="custom-font"><small>Email non inserita o già esistente</small></IonText>}
                      <br/>
                      <IonItem lines="none" color="light" className="input">
                        <IonInput type="password" placeholder="Password" className="custom-font" onIonChange={e => setpassword(e.detail.value)}></IonInput>
                      </IonItem>
                      {epassword && <IonText color="danger" className="custom-font"><small>Password non inserita</small></IonText>}
                      <br/>
                      <IonItem lines="none" color="light" className="input">
                        <IonInput type="password" className="custom-font" placeholder="Comferma password" onIonChange={e => setcomferma(e.detail.value)}></IonInput>
                      </IonItem>
                      {ecomferma && <IonText color="danger" className="custom-font"><small>Le due password non corrispondono</small></IonText>}
                      <br/>
                      <IonItem lines="none">
                      <IonText className="custom-font"><small>Accettare l'informativa sulla privacy policy? <ion-router-link href="https://www.privacypolicies.com/live/77745602-e779-4b1b-b6f9-2cdc455c7583">Termini e condizioni</ion-router-link></small></IonText><IonToggle slot="end"/>
                      </IonItem>
                    </IonItemGroup>
                    <br/>
                    <IonButton expand="block" className="custom-font" color="primary" fill="solid" onClick={register}><IonText color="light">Registrati</IonText></IonButton>
                    <br/>
                    <IonText className="ion-text-center custom-font" color="medium"><small>Già registrato? <ion-router-link href="/Login">Accedi</ion-router-link></small></IonText>
                    <IonToast
                  isOpen={showToast}
                  onDidDismiss={() => setShowToast(false)}
                  message={message}
                  duration={400}
                  />
                </IonCol>
                <IonCol/>
              </IonRow>
            </IonGrid>
          </IonContent>
        </IonPage>
    );
  };
  
  export default Register;