import React, { useEffect, useState } from "react";

function Assignment(props) {
  const [data, setData] = useState({});
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((Response) => {
          setLoader(false);
          setData(Response);
        });
    }, 2000);
  });
  return (
    <>
      <table align="center" className="table table-bordered border-dark">
        <thead className="thead-dark">
          <tr>
            <th align="center" colSpan={"2"}>
              <h2 className="text-center ">React Router</h2>
            </th>
          </tr>
        </thead>
        <tr>
          <td>Que01.</td>
          <td>
            <b>
              Create React app with modules and lazy loading (Admin-user module
              with child router and outlet)
            </b>
          </td>
        </tr>
      </table>
      {loader ? (
        <>
          <h2 className="text-center">Loading</h2>
          <div class="text-center">
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        </>
      ) : (
        <>
          <h2 className="text-center">Complated...</h2>
          <div className="conatainer">
            <div className="row">
              <div className="col">
                <h1>{loader}</h1>

                <table className="table text-center table-bordered border-dark table-striped">
                  <thead className="thead-dark">
                    <tr>
                      <th>UserId</th>
                      <th>ID</th>
                      <th>Title</th>
                      <th>Body</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.entries(data).map((res, index) => {
                      return (
                        <tr key={index}>
                          <td>{res[1].userId}</td>
                          <td>{res[1].id}</td>
                          <td>{res[1].title}</td>
                          <td>{res[1].body}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
export default Assignment;
