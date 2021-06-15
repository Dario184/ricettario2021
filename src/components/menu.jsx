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
function eraseCookie(name) {
    document.cookie = name+'=; Max-Age=-99999999;';
}
function deleteall(){
    eraseCookie("jwt");
    eraseCookie("user");
    eraseCookie("immagine");
    window.location.assign("/Login");
}

const PopoverList = ({ onHide ,nome}) => (
    <IonList>
        <IonItem lines={"none"} className={"custom-font"}><strong>{nome}</strong></IonItem>
        <IonItem lines="none" href="/Notion" className={"custom-font"} button>Notizie</IonItem>
        <IonItem lines="none" className={"custom-font"} button onClick={deleteall}>Disconnetiti</IonItem>
    </IonList>
);

const Popover = (props) => {
    function GetCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i <ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
    const [present, dismiss] = useIonPopover(PopoverList, { onHide: () => dismiss(), nome: GetCookie("user")});
    return (
                <IonAvatar
                    expand="block"
                    onClick={(e) =>
                        present({
                            event: e.nativeEvent,
                        })
                    }
                >
                    <img className="avatar" src={GetCookie("immagine")}></img>
                </IonAvatar>
    );
};

export default Popover;