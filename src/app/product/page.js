"use client";

import Image from "next/image";
import React, { useState } from "react";

const Product = () => {
  const [quantity, setQuantity] = useState(1);
  const productPrice = 99.99;

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const handleAddToCart = () => {
    // Implement your add to cart logic here
    console.log(`Added ${quantity} items to cart.`);
  };
  const calculateTotalPrice = () => {
    return productPrice * quantity;
  };

  return (
    //  <Image
    //    src="https://placekitten.com/600/400"
    //    alt="Product Image"
    //    className="mb-4"
    //    height={200}
    //    width={200}
    //  />
    <div className="container mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Left Side: Product Image, Details, Add to Cart */}
      <div className="col-span-2">
        {/* Product Image */}
        <div className=" relative h-[400px] w-[600px] mb-2 rounded-md">
          <Image
            src="https://www.freeiconspng.com/thumbs/pizza-png/pizza-png-13.png"
            alt="Product Image"
            layout="fill"
            objectFit="contain"
          />
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-3xl font-bold mb-2">Product Title</h1>
          <p className="text-gray-700 mb-4">Product Description goes here.</p>

          {/* Quantity Selector */}
          <div className="flex items-center mb-4">
            <span className="mr-2">Quantity:</span>
            <button
              onClick={handleDecreaseQuantity}
              className="bg-gray-300 px-3 py-1 rounded-full"
            >
              -
            </button>
            <span className="mx-2">{quantity}</span>
            <button
              onClick={handleIncreaseQuantity}
              className="bg-gray-300 px-3 py-1 rounded-full"
            >
              +
            </button>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="bg-indigo-500 text-white px-6 py-3 rounded-full"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Right Side: Total Price, Quantity, Checkout */}
      <div className="fixed z-80 top-20 right-[300px]">
        <div className="bg-white p-4 rounded-lg shadow-md ">
          <h2 className="text-lg font-semibold mb-2">Order Summary</h2>
          <div className="flex justify-between mb-2">
            <span>Product Price:</span>
            <span className="font-bold text-indigo-500">
              ${productPrice.toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Quantity:</span>
            <span className="font-bold">{quantity}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Total Price:</span>
            <span className="font-bold text-indigo-500">
              ${calculateTotalPrice().toFixed(2)}
            </span>
          </div>
        </div>

        {/* Checkout Button */}
        <button className="bg-green-500 my-6 text-white px-6 py-3 rounded-full">
          Proceed to Checkout
        </button>
      </div>

      {/* Bottom: Related Products, Customer Reviews */}
      <div className="col-span-3 mt-8">
        {/* Customer Reviews Section */}
        <h2 className="text-2xl font-bold mt-8 mb-4">Customer Reviews</h2>
        {/* Add your reviews component here */}
        {/* Example: <ProductReviews /> */}
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis libero
        voluptatem beatae eveniet repellendus nemo mollitia! Quo illo sunt
        beatae similique vero ut, doloremque perferendis odio unde tempora
        nesciunt rem.
        {/* Related Products Section */}
        <h2 className="text-2xl font-bold mb-4">Related Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Add related product cards here */}
          {/* Example: <RelatedProductCard /> */}
          &Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
          corporis vitae dicta optio ratione eveniet tempora exercitationem
          animi dignissimos voluptas porro accusamus, aspernatur cum, eligendi
          possimus eaque eum ad vel.
        </div>
      </div>
    </div>
  );
};

export default Product;
