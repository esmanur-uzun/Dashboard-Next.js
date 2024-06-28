"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { toast } from "@/components/ui/use-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [items, setItems] = useState({});
  const [open, setOpen] = useState(false);
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
  function deleteProduct(product_id) {
    axios
      .delete(`http://localhost:5000/api/product/${product_id}`)
      .then((response) => {
        const message = response.data.message;
        toast({
          description: message,
        });
        setProducts(products.filter((product) => product._id !== product_id));
      })
      .catch((error) => {
        const errorMessage = error.response?.data?.message || error.message;
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: errorMessage,
        });
      });
  }

  function editProduct(product_id) {
    axios
      .get(`http://localhost:5000/api/product/${product_id}`)
      .then((response) => {
        const productData = response.data.data;
        setItems(productData);
      })
      .catch((error) => {
        const errorMessage = error.response?.data?.message || error.message;
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: errorMessage,
        });
      });
  }

  function saveChange() {
    axios
      .put(`http://localhost:5000/api/product/${items._id}`, items)
      .then((response) => {
        const updatedProduct = response.data.data;
        setProducts(
          products.map((product) => {
            if (product._id === updatedProduct._id) {
              return updatedProduct;
            }
            return product;
          })
        );
        setOpen(false)
        toast({
          description: "Product updated successfully.",
        });
      })
      .catch((error) => {
        const errorMessage = error.response?.data?.message || error.message;
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: errorMessage,
        });
      });
  }

  return (
    <div>
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
                <Button
                  onClick={() => deleteProduct(product._id)}
                  variant="destructive"
                >
                  <FontAwesomeIcon icon={faTrash} />
                </Button>
                <Dialog open={open} onOpenChange={setOpen}>
                  <DialogTrigger>
                    <Button
                      onClick={() => editProduct(product._id)}
                      className="bg-green-600"
                    >
                      <FontAwesomeIcon icon={faPen} />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Edit product</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="productName" className="text-right">
                          Product Name
                        </Label>
                        <Input
                          id="productName"
                          value={items.productName}
                          className="col-span-3"
                          onChange={(e) =>
                            setItems({ ...items, productName: e.target.value })
                          }
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="description" className="text-right">
                          Description
                        </Label>
                        <Textarea
                          onChange={(e) =>
                            setItems({ ...items, description: e.target.value })
                          }
                          value={items.description}
                          id="message"
                          className="col-span-3"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="price" className="text-right">
                          Price
                        </Label>
                        <Input
                          type="number"
                          id="price"
                          onChange={(e) =>
                            setItems({ ...items, price: e.target.value })
                          }
                          value={items.price}
                          className="col-span-3"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="stock" className="text-right">
                          Stock
                        </Label>
                        <Input
                          type="number"
                          id="stock"
                          value={items.stock}
                          onChange={(e) =>
                            setItems({ ...items, stock: e.target.value })
                          }
                          className="col-span-3"
                        />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button onClick={saveChange} type="submit">Save changes</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Product;
