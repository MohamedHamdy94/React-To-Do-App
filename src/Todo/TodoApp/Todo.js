import {  useState } from "react";
export default function Todo(props) {
  const [userForm, setUserForm] = useState({
    todo: ""
  });
  const [userFormErrors, setUserFormErrors] = useState({
    todoError: null,
  });
  const handelFormChange = (ev) => {
    if (ev.target.id === "todo") {
      setUserForm({
        ...userForm,
        todo: ev.target.value,
      });
      setUserFormErrors({
        ...userFormErrors,
        todoError:
          ev.target.value.length === 0 ? "This field is required" : null,
      });
    }
  };
  const handelFormSubmit = (ev) => {
    ev.preventDefault();
    if (!userForm.todo)
        return
    props.addData(userForm.todo);
    setUserForm({
      ...setUserForm,
      todo:""
    })
  }
  return (
    <>

    <div className="container-fluid">
      <div className="row bg-primary pt-5 ps-5">
        <h1 className="text-white col-6">Todo App!</h1>
        <form
          onSubmit={(e) => handelFormSubmit(e)}
          className="m-2 col-11 d-flex flex-column"
        >
          <div className="mb-2">
            <label htmlFor="todo" className="form-label fw-bold fs-5">
              Add New Todo
            </label>
            <input
              type="text"
              className={`form-control ${
                userFormErrors.todoError ? "border-danger" : ""
               }  `}
              id="todo"
              name="todoText"
              value={userForm.todo}
              aria-describedby="todoHelp"
              onChange={(e) => handelFormChange(e)}
            />
            <div id="todoHelp" className="text-danger form-text">
              {userFormErrors.todoError}
            </div>
          </div>
          <button type="submit" className="btn btn-dark col-3 fw-bold fs-3">
            Add Todo
          </button>
        </form>
      </div>
    </div>
    </>
  );
}
