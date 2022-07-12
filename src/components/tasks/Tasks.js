import TasksMobile from "./TasksMobile";
import TasksDesktop from "./TasksDesktop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Media from "react-media";
import Spaces from "./Spaces";
import SpacesDesktop from "./SpacesDesktop";
import { DeleteSpaceBarMobile, DeleteSpaceBarDesktop } from "./DeleteSpaceBar";
import styles from "./tasks.module.scss";
import { useContext, useState } from "react";
import { Store } from "../../context/Context";
const Tasks = () => {
  const { activeSpaceIndex, activeSpace, setDeletedSpace } = useContext(Store);
  const onSpaceDelete = () => {
    console.log(activeSpace);
    setDeletedSpace(activeSpace);
  };
  return (
    <section className={styles.tasks}>
      <div className={styles.tasks__header}>
        <Media
          queries={{
            mobile: "(max-width: 1199px)",
            desktop: "(min-width: 1200px)",
          }}
        >
          {(matches) => {
            return (
              <>
                {matches.mobile && <DeleteSpaceBarMobile />}
                {matches.desktop && <DeleteSpaceBarDesktop />}
              </>
            );
          }}
        </Media>
        <h1 className="header">Tasks</h1>
      </div>
      <Media
        queries={{
          mobile: "(max-width: 1199px)",
          desktop: "(min-width: 1200px)",
        }}
      >
        {(matches) => {
          return (
            <>
              {matches.mobile && (
                <div className={styles.tasks__content}>
                  <Spaces />
                  <TasksMobile />
                </div>
              )}
              {matches.desktop && (
                <div className={styles.tasks__content}>
                  <SpacesDesktop screen={"desktop"} />
                  <TasksDesktop />
                </div>
              )}
            </>
          );
        }}
      </Media>
    </section>
  );
};

export default Tasks;
