import {
  IonContent,
  IonFab,
  IonFabButton,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { addOutline } from "ionicons/icons";
import { TodoList } from "../components/Todo/List";
import { TodoFOrm } from "../components/Todo/Form";
import { useState } from "react";

const Home: React.FC = () => {
  const [openForm, setOpenForm] = useState(false);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Todo App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Todo App</IonTitle>
          </IonToolbar>
        </IonHeader>
        <TodoList />
        <IonFab
          slot="fixed"
          vertical="bottom"
          horizontal="center"
          className="ion-margin-bottom"
        >
          <IonFabButton onClick={() => setOpenForm(true)}>
            <IonIcon icon={addOutline}></IonIcon>
          </IonFabButton>
        </IonFab>
      </IonContent>
      <TodoFOrm isOpen={openForm} onDidDismiss={() => setOpenForm(false)} />
    </IonPage>
  );
};

export default Home;
