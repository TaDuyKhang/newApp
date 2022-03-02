function VR(props) {
  console.log(props);
  return (
    <div className="VR">
      <div className="VR--box">
        <p>{props.data.small_title}</p>
        <h1>{props.data.h1}</h1>
        <p>
          Image from <span>{props.data.name}</span>
        </p>
        <button>{props.data.button}</button>
      </div>
    </div>
  );
}

export default VR;
