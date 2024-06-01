import { getTodos } from "../store/reducers/todo";
import { useDispatch, useSelector } from "react-redux";
const Todo = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.data);
  const isLoading = useSelector((state) => state.todo.isLoading);
  const getTodosHandler = () => {
    dispatch(getTodos());
  };
  return (
    <>
      <button onClick={getTodosHandler}>Get Todo</button>
      <section>
        {isLoading && <p>Loading...</p>}
        {!isLoading && todos.map((todo) => (
          <p>{todo.title}</p>
        ))}
        {!isLoading && todos.length<1 && <p>Click button to get data!</p>}
      </section>
    </>
  );
};

export default Todo;
