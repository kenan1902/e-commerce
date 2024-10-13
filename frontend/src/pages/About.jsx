import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Welcome to KJ Shop, your one-stop destination for all things quality
            and style! Founded in 2024 by Kenan Jafarov, KJ Shop was born out of
            a passion for delivering an unparalleled online shopping experience.
          </p>
          <p>
            We believe that shopping should be easy, enjoyable, and full of
            options that suit your unique style and needs. That’s why we’ve
            built a platform that brings you a carefully curated collection of
            products, ranging from the latest trends to timeless essentials, all
            in one convenient place.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Our mission is to combine excellent customer service with an
            easy-to-navigate platform, bringing the best of e-commerce right to
            your fingertips. Whether you’re looking for the latest trends or
            timeless essentials, KJ Shop has you covered.
          </p>
        </div>
      </div>

      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            Every product in our store is carefully selected and thoroughly
            inspected to ensure it meets our high standards. We partner with
            trusted suppliers and conduct regular quality checks, so you can
            shop with confidence knowing that each item is crafted to deliver
            durability and style. Your satisfaction matters to us, and we are
            committed to providing products you can rely on and love.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            Shopping is simple, fast, and hassle-free. With an easy-to-navigate
            website, secure payment options, and reliable delivery, we make sure
            you enjoy a seamless experience from start to finish. Wherever you
            are, great products are just a click away.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            We’re here for you every step of the way. Our dedicated customer
            service team is ready to assist with any questions or concerns,
            ensuring you have a smooth and satisfying shopping experience. We
            value your feedback and are committed to going the extra mile to
            meet your needs.
          </p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  );
};

export default About;
