import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { ArrowRight } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Warehouse = (p) => {
  const [details, setDetails] = useState({
    WarehouseID: "",
    Address: "",
    Phone: "",
    Email: "",
  });

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.loading("Loading ... Please Wait ...");
    const response = await fetch(
      "http://localhost:4000/api/v1/Warehouse",
      {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          WarehouseID: details.WarehouseID,
          Address: details.Address,
          Phone: details.Phone,
          Email: details.Email,
        }),
      }
    );
    const result = await response.json();
    toast.remove();
    if (!result.success) toast.error(result.message);
    else toast.success(result.message);
  };

  return (
    <>
      <section className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="bg-white shadow-md rounded-lg px-8 py-10 max-w-md w-full">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Add Property
          </h2>
          <p className="text-center text-gray-600 mb-6">
            Enter Property Details
          </p>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label htmlFor="WarehouseID" className="block text-gray-700">
                  Property ID
                </label>
                <input
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  type="text"
                  placeholder="Property ID"
                  id="WarehouseID"
                  name="WarehouseID"
                  maxLength={8}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="Address" className="block text-gray-700">
                  Address
                </label>
                <input
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  type="text"
                  placeholder="Address"
                  id="Address"
                  name="Address"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="Phone" className="block text-gray-700">
                  Phone Number
                </label>
                <input
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  type="text"
                  placeholder="Phone Number"
                  id="Phone"
                  name="Phone"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="Email" className="block text-gray-700">
                  Email Address
                </label>
                <input
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  type="email"
                  placeholder="Email"
                  id="Email"
                  name="Email"
                  onChange={handleChange}
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center bg-indigo-600 text-white font-semibold rounded-md py-2 hover:bg-indigo-500 transition-colors duration-300"
                >
                  Add {p.table}
                  <ArrowRight className="ml-2" size={16} />
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Warehouse;
