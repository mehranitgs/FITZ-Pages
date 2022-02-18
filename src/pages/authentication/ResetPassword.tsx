import {
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonContent,
    IonHeader,
    IonImg,
    IonItemDivider,
    IonPage,
    IonTitle,
    IonToolbar,
    IonList,
    IonItem,
    IonLabel,
    IonInput,
    IonGrid,
    IonRow,
    IonCol,
    IonButton,
  } from "@ionic/react";
  
  const ResetPassword: React.FC = () => {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar className="ion-text-center" color="primary">
            <IonTitle>Fitz LIMS</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonCard>
            <IonCardHeader>
              <IonImg src={"/images/fitzsci.svg"} />
            </IonCardHeader>
            <IonCardContent>
              <IonItemDivider>Reset-Password</IonItemDivider>
              <IonList>
                 
                <IonItem>
                  <IonLabel position="floating" color="primary">
                    New Password
                  </IonLabel>
                  <IonInput type="password"></IonInput>
                </IonItem>
                <IonItem>
                  <IonLabel position="floating" color="primary">
                    Confirm Password
                  </IonLabel>
                  <IonInput type="password"></IonInput>
                </IonItem>
              </IonList>
  
              <IonGrid>
                <IonRow>
                  <IonCol size="12">
                    <IonButton expand="block" color="primary" routerLink="/home">
                      Update
                    </IonButton>
                  </IonCol>
                </IonRow>
              </IonGrid>
   
            </IonCardContent>
          </IonCard>
  
          <IonCard>
            <IonCardHeader className="ion-text-center" color="medium">
              <h5>Important Little Note</h5>
            </IonCardHeader>
            <IonCardContent>
              <p className="ion-padding-top">
                For your security and to protect your data, this system is
                monitored. By logging in you agree to the terms and conditions of
                use and also as part of this your IP address will be logged and
                stored to ensure the protection of your information.
              </p>
              <p className="ion-text-center">
                <small>&copy; 2022 Fitz Scientific</small>
              </p>
            </IonCardContent>
          </IonCard>
        </IonContent>
      </IonPage>
    );
  };
  
  export default ResetPassword;