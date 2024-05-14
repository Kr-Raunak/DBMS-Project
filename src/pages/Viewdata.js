import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default function Viewdata(p) {
  const [data, setdata] = useState("");

  const loaddata = async () => {
    toast.loading("Loading ... Please Wait ...");
    const response = await fetch("http://localhost:4000/api/v1/view", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        table: p.table,
      }),
    });

    const result = await response.json();
    setdata(result);
    toast.remove();
    toast.success("Data Fetched Successfully ... ");
  };

  useEffect(() => {
    loaddata();
  }, [p.table]);

  const openImageInNewTab = (imageUrl) => {
    window.open(imageUrl, "_blank");
  };

  return (
    <>
      <section className="mx-auto w-full max-w-7xl p-4 ">
        <div className="flex flex-col space-y-4 p-2 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-500 rounded md:flex-row md:items-center md:justify-between md:space-y-0">
          <div>
            <h1 className="text-md text-gray-200 pl-2"><strong>{p.table} Table</strong> </h1>
          </div>
          {/* <div>
            {/* <button
              type="button"
              className="rounded-md bg-gradient-to-tr from-black to-gray-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              <Link to={`/add_${p.table}`}>Add new {p.table}</Link>
            </button> 
          </div> */}
        </div>
        <div className="mt-6 flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      {data.fields &&
                        data.fields.map((e, index) => (
                          <th
                            key={index}
                            scope="col"
                            className="px-12 py-3.5 text-left text-sm font-normal text-gray-700"
                          >
                            {e.name}
                          </th>
                        ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {data.fulldata &&
                      data.fulldata.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                          {data.fields.map((col, colIndex) => (
                            <td
                              key={colIndex}
                              className="whitespace-nowrap px-12 py-4"
                            >
                              {col.name !== "imge_link" ? (
                                <div className="text-sm text-gray-900">
                                  {row[col.name]}
                                </div>
                              ) : (row[col.name] &&
                                <button
                                  type="button"
                                  style={{ backgroundColor: "blue" }}
                                  
                                  className="rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                  onClick={() =>
                                    openImageInNewTab(row[col.name])
                                  }
                                >
                                  View Image
                                </button>
                              )}
                            </td>
                          ))}
                        </tr>
                      ))}+-
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
