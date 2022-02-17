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
    personOutline,
  } from "ionicons/icons";

  import { Link } from "react-router-dom";

const Profile = () => {
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
    <div style={{
        width: "100%", 
        height: "100vh", 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center",
        flexDirection: "column"
        }}>
        <div style={{
            background: "#1e81b0",
            width: "400px",
            display: "flex",
            justifyContent: "center", 
            alignItems: "center",
            padding: "1rem",
            color: "#fff",
            fontWeight: "bolder",
            borderRadius: "5px",
            cursor: "pointer"
        }}> <Link to="/edit-password" style={{ textDecoration: "none", color: "#fff"}}> Change Password </Link></div>
        <div style={{
            margin:"30px 0 30px 0",
            background: "#1e81b0",
            width: "400px",
            display: "flex",
            justifyContent: "center", 
            alignItems: "center",
            padding: "1rem",
            color: "#fff",
            fontWeight: "bolder",
            cursor: "pointer",
            borderRadius: "5px",
            }}><Link to="/edit-profile" style={{ textDecoration: "none", color: "#fff"}}> Edit Profile </Link></div>
        <div
        style={{
            background: "#1e81b0",
            width: "400px",
            display: "flex",
            justifyContent: "center", 
            alignItems: "center",
            padding: "1rem",
            color: "#fff",
            fontWeight: "bolder",
            borderRadius: "5px",
            cursor: "pointer"
        }}
        ><Link to="/edit-profile-picture" style={{ textDecoration: "none", color: "#fff"}}> Update Profile Picture  </Link></div>
        </div>
    </IonContent>
  </IonPage>
  )
}

export default Profile