import AdminNavigation from "@/components/AdminNavigation";
import {ToastContainer} from 'react-toastify';
import React from "react";
import 'react-toastify/dist/ReactToastify.css';

class BasicLayout extends React.Component {
  render() {

    return (
      <div>
        <ToastContainer/>

        <AdminNavigation/>
        {this.props.children}
      </div>
    );
  }
}

export default BasicLayout;
