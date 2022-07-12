import { react, useContext } from "react";
import { Store } from "../../context/Context";
import styles from "./tasks.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const DeleteSpaceBarMobile = () => {
  const { setOptions, options, activeSpace, setDeletedSpace, spaces } =
    useContext(Store);
  const onSpaceDelete = () => {
    console.log(activeSpace);
    setDeletedSpace(activeSpace);
  };
  return (
    <div
      style={{ color: options ? "white" : "gray" }}
      className={styles.tasks__tasksOptions}
      onClick={() => setOptions(!options)}
    >
      <FontAwesomeIcon icon="fa-solid fa-bars-staggered" />
      <div
        className={`${styles.tasks__deleteBar} ${
          options ? styles["tasks__deleteBar--active"] : ""
        }`}
      >
        <p onClick={() => onSpaceDelete()}> Delete Space</p>{" "}
        {/* <FontAwesomeIcon icon="fa-solid fa-chevron-right" /> */}
        <div onClick={() => {}}>
          <FontAwesomeIcon icon="fa-solid fa-xmark" />
        </div>
      </div>
    </div>
  );
};

export const DeleteSpaceBarDesktop = () => {
  const {
    setOptions,
    options,
    activeSpace,
    setDeletedSpace,
    spaces,
    deletedSpace,
  } = useContext(Store);

  const renderDeleteBtns = () => {
    return spaces.map((space) => {
      return (
        <p
          style={{ color: space.theme }}
          onClick={() => {
            console.log(space);
            setDeletedSpace(space);
            console.log(deletedSpace);
          }}
        >
          Delete {space.name}
        </p>
      );
    });
  };
  return (
    <div
      style={{ color: options ? "white" : "gray" }}
      className={styles.tasks__tasksOptions}
      onClick={() => setOptions(!options)}
    >
      <FontAwesomeIcon icon="fa-solid fa-bars-staggered" />
      <div
        className={`${styles.tasks__deleteBar} ${
          options ? styles["tasks__deleteBar--active"] : ""
        }`}
      >
        {renderDeleteBtns()}
        {/* <p onClick={() => onSpaceDelete()}> Delete Space</p>{" "} */}
        {/* <FontAwesomeIcon icon="fa-solid fa-chevron-right" /> */}
        <div onClick={() => {}}>
          <FontAwesomeIcon icon="fa-solid fa-xmark" />
        </div>
      </div>
    </div>
  );
};
