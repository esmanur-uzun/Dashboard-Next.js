"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const Product = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/product")
      .then((product_res) => {
        setProducts(product_res.data.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);
  return (
    <table className="w-full">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-3">Product Name</th>
          <th className="p-3">Description</th>
          <th className="p-3">Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product._id} className="border-b border-gray-300">
            <td className="p-3 bg-white">{product.productName}</td>
            <td className="p-3 bg-gray-300">{product.description}</td>
            <td className="p-3 flex gap-2 justify-center items-center">
              <Button variant="destructive">
                <FontAwesomeIcon icon={faTrash} />
              </Button>
              <Button className="bg-green-600">
                <FontAwesomeIcon icon={faPen} />
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Product;
