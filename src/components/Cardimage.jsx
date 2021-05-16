import { IonContent, IonHeader,IonImg, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton } from '@ionic/react';
import './CardImage.css';

const CardImage = (props) => {
    const Visualize = () => {
        window.location.assign("/Recipe/"+props.nome);
    }
    return(
        <IonCard onclick={Visualize}>
            <img src={props.link || "https://www.giallozafferano.it/images/232-23210/Sacher-senza-glutine_780x520_wm_sp.jpg"} />
            <IonCardContent>
                <IonCardSubtitle className="custom-font">{props.categoria || ""}</IonCardSubtitle>
                <IonCardTitle md="md" className="custom-font">{props.nome || "Pollo alle mandorle"}</IonCardTitle>
            </IonCardContent>
        </IonCard>
    );
}

export default CardImage;