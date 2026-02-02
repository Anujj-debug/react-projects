import { useContext } from "react";
import {TodoItemsContext} from "../store/todo-items-store";
import { AiFillDelete } from "react-icons/ai";

function TodoItem1({todoName , todoDate , }) {
  const {deleteItem} = useContext(TodoItemsContext);

  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger kg-button"
           onClick={() => deleteItem(todoName)}
          >
            <AiFillDelete />
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem1;
