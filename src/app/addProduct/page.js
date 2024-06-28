"use client";
import axios from "axios";
import React, { useState } from "react";
import { toast } from "@/components/ui/use-toast";

import { useRouter } from "next/navigation";

const AddProduct = () => {
  const router = useRouter();
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [priceAsString, setPrice] = useState("");
  const [stockAsString, setStock] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const price = parseFloat(priceAsString);
    const stock = parseFloat(stockAsString);
   
    axios
      .post("http://localhost:5000/api/product", {productName, description,price, stock})
      .then((product_response) => {
        console.log(product_response);
        console.log(price);
        router.push("/product");
      })
      .catch((error) => {
        const errorMessage = error.response?.data?.message || error.message;
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: errorMessage,
        });
      });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full md:w-2/3 lg:w-1/2 xl:w-2/4 bg-slate-300 p-8 rounded-lg">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="productName"
              className="block text-gray-700 font-bold mb-2"
            >
              Product Name:
            </label>
            <input
              type="text"
              id="productName"
              className="form-input w-full"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-gray-700 font-bold mb-2"
            >
              Description:
            </label>
            <textarea
              id="description"
              className="form-textarea w-full"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label
              htmlFor="price"
              className="block text-gray-700 font-bold mb-2"
            >
              Price:
            </label>
            <input
              type="number"
              id="price"
              className="form-input w-full"
              value={priceAsString}
              onChange={(e) => setPrice(e.target.value) }
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="stock"
              className="block text-gray-700 font-bold mb-2"
            >
              Stock:
            </label>
            <input
              type="number"
              id="stock"
              className="form-input w-full"
              value={stockAsString}
              onChange={(e) => setStock(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
