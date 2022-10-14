export default function Child(props) {
  const { data } = props;
const  handelDelete=(index)=>{
    props.removeData(index)
  }
  const handelMark=(idx)=>{
    document.getElementById(idx).style.textDecoration="line-through";
  }
  return (
    <>
    <div className="container-fluid">
      <div className="row  p-2">
        {data.map((todo) => {
          return (
            <>
            <div   className="container bg-light d-flex justify-content-between p-2">
              <span id={`${data.indexOf(todo)}`} className=" text-dark fw-bold fs-2 me-3">
                {todo}
              </span>
              <div>
              <input
                type="button"
                className="btn btn-success fs-3 me-3"
                value="Done it"
                onClick={()=>handelMark(data.indexOf(todo))}
              />
              <input
                type="button"
                className="btn btn-danger fs-3"
                value="Delete"
                onClick={()=>handelDelete(data.indexOf(todo))}
              />
            </div>
            </div>
    <hr/>
            </>

          );
        })}
      </div>
    </div>

    </>
  );
}
