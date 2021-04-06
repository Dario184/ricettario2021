import { IonContent, IonHeader,IonImg,IonThumbnail, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton } from '@ionic/react';
import './CardImage.css';

const Recipebox = (props) => {
    return(
        <IonCard >
            <IonCardContent>
                <IonItem lines="none">
                    <IonThumbnail slot="start">
                        <img src="https://www.giallozafferano.it/images/232-23210/Sacher-senza-glutine_780x520_wm_sp.jpg" />
                    </IonThumbnail>
                    <IonCardTitle className="custom-font">Pollo alle mandorle<IonCardSubtitle>Secondi piatti</IonCardSubtitle></IonCardTitle>
                </IonItem>
            </IonCardContent>
        </IonCard>
    );
}

export default Recipebox;