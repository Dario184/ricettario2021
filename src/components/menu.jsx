import {
    IonContent,
    IonHeader,
    IonImg,
    useIonPopover,
    IonList,
    IonListHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonCardContent,
    IonAvatar,
    IonItem,
    IonIcon,
    IonLabel,
    IonButton,
} from '@ionic/react';
import './CardImage.css';

const PopoverList = ({ onHide ,nome}) => (
    <IonList>
        <IonItem lines={"none"} className={"custom-font"}><strong>{nome}</strong></IonItem>
        <IonItem lines="none" className={"custom-font"} button>Il tuo profilo</IonItem>
        <IonItem lines="none" className={"custom-font"} button>Notizie</IonItem>
        <IonItem lines="none" className={"custom-font"} button>Disconnetiti</IonItem>
    </IonList>
);

const Popover = (props) => {
    const [present, dismiss] = useIonPopover(PopoverList, { onHide: () => dismiss(), nome: "Giampertolda gennini"});
    return (
                <IonAvatar
                    expand="block"
                    onClick={(e) =>
                        present({
                            event: e.nativeEvent,
                        })
                    }
                >
                    <img className="avatar" src="https://images.pexels.com/photos/3841338/pexels-photo-3841338.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"></img>
                </IonAvatar>
    );
};

export default Popover;