import React from "react";
import { Link } from "react-router-dom";

const Recentsales = () => {
  return (
    <>
      <div className="card-body">
        <h5 className="card-title">
          Recent Sales <span>| Today</span>
        </h5>

        <table className="table table-borderless datatable">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Customer</th>
              <th scope="col">Product</th>
              <th scope="col">Price</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">
                <Link to="#">#2457</Link>
              </th>
              <td>Brandon Jacob</td>
              <td>
                <Link to="#" className="text-primary">
                  At praesentium minu
                </Link>
              </td>
              <td>$64</td>
              <td>
                <span className="badge bg-success">Approved</span>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <Link to="#">#2147</Link>
              </th>
              <td>Bridie Kessler</td>
              <td>
                <Link to="#" className="text-primary">
                  Blanditiis dolor omnis similique
                </Link>
              </td>
              <td>$47</td>
              <td>
                <span className="badge bg-warning">Pending</span>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <Link to="#">#2049</Link>
              </th>
              <td>Ashleigh Langosh</td>
              <td>
                <Link to="#" className="text-primary">
                  At recusandae consectetur
                </Link>
              </td>
              <td>$147</td>
              <td>
                <span className="badge bg-success">Approved</span>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <Link to="#">#2644</Link>
              </th>
              <td>Angus Grady</td>
              <td>
                <Link to="#" className="text-primar">
                  Ut voluptatem id earum et
                </Link>
              </td>
              <td>$67</td>
              <td>
                <span className="badge bg-danger">Rejected</span>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <Link to="#">#2644</Link>
              </th>
              <td>Raheem Lehner</td>
              <td>
                <Link to="#" className="text-primary">
                  Sunt similique distinctio
                </Link>
              </td>
              <td>$165</td>
              <td>
                <span className="badge bg-success">Approved</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Recentsales;
