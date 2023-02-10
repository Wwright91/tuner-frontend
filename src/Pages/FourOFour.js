import { Link } from "react-router-dom";

export default function FourOFour() {
  return (
    <div>
      <h3>The Page You Were Looking For Was Not Found</h3>
      <h4>
        Return <Link to={"/"}>Home</Link>
      </h4>
    </div>
  );
}
