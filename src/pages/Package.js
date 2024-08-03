import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { ArrowRight } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Package = (p) => {
  const [details, setDetails] = useState({
    PackageID: "",
    Type: "",
    Weight: "",
    DeliveryTime: "",
    Status: "",
    AccountID: "",
    CreditCardNumber: "",
    EmployeeID: "",
    TruckID: "",
    PlaneID: "",
    WarehouseID: "",
  });

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.loading("Loading ... Please Wait ...");
    const response = await fetch("http://localhost:4000/api/v1/Package", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(details),
    });
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
            Add Package
          </h2>
          <p className="text-center text-gray-600 mb-6">Enter Package Details</p>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label htmlFor="PackageID" className="block text-gray-700">
                  Package ID
                </label>
                <input
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  type="text"
                  placeholder="Package ID"
                  id="PackageID"
                  name="PackageID"
                  maxLength={8}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="Type" className="block text-gray-700">
                  Type
                </label>
                <input
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  type="text"
                  placeholder="Type"
                  id="Type"
                  name="Type"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="Weight" className="block text-gray-700">
                  Weight
                </label>
                <input
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  type="text"
                  placeholder="Weight"
                  id="Weight"
                  name="Weight"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="DeliveryTime" className="block text-gray-700">
                  Delivery Time
                </label>
                <input
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  type="text"
                  placeholder="Delivery Time"
                  id="DeliveryTime"
                  name="DeliveryTime"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="Status" className="block text-gray-700">
                  Status
                </label>
                <input
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  type="text"
                  placeholder="Status"
                  id="Status"
                  name="Status"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="AccountID" className="block text-gray-700">
                  Account ID
                </label>
                <input
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  type="text"
                  placeholder="Account ID"
                  id="AccountID"
                  name="AccountID"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="CreditCardNumber" className="block text-gray-700">
                  Credit Card Number
                </label>
                <input
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  type="text"
                  placeholder="Credit Card Number"
                  id="CreditCardNumber"
                  name="CreditCardNumber"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="EmployeeID" className="block text-gray-700">
                  Employee ID
                </label>
                <input
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  type="text"
                  placeholder="Employee ID"
                  id="EmployeeID"
                  name="EmployeeID"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="TruckID" className="block text-gray-700">
                  Truck ID
                </label>
                <input
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  type="text"
                  placeholder="Truck ID"
                  id="TruckID"
                  name="TruckID"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="PlaneID" className="block text-gray-700">
                  Plane ID
                </label>
                <input
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  type="text"
                  placeholder="Plane ID"
                  id="PlaneID"
                  name="PlaneID"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="WarehouseID" className="block text-gray-700">
                  Warehouse ID
                </label>
                <input
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  type="text"
                  placeholder="Warehouse ID"
                  id="WarehouseID"
                  name="WarehouseID"
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

export default Package;
