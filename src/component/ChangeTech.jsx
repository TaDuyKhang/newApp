import { useSelector, useDispatch } from "react-redux";
import { setTechnology } from "../store/slice/changeFE";
import { useState } from "react";

function Tech() {
  const value = useSelector((state) => state.FEData.Technology);
  const dispach = useDispatch();
  const [data, setData] = useState(value);
  const [boxStates, setBoxStates] = useState(data.boxText);

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
    dispach(setTechnology(data));
  };

  return (
    <form onSubmit={updateData}>
      <p>Small title</p>
      <input
        type="text"
        value={data.smallTitle}
        onChange={(event) =>
          setData({ ...data, smallTitle: event.target.value })
        }
      />
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
      <p>Small title</p>
      <input
        type="text"
        value={data.name}
        onChange={(event) => setData({ ...data, name: event.target.value })}
      />
      {data.boxText.map((item, index) => (
        <div>
          <p>Box title</p>
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

export default Tech;
