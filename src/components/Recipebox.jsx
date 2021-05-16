import { IonContent, IonHeader,IonImg,IonThumbnail, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton } from '@ionic/react';
import './CardImage.css';

const Recipebox = (props) => {
    const Visualize = () => {
        window.location.assign("/Recipe/"+props.name);
    }
    return(
        <IonCard onClick={Visualize}>
            <IonCardContent>
                <IonItem lines="none">
                    <IonThumbnail slot="start">
                        <img src={props.link || "https://www.giallozafferano.it/images/232-23210/Sacher-senza-glutine_780x520_wm_sp.jpg" }/>
                    </IonThumbnail>
                    <IonCardTitle className="custom-font">{props.name || "Pollo alle mandorle"}<IonCardSubtitle>{props.category || ""}</IonCardSubtitle></IonCardTitle>
                </IonItem>
            </IonCardContent>
        </IonCard>
    );
}

export default Recipebox;