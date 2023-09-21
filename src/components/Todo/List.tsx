import {
  IonActionSheet,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonGrid,
  IonRippleEffect,
  IonRow,
} from "@ionic/react";
import { pencilOutline, trashOutline } from "ionicons/icons";
import { useEffect, useState } from "react";
import axiosIntance from "../../lib/axiosInstance";

export type Todo = {
  id: string;
  title: string;
  description: string;
  createdAt: Date;
  deadline: Date;
};

export const TodoList: React.FC = () => {
  const [openActionSheet, setOpenActionSheet] = useState(false);
  const [todos, setTodos] = useState<Todo[]>([]);
  const [selectedId, setSelectedId] = useState("");

  const fetchTodos = () => {
    axiosIntance
      .get("/todos")
      .then((res) => {
        setTodos(res.data);
      })
      .catch(console.error);
  };

  const deleteTodo = (id: string) => {
    axiosIntance
      .request({
        url: `/todos/${id}`,
        method: "DELETE",
      })
      .then((res) => {
        fetchTodos();
      })
      .catch(console.error);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <IonGrid className="ion-padding">
      <IonRow>
        {todos.map((todo) => {
          return (
            <IonCol size="12" className="ion-margin-bottom">
              <IonCard
                className="ion-no-margin ion-activatable"
                onClick={() => {
                  setOpenActionSheet(true);
                  setSelectedId(todo.id);
                }}
              >
                <IonRippleEffect></IonRippleEffect>
                <IonCardHeader>
                  <IonCardTitle>{todo.title}</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>{todo.description}</IonCardContent>
              </IonCard>
            </IonCol>
          );
        })}
      </IonRow>
      <IonActionSheet
        isOpen={openActionSheet}
        header="Action"
        buttons={[
          {
            text: "Delete",
            role: "destructive",
            icon: trashOutline,
            data: {
              action: "delete",
            },
            handler: () => {
              deleteTodo(selectedId);
            },
          },
          {
            text: "Edit",
            icon: pencilOutline,
            data: {
              action: "edit",
            },
          },
          {
            text: "Cancel",
            role: "cancel",
            data: {
              action: "cancel",
            },
          },
        ]}
        onWillDismiss={() => setOpenActionSheet(false)}
      ></IonActionSheet>
    </IonGrid>
  );
};
