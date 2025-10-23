import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import type { DropResult, DragUpdate } from "@hello-pangea/dnd";
import type { RootState } from "@/store/store";
import { moveToSelected, moveToGeneral } from "@/store/userSlice";
import { Avatar } from "@/Atoms";
import type { User } from "@/Interfaces";

export const ListUsers = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { general, selected } = useSelector((state: RootState) => state.users);

  console.log("General users:", general);
  console.log("Selected users:", selected);

  const onDragEnd = (result: DropResult) => {
    console.log("Drag result:", result);

    const { source, destination } = result;

    if (!destination) {
      console.log("No destination");
      return;
    }

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      console.log("Same position");
      return;
    }

    const sourceList = source.droppableId === "general" ? general : selected;
    const movedUser = sourceList[source.index];

    if (
      source.droppableId === "general" &&
      destination.droppableId === "selected"
    ) {
      console.log("Dispatching moveToSelected");
      dispatch(moveToSelected(movedUser));
    } else if (
      source.droppableId === "selected" &&
      destination.droppableId === "general"
    ) {
      console.log("Dispatching moveToGeneral");
      dispatch(moveToGeneral(movedUser));
    }
  };

  const onDragStart = () => {
    console.log("Drag started!");
  };

  const onDragUpdate = (update: DragUpdate) => {
    console.log("Drag update:", update);
  };

  return (
    <div className="flex justify-center">
      {general.length > 0 && (
        <DragDropContext
          onDragEnd={onDragEnd}
          onDragStart={onDragStart}
          onDragUpdate={onDragUpdate}
        >
          <div className="gap-5 grid lg:grid-cols-2 md:grid-cols-1">
            <Droppable droppableId="general">
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className={clsx(
                    "w-[400px] min-h-[400px] max-h-[570px] overflow-y-auto shadow-2xl p-2 rounded-xl mr-5",
                    snapshot.isDraggingOver
                      ? "bg-bgprimary dark:bg-darkbgprimary"
                      : "bg-paper dark:bg-darkpaper"
                  )}
                >
                  <h3 className="text-center text-primary text-2xl my-5 dark:text-white">
                    General ({general.length})
                  </h3>
                  {general.map((user: User, index: number) => (
                    <Draggable
                      key={user.id}
                      draggableId={user.id}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className={clsx(
                            "flex gap-2 justify-start p-4 m-2 border-2 border-primary rounded-xl cursor-grab dark:bg-darkpaper dark:text-white",
                            snapshot.isDragging ? "bg-bgprimary" : "bg-paper"
                          )}
                          style={{
                            ...provided.draggableProps.style,
                          }}
                        >
                          <Avatar
                            img={user.avatar}
                            onClick={() => navigate(`/User/${user.id}/general`)}
                          />
                          <div>
                            <p>{user.name}</p>
                            <p>{user.email}</p>
                          </div>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>

            <Droppable droppableId="selected">
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className={clsx(
                    "w-[400px] min-h-[400px] max-h-[570px] overflow-y-auto shadow-2xl p-2 rounded-xl",
                    snapshot.isDraggingOver
                      ? "bg-bgsecondary dark:bg-darkbgsecondary"
                      : "bg-paper dark:bg-darkpaper"
                  )}
                >
                  <h3 className="text-center text-secondary text-2xl my-5">
                    Grupo seleccionado ({selected.length})
                  </h3>
                  {selected.map((user: User, index: number) => (
                    <Draggable
                      key={user.id}
                      draggableId={user.id}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className={clsx(
                            "flex gap-2 justify-start p-4 m-2 border-2 border-secondary rounded-xl cursor-grab dark:bg-darkpaper dark:text-white",
                            snapshot.isDragging ? "bg-bgsecondary" : "bg-paper"
                          )}
                          style={{
                            ...provided.draggableProps.style,
                          }}
                        >
                          <Avatar
                            img={user.avatar}
                            onClick={() =>
                              navigate(`/User/${user.id}/selected`)
                            }
                          />
                          <div>
                            <p>{user.name}</p>
                            <p>{user.email}</p>
                          </div>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        </DragDropContext>
      )}
    </div>
  );
};
