import { useState } from "react";
import { books } from "./data";
import { useParams } from "@remix-run/react";

export default function BookDetail() {
  const [Index, setIndex] = useState(0);
  const [BookList, setBookList] = useState(books);
  const MyParam = useParams();
  const BookId = MyParam.bookId;

  const book = books.filter((bookItems) => bookItems.Code == BookId);

  return (
    <>
      <div className="relative overflow-x-auto">
      <div className="banner">
        <h1 className="text-2xl font-sans font-bold">
          รายละเอียดหนังสือ
        </h1>
        <hr className="py-3" />
      </div>
        {book.map((item) => (
          <div key={item.Code}>
            <table className="w-full text-md text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="px-6 py-4">
                    <img src={item.Cover} alt={item.Title} />
                  </td>
                  <td className="px-6 py-4"><span className="text-lg font-bold">ชื่อหนังสือ : </span>{item.Title}</td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="px-6 py-4 w-2/4">
                    <span className="text-lg font-bold">รายละเอียด : </span> {item.Description}
                  </td>
                  <td className="px-6 py-4"><span className="text-lg font-bold">ราคา : </span> {(item.Price).toFixed(2)} บาท</td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="px-6 py-4"><span className="text-lg font-bold">ผู้แต่ง : </span> {item.Author}</td>
                  <td className="px-6 py-4">
                  <span className="text-lg font-bold">สำนักพิมพ์ : </span> {item.Publishing}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </>
  );
}
