import './requestlayout.css';
import { Button } from 'reactstrap';
const RequestLayout = (props) => {

  return (
    <li className="liItemReq">
      <div className="row-12">
        <h6 style={{ fontSize: 14, display: "inline" }}> Name: </h6> {props.name}
      </div>
      <div className="row-12">
        <h6 style={{ fontSize: 14, display: "inline" }}> Email: </h6> {props.email}
      </div>
      <div className="row-12">
        <h6 style={{ fontSize: 14, display: "inline" }}> Wants: </h6> {props.hisoffer}
      </div>
      <div className="row-12">
        <h6 style={{ fontSize: 14, display: "inline" }}> Description: </h6> {props.hisdescription}
      </div>

      <Button
        color="success"
        className="myacptBtn"
        onClick={(event) => {
          console.log("clicked.");
          // accept 
          event.target.style.backgroundColor = "gray";

        }}
        style={{ paddingTop: 0, paddingBottom: 2, paddingLeft: 12, paddingRight: 12 }}
      >

        Accept
      </Button>


    </li>
  );
}
export default RequestLayout;