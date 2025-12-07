import React from "react";
import { AspectRatio } from "../ui/aspect-ratio";
import { Button } from "../ui/button";

const ProductCard = ({ product }) => {
  const { name, image, price } = product;
  return (
    <div className="broder border-black  w-72 m-4 ">
      <a href="/">
        <AspectRatio ratio={16 / 9} className="bg-muted rounded-lg">
          <img
            src={image}
            alt={name + " photo"}
            className="h-full w-full rounded-lg object-cover dark:brightness-[0.9] dark:grayscale"
          />
        </AspectRatio>
      </a>
      <div className=" flex justify-between mt-2">
        <span>{name}</span>
        <Button>{price}</Button>
      </div>
    </div>
  );
};

export default ProductCard;
