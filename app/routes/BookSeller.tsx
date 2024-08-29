import { useState } from "react";
import { books } from "./data";

export default function BookSeller() {
  const [Index, setIndex] = useState(0);
  const [BookList, setBookList] = useState(books);

  return (
    <>
      <div className="banner">
        <h1 className="text-2xl font-sans font-bold">
          ยินดีต้อนรับเข้าสู่ร้านขายหนังสือ Solar Book Center
        </h1>
        <hr className="py-3" />
        <p>
          ขอขอบคุณข้อมูลจาก{" "}
          <a href="https://www.naiin.com/" className="text-blue-500">
            ร้านหนังสือนายอินทร์ ร้านขายหนังสือออนไลน์ อีบุ๊ค และสินค้าไลฟ์สไตล์
          </a>
        </p>
      </div>

      <div className="grid grid-cols-4 gap-4 p-5">
        {BookList.map((item) => (
          <div key={item.Code}>
            <div className="card h-full max-w-full rounded-lg bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">
              <a href={`/BookDetail/${item.Code}`}>
                <img
                  className="p-8 rounded-t-lg"
                  src={item.Cover}
                  alt={item.Title}
                />
              </a>
              <div className="px-5 pb-5">
                <a href={`/BookDetail/${item.Code}`}>
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {item.Title}
                  </h5>
                </a>
                <div className="promotion flex">
                  {item.Bestseller == true ? (
                    <div className="flex items-center mt-2.5 mb-5 me-2">
                      <p className="bg-red-600 text-yellow-500 px-1 py-2 rounded-lg font-bold">
                        Best Seller !!!
                      </p>
                    </div>
                  ) : null}
                  {item.Flashsale == true ? (
                    <div className="flex items-center mt-2.5 mb-5">
                      <p className="bg-red-600 text-yellow-500 px-1 py-2 rounded-lg font-bold">
                        Flash Sale !!!
                      </p>
                    </div>
                  ) : null}
                </div>
                <div className="flex items-end justify-between">
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">
                    {item.Price.toFixed(2)} บาท
                  </span>
                  <a
                    href={`/BookDetail/${item.Code}`}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    View More
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
