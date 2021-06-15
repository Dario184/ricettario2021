import { IonContent,IonTextarea, IonHeader,IonInput,IonList,IonText,IonModal,IonImg,IonThumbnail, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton } from '@ionic/react';
import './CardImage.css';
import {useState,useEffect} from 'react';
import axios from 'axios';

const List = (props) => {
    const [text, setText] = useState('');
    const [title,setTitle] = useState('');
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
        <IonCard>
            <IonCardContent>
                <IonItem onClick={e => setShowModal(true)} lines="none">
                    <IonCardTitle className="custom-font"><strong>{props.name || "Mia lista"}</strong></IonCardTitle>
                </IonItem>
            </IonCardContent>
            <IonModal
            isOpen={showModal}
          onDidDismiss={() => setShowModal(false)}>
              <IonContent>
                      <IonItem>
                        <IonInput value={props.name || "Mia lista"} onIonInput={e => setTitle(e.detail.value)}></IonInput>
                      <IonText color="tertiary" slot="end" className="custom-font ion-margin-start" onClick={() => setShowModal(false)}>Chiudi</IonText>
                      </IonItem>
                      <IonTextarea autoGrow="true" value={text} onIonInput={e => setText(e.detail.value)}></IonTextarea>
              </IonContent>
        </IonModal>
        </IonCard>
    );
}

export default List;