import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { ArrowRight, ToggleLeft } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Orders = (p) => {
  const [details, setDetails] = useState({
    PackageID: "",
    SenderID: "",
    ReceiverID: "",
    ShippingDate: "",
    ShippingCost: "",
    PromisedTime: "",
  });
  const [Togglebar, setTogglebar] = useState("On_Sale");

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const toggleChange = () => {
    setTogglebar((prev) => (prev === "On_Sale" ? "Sold" : "On_Sale"));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.loading("Loading ... Please Wait ...");
    const response = await fetch("http://localhost:4000/api/v1/Orders", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        PackageID: details.PackageID,
        SenderID: details.SenderID,
        ReceiverID: details.ReceiverID,
        ShippingDate: details.ShippingDate,
        ShippingCost: details.ShippingCost,
        PromisedTime: details.PromisedTime,
        status: Togglebar,
      }),
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
            Add Order
          </h2>
          <p className="text-center text-gray-600 mb-6">Enter Order Details</p>
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
                <label htmlFor="SenderID" className="block text-gray-700">
                  Sender ID
                </label>
                <input
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  type="text"
                  placeholder="Sender ID"
                  id="SenderID"
                  name="SenderID"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="ReceiverID" className="block text-gray-700">
                  Receiver ID
                </label>
                <input
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  type="text"
                  placeholder="Receiver ID"
                  id="ReceiverID"
                  name="ReceiverID"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="ShippingDate" className="block text-gray-700">
                  Shipping Date
                </label>
                <input
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  type="date"
                  placeholder="Shipping Date"
                  id="ShippingDate"
                  name="ShippingDate"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="ShippingCost" className="block text-gray-700">
                  Shipping Cost
                </label>
                <input
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  type="text"
                  placeholder="Shipping Cost"
                  id="ShippingCost"
                  name="ShippingCost"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="PromisedTime" className="block text-gray-700">
                  Promised Time
                </label>
                <input
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  type="text"
                  placeholder="Promised Time"
                  id="PromisedTime"
                  name="PromisedTime"
                  onChange={handleChange}
                />
              </div>
              <div className="flex items-center justify-between mt-4">
                <label className="block text-gray-700">Status</label>
                <label className="inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={Togglebar === "Sold"}
                    onChange={toggleChange}
                    className="sr-only peer"
                  />
                  <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:bg-blue-600">
                    <div className="absolute top-1 left-1 bg-white w-5 h-5 rounded-full shadow peer-checked:translate-x-5 transition-transform"></div>
                  </div>
                  <span className="ml-3 text-sm font-medium text-gray-900">
                    <strong>{Togglebar}</strong>
                  </span>
                </label>
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

export default Orders;
