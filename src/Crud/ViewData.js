import React, { useEffect, useState } from "react";
import BaseUrl from "../Api/BaseUrl";
import axios from "axios";
import { Link } from "react-router-dom";

function ViewData() {
    const [data, setData] = useState([]);
    useEffect(() => {
      getData();
    }, []);
  const getData = () => {
    fetch(`${BaseUrl}/crud`, {
      method: "GET",
    }).then((response) => {
      response.json().then((result) => {
        setData(result);
        // localStorage.setItem('umair'); for storing data in localstorage 
      });
    });


    // axios
    //   .get(`${BaseUrl}/crud`)
    //   .then((response) => {
    //     setData(response.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };
  const HandleDelete =(id)=>{
    const result=fetch(`${BaseUrl}/crud/${id}`,{
        method:"DELETE",
    }).then((result)=>{
        alert('record deleted successfully')
        getData();
    })
  }
  return (
    <>
      <div className="row justify-content-center align-items-center g-2">
        <div className="table-responsive">
          <Link to="/" className="btn btn-success">
            Back
          </Link>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Age</th>
                <th scope="col">email</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {data
                ? data.map((record, key) => {
                    return (
                      <>
                        <tr key={key}>
                          <td>{record?.id}</td>
                          <td>{record?.name}</td>
                          <td>{record?.age}</td>
                          <td>{record?.email}</td>
                          <td>
                            <Link to={`/edit-record/${record?.id}`} className="btn btn-success">Edit</Link>
                          </td>
                          <td>
                            <button className="btn btn-danger" onClick={()=>{
                                if(window.confirm('are you sure you want to delete this data ?')){HandleDelete(record.id)}
                            }}>Delete</button>
                          </td>
                        </tr>
                      </>
                    );
                  })
                : null}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default ViewData;
