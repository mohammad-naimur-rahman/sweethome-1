import Sidebar from "../Sidebar/Sidebar";
import { connect } from 'react-redux'
import { Link } from "react-router-dom";

const mapStateToProps = state =>{
  return {
    myRent: state.homedata
  }
}

const MyRent = (props) => {
  return (
    <div className="container-fluid">
      <div style={{width:'99%'}} className="row">
        <div className="col-3">
          <Sidebar></Sidebar>
        </div>
        <div className="col-9">

          <table class="table table-striped table-hover mt-4">
            <thead>
              <tr>
                <th scope="col">House Name</th>
                <th scope="col">Price</th>
                <th style={{textAlign:'center'}} scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {props.myRent.map((data) => {
                return (
                  <tr>
                    <td>{data.title}</td>
                    <td>{data.price}</td>
                    <td  style={{textAlign:'center'}}>
                      <Link to={`/home/${data.id}`}>
                        <button type="submit" className="btn-main">
                          View Details
                        </button>
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(MyRent);
