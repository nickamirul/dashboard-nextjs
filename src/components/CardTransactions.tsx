import React from "react";
import { ReactNode, useState } from "react";
import Image from "next/image";
import { Transaction } from "@/types/transaction";

const productData: Transaction[] = [
  {
    image: "/images/user/user-02.png",
    name: 'Payment for the course "History of graphic design"',
    category: "Electronics",
    price: 120,
    sold: 22,
    profit: 45,
    storage: "#54687KB",
    sale: 256,
    buyerName: "Walter Osborne",
    time: "05.20 PM",
  },
  {
    image: "/images/user/user-03.png",
    name: 'Payment for the course "English for Designers"',
    category: "Electronics",
    price: 538,
    sold: 12,
    profit: 125,
    storage: "#54687KB",
    sale: 519,
    buyerName: "Ellise Remmi",
    time: "8.00 AM",
  },
  {
    image: "/images/user/user-04.png",
    name: 'Payment for 5 lessons on the topic of "Design Thinking"',
    category: "Electronics",
    price: 190,
    sold: 64,
    profit: 247,
    storage: "#54687KB",
    sale: 292,
    buyerName: "Nathael Roy",
    time: "09.00 AM",
  },
  {
    image: "/images/user/user-06.png",
    name: 'Tip after the course "English for Designers"',
    category: "Electronics",
    price: 190,
    sold: 64,
    profit: 247,
    storage: "#54687KB",
    sale: 292,
    buyerName: "Robert Fox",
    time: "12.00 PM",
  },
  {
    image: "/images/user/user-07.png",
    name: 'Payment for 5 lessons on the topic of "Design Thinking"',
    category: "Electronics",
    price: 190,
    sold: 64,
    profit: 247,
    storage: "#54687KB",
    sale: 292,
    buyerName: "Robert Fox",
    time: "12.00 PM",
  },
];

const dateData = [{ date: "Monday 02 - Wednesday 04, oct 2023" }];

const CardTransactions = () => {
  const [showAllProducts, setShowAllProducts] = useState(false);

  const handleSeeAllClick = () => {
    setShowAllProducts(true);
  };

  const visibleProducts = showAllProducts
    ? productData
    : productData.slice(0, 4);

  return (
    <>
      <div className="md:w-140 w-140 flex h-80 flex-col rounded-lg bg-white p-6 shadow-md md:h-95">
        <div className="flex items-start justify-between">
          <div>
            <div>
              <h4 className="text-xl font-bold text-black">Transactions</h4>
              <h6 className="flex text-xs text-meta-11">{dateData[0].date}</h6>
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
          className="mt-4 overflow-auto"
          style={
            showAllProducts ? { height: "250px", overflowY: "scroll" } : {}
          }
        >
          <table className="w-full">
            <tbody>
              {visibleProducts.map((product, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-4" : "bg-white"}
                >
                  <td className="px-3 py-3">
                    {/* <Image
                      className="rounded-full"
                      src={product.image}
                      alt={product.name}
                      width={60}
                      height={60}
                      style={{ borderRadius: "50%" }}
                    /> */}
                    <div className="h-10 w-10 rounded-full">
                      <Image
                        width={112}
                        height={112}
                        src={product.image}
                        alt="User"
                        style={{
                          width: "auto",
                          height: "auto",
                        }}
                      />
                    </div>
                  </td>

                  <td>
                    <p className="text-sm font-bold text-black dark:text-white">
                      {product.name}
                    </p>
                    <p className="text-xs text-meta-11 dark:text-white">
                      {product.buyerName}, {product.time}
                    </p>
                  </td>
                  <td>
                    <p className="text-sm font-bold text-black dark:text-white">
                      ${product.price}
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

export default CardTransactions;
