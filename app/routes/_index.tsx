import type { MetaFunction } from "@remix-run/node";
import BookSeller from "./BookSeller";

export const meta: MetaFunction = () => {
  return [
    { title: "SolarBookCenter" },
    { name: "description", content: "Welcome to SolarBookCenter" },
  ];
};

export default function Index() {
  return (
   <>
   <BookSeller />
   </>
  );
}
