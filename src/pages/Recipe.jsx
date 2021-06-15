import { IonContent,IonFab,IonAlert, IonFabButton,IonIcon, IonButton, IonLoading,IonCardTitle ,IonLabel, IonImg, IonItemGroup, IonList, IonText, IonGrid, IonCol, IonThumbnail, IonRow, IonItem, IonRouterLink, IonHeader, IonPage, IonSlides, IonSlide, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardSubtitle } from '@ionic/react';
import './general.css';
import {home, file_tray} from "ionicons/icons";
import axios from 'axios';
import {close, folder} from "ionicons/icons";
import { useState, useEffect } from 'react';
import CardImage from '../components/Cardimage';
const Recipe = () => {
    const [showAlert1, setShowAlert1] = useState(false);
    const [props, setProps] = useState({});
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
    const Function = () => {
        let titolo = window.location.href.trim().split('/').pop().replaceAll('%20',' ');
        let link = titolo.replaceAll(' ','-').replaceAll('\'','-')+'.html';
        console.log(titolo,link);
        axios.post('https://poetic-orb-283600.ew.r.appspot.com/Handle',{
            "titolo" : titolo,
            "link" : link
        },{
            headers : {
                'auth-token' : GetCookie("jwt")
            }
        }).then((response) => {
            if(response.data==null || response.data=={}) window.location.assign("/Home");
            setProps({
                id : response.data._id,
                link : response.data.immagine,
                title : response.data.titolo,
                ingredienti: response.data.ingredienti,
                difficoltà : response.data.difficoltà,
                preparazione : response.data.preparazione,
                cottura : response.data.cottura,
                descrizione: response.data.descrizione.replace(/&nbsp;/g,''),
                dosi : response.data.dosi,
                procedimento: response.data.procedimento.join(' ').replace(/&nbsp;/g,'')
        }
        );
        });
    }
    const Save = () => {
    setShowAlert1(true)
    console.log(GetCookie("jwt"));
    axios.post("https://poetic-orb-283600.ew.r.appspot.com/recipe/"+props.id,{},{
        headers : {
        'auth-token' : GetCookie("jwt")
        }
    }).then(arr => {
        console.log(arr.data);
    }, err => console.log(err));
    }
    return (
        <IonPage onLoad={Function}>
            <IonContent>
                <IonGrid>
                    <IonRow className="ion-justify-content-around">
                        <IonCol size-xl="4" size="12" className="ion-margin-none">
                            <img src={props.link || "http://www.perdersiaroma.it/wp-content/uploads/2018/03/b.jpg"} className="ion-margin-none img" />
                        </IonCol>
                    </IonRow>
                    <IonRow className="ion-justify-content-around">
                        <IonCol size-xl="4" size="12" className="recipe ion-padding">
                            <IonItem lines={"none"} className={"ion-no-padding"}>
                                <IonText className="custom-font"><strong><h1>{props.title || ""}</h1></strong></IonText>
                                <IonButton expand="true" slot="end" fill="outline" className="ion-margin-top" href="/Home"><IonIcon color="primary" icon={close} slot="end"></IonIcon></IonButton>
                            </IonItem>
                            <IonText className="custom-font ion-margin-bottom">{props.descrizione || ""} </IonText>
                            <IonCard className="ion-margin-bottom"> 
                                <IonCardContent>
                                    <IonCardTitle className="custom-font ion-margin-bottom">Informazioni </IonCardTitle>
                                    <IonText className="custom-font"><p>-<strong>Ingredienti</strong>:</p>
                                        {props.ingredienti!=null? props.ingredienti.map(i=><li>{i}</li>) : ""}
                                    </IonText>
                                    <IonText className="custom-font"><p>-<strong>Difficoltà</strong>: {props.difficoltà || ""}</p></IonText>
                                    <IonText className="custom-font"><p>-<strong>Tempo di preparazione</strong>: {props.preparazione || ""}</p></IonText>
                                    <IonText  className="custom-font"><p>-<strong>Tempo di cottura</strong>: {props.cottura || ""}</p></IonText>
                                    <IonText className="custom-font "><p>-<strong>Dosi</strong>: {props.dosi || ""}</p></IonText>
                                </IonCardContent>
                            </IonCard>
                            <IonText className="custom-font ion-margin-bottom"><h1>Procedimento</h1></IonText>
                            <IonText className="custom-font">{props.procedimento || "" } </IonText>
                            <br/><br/><br/><br/><br/>
                        </IonCol>
                    </IonRow>
                </IonGrid>
                <IonFab vertical="bottom" horizontal="center" slot="fixed" className="ion-margin-bottom">
                    <IonFabButton onClick={Save} expand="full"><IonIcon color="light" icon={folder}/></IonFabButton>
                </IonFab>
                <IonAlert
                    isOpen={showAlert1}
                    onDidDismiss={() => setShowAlert1(false)}
                    cssClass='my-custom-class'
                    header={'Ricetta salvata'}
                    buttons={['OK']}
                />
            </IonContent>
        </IonPage>
    );
};

export default Recipe;