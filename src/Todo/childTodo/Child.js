export default function Child(props) {
  const { todos, removeData, handelDone } = props;

  return (
    <>
      <div className="container-fluid">
        <div className="row  p-2">
          {todos.map((todo) => {
            return (
                <div
                  className="container bg-light d-flex justify-content-between p-2"
                  key={todo.id}
                >
                  <span
                    className=" text-dark fw-bold fs-2 me-3"
                    style={todo.done ? { textDecoration: 'line-through' }:{}}
                  >
                    {todo.text}
                  </span>
                  <div>
                    <input
                      type="button"
                      className="btn btn-success fs-3 me-3"
                      value="Done it"
                      onClick={() => handelDone(todo.id)}
                    />
                    <input
                      type="button"
                      className="btn btn-danger fs-3"
                      value="Delete"
                      onClick={() => removeData(todo.id)}
                    />
                  </div>
                </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
