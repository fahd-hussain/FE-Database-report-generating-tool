import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { reorderLists } from "./utils";
import styles from "../../Assets/jss/dragAndDropStyle";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(styles);

const DragAndDrop = ({ data, setData }) => {
  const classes = useStyles();

  const handleOnDragEnd = ({ destination, source }) => {
    // // dropped outside the list
    if (!destination) {
      return;
    }

    setData(reorderLists(data, source, destination));
  }

  if (!data) return <div />
  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <div className={classes.root}>
        {Object.entries(data).map(([key, value]) => (
          <Droppable
            droppableId={key}
            type="CARD"
            direction="vertical"
            isCombineEnabled={false}
          >
            {dropProvided => (
              <div className={classes.VerticalScrollContainer} {...dropProvided.droppableProps}>
                <div className={classes.column} ref={dropProvided.innerRef}>
                  <div className={classes.dndTitle}>{key}</div>
                  {value.map((item, index) => (
                    <Draggable
                      key={item.TABLE_NAME + item.COLUMN_NAME}
                      draggableId={item.TABLE_NAME + item.COLUMN_NAME}
                      index={index}
                    >
                      {dragProvided => (
                        <div
                          {...dragProvided.dragHandleProps}
                          {...dragProvided.draggableProps}
                          ref={dragProvided.innerRef}
                        >
                          <div className={classes.dndItem}>{item.TABLE_NAME + " " + item.COLUMN_NAME}</div>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {dropProvided.placeholder}
                </div>
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
};

export default DragAndDrop;