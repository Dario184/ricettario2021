import { IonContent, IonButton, IonLoading,IonCardTitle ,IonLabel, IonImg, IonItemGroup, IonList, IonText, IonGrid, IonCol, IonThumbnail, IonRow, IonItem, IonRouterLink, IonHeader, IonPage, IonSlides, IonSlide, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardSubtitle } from '@ionic/react';
import './general.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import CardImage from '../components/Cardimage';
const Recipe = () => {
    const [props, setProps] = useState({});
    const [loading, setShowLoading] = useState(false);
    const Function = () => {
        let titolo = window.location.href.trim().split('/').pop().replaceAll('%20',' ');
        let link = titolo.replaceAll(' ','-').replaceAll('\'','-')+'.html';
        console.log(titolo,link);
        axios.post('https://poetic-orb-283600.ew.r.appspot.com/Handle',{
            "titolo" : titolo,
            "link" : link
        }).then((response) => {
            setProps({
                link : response.data.immagine,
                title : response.data.titolo,
                ingredienti: response.data.ingredienti,
                difficoltà : response.data.difficoltà,
                preparazione : response.data.preparazione,
                cottura : response.data.cottura,
                descrizione: response.data.descrizione,
                dosi : response.data.dosi,
                procedimento: response.data.procedimento
        });
        });
        console.log(props.ingredienti);
    }
    return (
        <IonPage onLoad={Function}>
            <IonContent>
                <IonGrid>
                    <IonRow className="ion-justify-content-around">
                        <IonCol size-xl="4" size="12" className="ion-margin-none">
                            <img src={props.link || "http://www.perdersiaroma.it/wp-content/uploads/2018/03/b.jpg"} className="ion-margin-none " />
                        </IonCol>
                    </IonRow>
                    <IonRow className="ion-justify-content-around">
                        <IonCol size-xl="4" size="12" className="recipe ion-padding">
                            <IonText className="custom-font"><strong><h1>{props.title || "Sachertorte"}</h1></strong></IonText>
                            <IonText className="custom-font ion-margin-bottom">{props.descrizione || "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam minima consectetur hic atque corporis rem? Quae nostrum, quasi iusto atque eum, voluptatibus dignissimos, a neque ea rerum pariatur quia earum!"} </IonText>
                            <IonCard className="ion-margin-bottom"> 
                                <IonCardContent>
                                    <IonCardTitle className="custom-font ion-margin-bottom">Informazioni </IonCardTitle>
                                    <IonText className="custom-font"><p>- Ingredienti:</p>
                                        {props.ingredienti!=null? props.ingredienti.map(i=><li>{i}</li>) : "ciao"}
                                    </IonText>
                                    <IonText className="custom-font"><p>-Difficoltà: {props.difficoltà || "Difficile"}</p></IonText>
                                    <IonText className="custom-font"><p>-Tempo di preparazione: {props.preparazione || "30 min"}</p></IonText>
                                    <IonText  className="custom-font"><p>-Tempo di cottura: {props.cottura || "20 min"}</p></IonText>
                                    <IonText className="custom-font "><p>-Dosi: {props.dosi || "2"}</p></IonText>
                                </IonCardContent>
                            </IonCard>
                            <IonText className="custom-font"><h1>Procedimento</h1></IonText>
                            <IonText className="custom-font">{props.procedimento || "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto nihil error ullam amet accusantium sed, ut atque saepe perspiciatis similique corrupti, repudiandae reprehenderit eum cumque sit voluptatibus, ab distinctio possimus." } </IonText>
                            <IonButton className="ion-margin-vertical" expand="block" color="primary"><IonText color="light">Salva la ricetta</IonText></IonButton>
                        </IonCol>
                    </IonRow>
                    <IonLoading
                        isOpen={setShowLoading}
                        onDidDismiss={() => setShowLoading(false)}
                        message={'Attendere...'}
                        duration={5000}
                    />
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default Recipe;