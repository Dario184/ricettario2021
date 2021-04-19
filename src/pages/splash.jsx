import { IonContent, IonPage, IonGrid, IonRow, IonCol, IonText, IonButton, IonItem ,IonImg, IonIcon} from '@ionic/react';
import { chevronForward } from 'ionicons/icons';
import './general.css';
const splash = () => {
    return (
        <IonPage>
          <IonContent>
          <IonGrid className="ion-padding">
            <IonRow>
              <IonCol></IonCol>
              <IonCol size-xl="4" size="12">
                <IonImg color="primary" src="./assets/happy.png" className="ion-padding-start"/>
                <br/>
                <IonItem lines="none">
                <IonText className="custom-font" color="dark"><h1 className="ion-padding-start">Registrazione avvenuta con successo ...</h1></IonText>
                </IonItem>
                <br/>
                <IonButton expand="block" href="/Login" className="ion-padding-start icon">Vai alla pagina di login &nbsp; <IonIcon icon={chevronForward}/></IonButton>
              </IonCol>
              <IonCol ></IonCol>
            </IonRow>
          </IonGrid>
          </IonContent>
        </IonPage>
      );
};

export default splash;