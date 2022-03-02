import { useSelector, useDispatch } from "react-redux";
import { setValue } from "../store/slice/changeText";
import { useState } from "react";
function Form_Text() {
  const value = useSelector((state) => state.setText);
  const dispach = useDispatch();
  const [data, setData] = useState(value);
  console.log("data1", data);

  const change = (event) => {
    // debugger;
    event.preventDefault();
    debugger;
    console.log(setValue);
    dispach(setValue(data.title));
  };
  return (
    <form className="div" onSubmit={change}>
      <label>Title</label>
      <input
        type="text"
        value={data.title}
        onChange={(event) => setData({ ...data, title: event.target.value })}
      />
      <label>Subtext</label>
      <input
        type="text"
        value={data.subText}
        onChange={(event) => setData({ ...data, subText: event.target.value })}
      />
      <label>Image by</label>
      <input
        type="text"
        value={data.imgBy}
        onChange={(event) => setData({ ...data, imgBy: event.target.value })}
      />
      <label>Button</label>
      <input
        type="text"
        value={data.btn}
        onChange={(event) => setData({ ...data, btn: event.target.value })}
      />
      <button>sửa</button>
    </form>
  );
}

export default Form_Text;
