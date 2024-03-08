import React from "react";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen } from "@fortawesome/free-solid-svg-icons";

const Product = () => {
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
        <tr className="border-b border-gray-300">
          <td className="p-3 bg-white">Product 1</td>
          <td className="p-3 bg-gray-300">Description 1</td>
          <td className="p-3 flex gap-2 justify-center items-center">
            <Button variant="destructive">
              <FontAwesomeIcon icon={faTrash} />
            </Button>
            <Button className="bg-green-600">
              <FontAwesomeIcon icon={faPen} />
            </Button>
          </td>
        </tr>
        <tr className="border-b border-gray-300">
          <td className="p-3 bg-white">Product 2</td>
          <td className="p-3 bg-gray-100">Description 2</td>
          <td className="p-3 flex gap-2 justify-center items-center">
            <Button variant="destructive">
              <FontAwesomeIcon icon={faTrash} />
            </Button>
            <Button className="bg-green-600">
              <FontAwesomeIcon icon={faPen} />
            </Button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Product;
