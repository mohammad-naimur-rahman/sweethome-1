import Sidebar from '../Sidebar/Sidebar';
import { connect } from 'react-redux'

const mapStateToProps = state =>{
  return {
    bookingList: state.bookingList
  }
}

const BookingList = (props) => {
  return (
    <div className='container-fluid'>
      <div style={{width:'99%'}} className='row'>
        <div className='col-3'>
          <Sidebar></Sidebar>
        </div>
        <div className='col-9'>

          <table class='table mt-4'>
            <thead>
              <tr>
                <th scope='col'>Name</th>
                <th scope='col'>Email Id</th>
                <th scope='col'>Phone No</th>
                <th scope='col' style={{width:'300px'}}>Message</th>
                <th scope='col'>Status</th>
              </tr>
            </thead>
            <tbody>
              {props.bookingList.map((list) => {
                return (
                  <tr>
                    <td>{list.name}</td>
                    <td>{list.email}</td>
                    <td>{list.phone}</td>
                    <td>{list.message}</td>
                    <td>
                      <select name="status" style={{border:'none'}}>
                          <option value="pending">Pending</option>
                          <option value="onGoing">On Going</option>
                          <option value="done">Done</option>
                      </select>
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

export default connect(mapStateToProps)(BookingList);
