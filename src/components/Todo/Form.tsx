import { IonAlert } from "@ionic/react";
import { type Todo } from "./List";
import { useState } from "react";

type TodoFormTypes = {
  isOpen: boolean;
  isEdit?: boolean;
  data?: Todo;
  onDidDismiss: () => void;
};

export const TodoFOrm: React.FC<TodoFormTypes> = (props) => {
  return (
    <IonAlert
      isOpen={props.isOpen}
      onDidDismiss={props.onDidDismiss}
      header="Todo Form"
      subHeader={props.isEdit ? "Edit Todo" : "Create New Todo"}
      inputs={[
        {
          name: "title",
          placeholder: "Title",
        },
        {
          name: "description",
          type: "textarea",
          placeholder: "Description",
        },
      ]}
      buttons={[
        {
          text: "Cancel",
          role: "cancel",
        },
        {
          text: "Save",
          role: "confirm",
          handler: (data) => {
            console.log(data);
          },
        },
      ]}
    ></IonAlert>
  );
};
