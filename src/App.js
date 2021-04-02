import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Error from './Components/Error/Error';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Register from './Components/Register/Register';
import { createContext, useState } from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Orders from './Components/Orders/Orders';
import Admin from './Components/Admin/Admin';
import AddProduct from './Components/AddProduct/AddProduct';
import ManageProduct from './Components/ManageProduct/ManageProduct';
import OrderPreview from './Components/OrderPreview/OrderPreview';
import Thank from './Components/Thank/Thank';
import SelectProduct from './Components/SelectProduct/SelectProduct';


export const UserContext = createContext();


function App() {

  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <PrivateRoute path="/orders/:id">
            <Orders></Orders>
          </PrivateRoute>
          {/* <PrivateRoute path="/orders">
            <Orders></Orders>
          </PrivateRoute> */}
          <PrivateRoute path="/admin">
            <Admin></Admin>
          </PrivateRoute>
          <PrivateRoute path="/addProduct">
            <AddProduct></AddProduct>
          </PrivateRoute>
          <PrivateRoute path="/manageProduct">
            <ManageProduct></ManageProduct>
          </PrivateRoute>
          <PrivateRoute path="/orderPreview">
            <OrderPreview></OrderPreview>
          </PrivateRoute>
          <PrivateRoute path="/thank">
            <Thank></Thank>
          </PrivateRoute>
          <PrivateRoute path="/orders">
            <SelectProduct></SelectProduct>
          </PrivateRoute>
          <Route path="*">
            <Error></Error>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
