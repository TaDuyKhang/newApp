import { useSelector, useDispatch } from "react-redux";
import { setRow_3 } from "../store/slice/changeFE";
import { useState } from "react";

function VR() {
  const value = useSelector((state) => state.FEData.Row_3);
  const dispach = useDispatch();
  const [data, setData] = useState(value);
  const [boxStates, setBoxStates] = useState(data.box);

  const onChangeBoxTitle = (index) => {
    return (e) => {
      const newValue = e.target.value;

      const cloneData = JSON.parse(JSON.stringify(boxStates));

      cloneData[index].title = newValue;

      setBoxStates(cloneData);
    };
  };

  const onChangeBoxSubText = (index) => {
    return (e) => {
      const newValue = e.target.value;

      const cloneData = JSON.parse(JSON.stringify(boxStates));

      cloneData[index].subText = newValue;
      setBoxStates(cloneData);
    };
  };

  const onChangeButton = (index) => {
    return (e) => {
      const newValue = e.target.value;

      const cloneData = JSON.parse(JSON.stringify(boxStates));

      cloneData[index].button = newValue;
      setBoxStates(cloneData);
    };
  };

  const updateData = (e) => {
    e.preventDefault();
    data.box = boxStates;
    dispach(setRow_3(data));
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
          <p>Box title</p>
          <input
            key={index}
            type="text"
            value={boxStates[index].title}
            onChange={onChangeBoxTitle(index)}
          />
          <p>Box SubText</p>
          <input
            key={index}
            type="text"
            value={boxStates[index].subText}
            onChange={onChangeBoxSubText(index)}
          />
          <p>Box Button</p>
          <input
            key={index}
            type="text"
            value={boxStates[index].button}
            onChange={onChangeButton(index)}
          />
        </div>
      ))}

      <button>update</button>
    </form>
  );
}

export default VR;
