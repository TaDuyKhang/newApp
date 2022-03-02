import { useSelector, useDispatch } from "react-redux";
import { setColumn } from "../store/slice/changeFE";
import { useState } from "react";

function Surp() {
  const value = useSelector((state) => state.FEData.column);
  const dispach = useDispatch();
  const [data, setData] = useState(value);
  const [boxStates, setBoxStates] = useState(data.box);

  const onChangeBoxText = (index) => {
    return (e) => {
      const newValue = e.target.value;

      const cloneData = JSON.parse(JSON.stringify(boxStates));

      cloneData[index].text = newValue;

      setBoxStates(cloneData);
    };
  };

  const updateData = (e) => {
    e.preventDefault();
    data.box = boxStates;
    dispach(setColumn(data));
  };
  return (
    <form onSubmit={updateData}>
      <p>Title</p>
      <input
        type="text"
        value={data.title}
        onChange={(event) => setData({ ...data, title: event.target.value })}
      />
      <p>SubText</p>
      <input
        type="text"
        value={data.subText}
        onChange={(event) => setData({ ...data, subText: event.target.value })}
      />

      {data.box.map((item, index) => (
        <div>
          <p>Box text</p>
          <input
            key={index}
            type="text"
            value={boxStates[index].text}
            onChange={onChangeBoxText(index)}
          />
        </div>
      ))}

      <button>update</button>
    </form>
  );
}

export default Surp;
