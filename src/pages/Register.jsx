import { Redirect, Route } from 'react-router-dom';
import { IonContent, IonHeader,IonToggle ,IonPage, IonTitle,IonItemGroup, IonText, IonToast,IonInput, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton, IonToolbar, IonGrid, IonCol, IonRow,IonImg } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, exit, logoApple, logoFacebook, logoGoogle, square, triangle } from 'ionicons/icons';
import '@ionic/react/css/core.css';
import {useState,useEffect} from 'react';
import './general.css';
import axios from 'axios';

const Register = () =>{
    const [message, setmessage] = useState('');
    const [nome,setnome] = useState('');
    const [nickname, setnick] = useState('');
    useEffect(() =>{
      if (nickname == '') return;
      setTimeout(() =>{
        axios.get('https://poetic-orb-283600.ew.r.appspot.com/inspect/controlnick/'+nickname).then(response => {
          setenickname(false);
        },error=>setenickname(true));
      },500);
    });
    const [email, setemail] = useState('');
    useEffect(() =>{
      if (email == '') return;
      setTimeout(() =>{
        axios.get('https://poetic-orb-283600.ew.r.appspot.com/inspect/controlmail/'+email).then(response => {
          seteemail(false);
        },error=>seteemail(true));
      },500);
    });
    const [password, setpassword] = useState('');
    const [comferma, setcomferma] = useState('');
    useEffect(() =>{
      setTimeout(() => 
      {
        if (password!=comferma) 
        setecomferma(true);
        else setecomferma(false);
      }, 1000);      
    });
    const [showToast,setShowToast] = useState(false);
    const [enome, setenome] = useState(false);
    const [enickname, setenickname] = useState(false);
    const [eemail, seteemail] = useState(false);
    const [epassword,setepassword] = useState(false);
    const [ecomferma,setecomferma] = useState(false);
    const [check, setcheck] = useState(false);
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
      if(!check){
        setmessage('Per poter procedere con la registrazione è necessario acettare l\'informativa sulla privacy');
        setShowToast(true);
      }
      if (!enome && !enickname && !eemail && !epassword && !ecomferma && check){
        console.log(password);
        let json = {
          'nome' : nome,
          'nickname' : nickname,
          'mail' : email,
          'password' : password
        };
        axios.post('https://poetic-orb-283600.ew.r.appspot.com/insert/users', json).then(() => {
          setmessage('Registrazione avvenuta con successo!!');
          setShowToast(true);
        });
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
                        <IonImg id="immagine" src="./assets/logo.svg" alt="immagine non caricata"/>
                      </IonItem> 
                    <IonItemGroup>
                      <IonItem lines="none" color="light" className="input">
                        <IonInput type="text" placeholder="Nome" className="custom-font" onIonChange={e => {setnome(e.detail.value)}}></IonInput>
                      </IonItem> 
                      {enome && <IonText color="danger" className="custom-font"><small>Nome non valido</small></IonText>}
                      <br/>
                      <IonItem lines="none" color="light" className="input">
                        <IonInput type="text" placeholder="Nickname" className="custom-font" onIonChange={e => setnick(e.detail.value)}></IonInput>
                      </IonItem >
                      {enickname && <IonText color="danger" className="custom-font"><small>Nickname non valido</small></IonText>}
                      <br/>
                      <IonItem lines="none" color="light" className="input">
                        <IonInput type="email" placeholder="Email" className="custom-font" onIonChange={e => setemail(e.detail.value)}></IonInput>
                      </IonItem>
                      {eemail && <IonText color="danger" className="custom-font"><small>Email non valida</small></IonText>}
                      <br/>
                      <IonItem lines="none" color="light" className="input">
                        <IonInput type="password" placeholder="Password" className="custom-font" onIonChange={e => setpassword(e.detail.value)}></IonInput>
                      </IonItem>
                      {epassword && <IonText color="danger" className="custom-font"><small>Password non valida</small></IonText>}
                      <br/>
                      <IonItem lines="none" color="light" className="input">
                        <IonInput type="password" className="custom-font" placeholder="Comferma password" onIonChange={e => setcomferma(e.detail.value)}></IonInput>
                      </IonItem>
                      {ecomferma && <IonText color="danger" className="custom-font"><small>Le due password non corrispondono</small></IonText>}
                      <br/>
                      <IonItem lines="none">
                      <IonText className="custom-font"><small>Accettare l'informativa sulla privacy policy? <ion-router-link href="https://www.privacypolicies.com/live/77745602-e779-4b1b-b6f9-2cdc455c7583">Termini e condizioni</ion-router-link></small></IonText><IonToggle onIonChange={e => setcheck(e.detail.checked)} slot="end"/>
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