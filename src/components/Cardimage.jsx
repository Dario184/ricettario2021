import { IonContent, IonHeader,IonImg, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton } from '@ionic/react';
import './CardImage.css';

const CardImage = (props) => {
    return(
        <IonCard >
            <img src="https://www.giallozafferano.it/images/232-23210/Sacher-senza-glutine_780x520_wm_sp.jpg" />
            <IonCardContent>
                <IonCardSubtitle className="custom-font">Secondi piatti</IonCardSubtitle>
                <IonCardTitle className="custom-font">Pollo alle mandorle</IonCardTitle>
            </IonCardContent>
        </IonCard>
    );
}

export default CardImage;