import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonList,
    IonItem,
    IonMenu,
    IonIcon,
    IonRouterLink,
    IonMenuButton,
  } from "@ionic/react";
  
  import {
    homeOutline,
    flaskOutline,
    mapOutline,
    logOutOutline,
    personOutline
  } from "ionicons/icons";

const EditProfile = () => {
  return (
    <IonPage>
    <IonMenu side="start" menuId="first" content-id="main-content-home">
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Main Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem>
            <IonIcon color="success" icon={homeOutline} slot="start" />
            <IonRouterLink routerLink="/home" color="dark">
              Home
            </IonRouterLink>
          </IonItem>
          <IonItem>
            <IonIcon color="success" icon={mapOutline} slot="start" />
            <IonRouterLink routerLink="/set-up-locations" color="dark">
              Setup Locations
            </IonRouterLink>
          </IonItem>
          <IonItem>
            <IonIcon color="success" icon={flaskOutline} slot="start" />
            <IonRouterLink routerLink="/setup-test-types" color="dark">
              Setup Test Types
            </IonRouterLink>
          </IonItem>
          <IonItem>
            <IonIcon color="success" icon={personOutline} slot="start" />
            <IonRouterLink routerLink="/profile" color="dark">
              Profile
            </IonRouterLink>
          </IonItem>
          <IonItem>
            <IonIcon color="success" icon={logOutOutline} slot="start" />
            <IonRouterLink routerLink="/login" color="dark">
              Logout
            </IonRouterLink>
          </IonItem>
        </IonList>
      </IonContent>
    </IonMenu>
    <IonHeader>
      <IonToolbar color="primary">
        <IonMenuButton slot="end"></IonMenuButton>
        <IonTitle className="ion-text-center">Fitz LIMS</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent id="main-content-home">
        <div
        style={{
            width: "100%", 
            height: "100vh", 
            display: "flex", 
            justifyContent: "center", 
            alignItems: "center",
            flexDirection: "column"}}
        ><form style={{display: "flex",  flexDirection: "column", width: "400px",  borderRadius: "5px",  justifyContent: "center", alignItems: "center",  height: "400px", background: "#1e81b0"}}>
        
          <input type="text" placeholder="Enter Your Name" style={{  width: "70%", outline: "none", padding: "10px",  borderRadius: "5px",}}/>
        
        
          <input type="text" placeholder="Enter Your Email" style={{marginTop: "20px", width: "70%", outline: "none", padding: "10px",  borderRadius: "5px",}}/>
       
        
         
        <button style={{marginTop: "20px", padding: "11px", width: "70%",  borderRadius: "5px", fontWeight: "bolder" }}>Edit Profile</button>
        
      </form></div>
    </IonContent>
  </IonPage>
  )
}

export default EditProfile