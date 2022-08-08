import React from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/Dialogsitem";
import Massage from "./massage/Massege";

export const Dialogs = (props) => {
  let dialogsElements = props.state.dialogsData.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let massagesElement = props.state.massages.map((m) => (
    <Massage massage={m.massage} />
  ));

  let newMassegeElement = React.createRef();

  let addMassage = () => {
    let text = newMassegeElement.current.value;
    alert(text);
  };

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>{dialogsElements}</div>
      <div className={styles.massages}>
        {massagesElement}
        <div className={styles.sendMes}>
          <textarea ref={newMassegeElement}></textarea>
          <button className={styles.button} onClick={addMassage}>
            send mess
          </button>
        </div>
      </div>
    </div>
  );
};
