"use client"
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // API'den ürünleri çekmek için axios kullanarak bir GET isteği yapın
    axios
      .get("http://localhost:3001/products")
      .then((response) => {
        // API'den gelen ürünleri state'e ayarlayın
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Ürünleri alma hatası:", error);
      });
  }, []); // Boş bağımlılık dizisi, bileşen yüklendiğinde yalnızca bir kez çağrılmasını sağlar

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
          <tr key={product.id} className="border-b border-gray-300">
            <td className="p-3 bg-white">{product.name}</td>
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
