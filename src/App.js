import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'
import Home from './component/HomePage/Home/Home.jsx'
import Login from './component/Login/Login'
import MyRent from './component/Dashboard/MyRent/MyRent'
import BookingList from './component/Dashboard/BookingList/BookingList.jsx'
import AddRentHouse from './component/Dashboard/AddRentHouse/AddRentHouse.jsx'
import PrivateRoute from './component/PrivateRoute/PrivateRoute'
import myStore from './Redux/Store/Store'
import { Provider } from 'react-redux'
import HomeNav from './component/HomePage/HomeNav/HomeNav'
import HomeDetails from './component/HomeDetails/HomeDetails'

function App() {

  return (

    <Provider store={myStore}>
      <BrowserRouter>
      <HomeNav></HomeNav>
      <Switch>
        <Route path='/' exact>
        <Home></Home>
        </Route>
        <Route path='/home/:id' exact>
        <HomeDetails></HomeDetails>
        </Route>
        <Route path='/login'>
        <Login></Login>
        </Route>
        <PrivateRoute path='/my/rent'>
          <MyRent></MyRent>
        </PrivateRoute>
        <PrivateRoute path='/booking/list'>
          <BookingList></BookingList>
        </PrivateRoute>
        <PrivateRoute path='/add/rent/house'>
          <AddRentHouse></AddRentHouse>
        </PrivateRoute>
      </Switch>
      </BrowserRouter>
      </Provider>
  );
}

export default App;