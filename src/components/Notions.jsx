import { IonContent, IonHeader,IonList,IonText,IonModal,IonImg,IonThumbnail, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton } from '@ionic/react';
import './CardImage.css';
import {useState,useEffect} from 'react';
import axios from 'axios';

const Notions = (props) => {
    const [showModal, setShowModal] = useState(false);
    const [message,setmessage] = useState('');
    const funzione = () => {
        console.log(props.id);
        axios.get("https://poetic-orb-283600.ew.r.appspot.com/notion/"+props.id).then((response) =>{
            setmessage(response.data);
            setShowModal(true);
            console.log(response.data);
        }, err => console.log(err));
    };
    return(
        <IonCard >
            <IonCardContent>
                <IonItem onClick={funzione} lines="none">
                    <IonCardTitle className="custom-font"><strong>{props.name || "Inno al pomodoro"}</strong></IonCardTitle>
                </IonItem>
            </IonCardContent>
            <IonModal
            isOpen={showModal}
          onDidDismiss={() => setShowModal(false)}>
              <IonContent>
                <IonList>
                      <IonItem>
                        <IonText color="dark"><strong>{props.name}</strong></IonText>
                      <IonText color="tertiary" slot="end" className="custom-font ion-margin-start" onClick={() => setShowModal(false)}>Chiudi</IonText>
                      </IonItem>
                  {message != "" ? message.map(i =><IonItem lines="none"><IonText className="custom-font ion-margin-start">{i}</IonText></IonItem>): ""}
                  </IonList>
              </IonContent>
        </IonModal>
        </IonCard>
    );
}

export default Notions;