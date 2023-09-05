import { IonAlert } from "@ionic/react";

type TodoFormTypes = {
  isOpen: boolean;
  isEdit?: boolean;
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
          placeholder: "Title",
        },
        {
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
        },
      ]}
    ></IonAlert>
  );
};
