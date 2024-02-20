import React from "react";
import { useState, ReactNode } from "react";
import Image from "next/image";
import { Course } from "@/types/course";

const productData: Course[] = [
  {
    image: "/images/product/product-01.png",
    name: "History of graphic design",
    price: 120,
    storage: "#54687KB",
    sale: 256,
    color: "warning",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" class="w-6 h-6">
    <path fill-rule="evenodd" d="M6 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6Zm1.5 1.5a.75.75 0 0 0-.75.75V16.5a.75.75 0 0 0 1.085.67L12 15.089l4.165 2.083a.75.75 0 0 0 1.085-.671V5.25a.75.75 0 0 0-.75-.75h-9Z" clip-rule="evenodd" />
  </svg>
  `,
  },
  {
    image: "/images/product/product-02.png",
    name: "English for Designers",
    price: 538,
    storage: "#54687KB",
    sale: 519,
    color: "success",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" class="w-6 h-6">
    <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
    <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
  </svg>
  `,
  },
  {
    image: "/images/product/pencil.png",
    name: "Sketching for Designers",
    price: 190,
    storage: "#54687KB",
    sale: 292,
    color: "danger",

    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" class="w-6 h-6">
    <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z" />
  </svg>
  `,
  },
  {
    image: "/images/product/product-03.png",
    name: "Sketching for Designers",
    price: 190,
    storage: "#54687KB",
    sale: 292,
    color: "red",

    svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0 1 20.25 6v12A2.25 2.25 0 0 1 18 20.25H6A2.25 2.25 0 0 1 3.75 18V6A2.25 2.25 0 0 1 6 3.75h1.5m9 0h-9" />
  </svg>`,
  },
];

interface CardDataStatsProps {
  children: ReactNode;
}

const dateData = [{ date: "September 04 - October 04, 2023" }];

const CardContainer: React.FC<CardDataStatsProps> = ({ children }) => {
  const [showAllProducts, setShowAllProducts] = useState(false);

  const handleSeeAllClick = () => {
    setShowAllProducts(true);
  };

  const visibleProducts = showAllProducts
    ? productData
    : productData.slice(0, 3);

  return (
    <>
      <div className="col-span-12 w-full flex h-auto flex-col rounded-lg bg-white p-6 shadow-md">
        <div className="flex items-start justify-between">
          <div>
            <div>
              <h4 className="text-xl font-bold text-black">Top Course</h4>
              <h6 className="text-darkgray flex text-xs">{dateData[0].date}</h6>
            </div>
          </div>

          {!showAllProducts && (
            <button
              className="rounded bg-white px-3 py-1 text-xs font-bold font-medium text-black shadow-card hover:bg-white hover:shadow-card dark:bg-boxdark dark:text-white dark:hover:bg-boxdark"
              onClick={handleSeeAllClick}
            >
              See All
            </button>
          )}
        </div>

        <div
          className="mt-2 overflow-auto"
          style={{
            maxHeight: showAllProducts ? "400px" : "auto",
          }}
        >
          <table className="w-full">
            <tbody>
              {visibleProducts.map((product, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-4" : "bg-white"}
                >
                  <td className="flex items-center px-1">
                    <td className="px-3 py-3">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-md bg-${product.color} dark:bg-meta-4`}
                        dangerouslySetInnerHTML={{ __html: product.svg }}
                      ></div>{" "}
                    </td>
                    <div className="ml-2">
                      <p className="text-sm font-bold text-black dark:text-white">
                        {product.name}
                      </p>
                      <p className="text-meta-11 text-xs dark:text-white">
                        {product.storage}
                      </p>
                    </div>
                  </td>

                  <td>
                    <p className="text-sm font-bold text-black dark:text-white">
                      ${product.price}
                    </p>
                    <p
                      className="text-meta-11 text-xs dark:text-white"
                      style={{
                        marginLeft: `-${
                          product.sale.toString().length * 0.33
                        }rem`,
                      }}
                    >
                      ${product.sale} sale
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default CardContainer;
