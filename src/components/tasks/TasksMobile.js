import React, { useState, useContext } from "react";
import { Store } from "../../context/Context";
import styles from "./tasks-mobile.module.scss";

import AddSpace from "./AddSpace";
import TasksSpace from "./TasksSpace";
const TasksMobile = () => {
  const context = useContext(Store);
  console.log(context);
  const {
    activeSpace,
    setActiveSpace,
    spaces,
    setSpaces,
    setAddSpaceIsActive,
    activeSpaceIndex,
    setActiveSpaceIndex,
  } = context;
  const renderSpaces = () => {
    const actualSpaces = spaces.map((space, i) => {
      return (
        <TasksSpace
          spaceIndex={i}
          activeSpaceIndex={activeSpaceIndex}
          activeSpace={space}
        />
      );
    });
    if (spaces.length < 3) {
      actualSpaces.push(
        <AddSpace
          spaceIndex={spaces.length}
          activeSpaceIndex={activeSpaceIndex}
          setAddSpaceIsActive={setAddSpaceIsActive}
          setActiveSpace={setActiveSpace}
          spaces={spaces}
          setSpaces={setSpaces}
        />
      );
    }
    return actualSpaces;
  };

  return (
    <div className={styles.tasksMobile__switchWrap}>
      {spaces.length ? (
        renderSpaces()
      ) : (
        <AddSpace
          setAddSpaceIsActive={setAddSpaceIsActive}
          setActiveSpace={setActiveSpace}
          spaces={spaces}
          setSpaces={setSpaces}
        />
      )}

      {/* {addSpaceIsActive ? (
        <AddSpace
          setAddSpaceIsActive={setAddSpaceIsActive}
          setActiveSpace={setActiveSpace}
          spaces={spaces}
          setSpaces={setSpaces}
        />
      ) : (
        <TasksSpace activeSpace={activeSpace} />
      )} */}
    </div>
  );
};

export default TasksMobile;