import { Link } from "react-router-dom";

function Admin() {
  return (
    <div>
      <Link to="/vr">VR</Link> <br></br>
      <Link to="/tech">Change TECHNOLOGY</Link>
      <br></br>
      <Link to="/surp">Change Surprising</Link>
      <br></br>
    </div>
  );
}

export default Admin;
