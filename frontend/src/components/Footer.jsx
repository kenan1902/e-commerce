import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="" />
          <p className="w-full md:-2/3 text-gray-600">
            KJ Shop is dedicated to providing a seamless and enjoyable online
            shopping experience. From carefully selected products to exceptional
            customer service, we strive to be your go-to destination for quality
            and convenience. Thank you for choosing us and supporting our
            mission to bring the best of online retail right to your doorstep.
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+1 123 456 7890</li>
            <li>support@kjshop.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          © 2024 Kenan Jafarov. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
