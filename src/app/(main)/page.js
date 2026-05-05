import Image from "next/image";
import BooksCategory from "../components/shared/Category";
import BorrowingBooks from "../components/shared/BorrowingBooks";
import LoginSection from "../components/shared/LoginSection";
import { redirect } from "next/dist/server/api-utils";
import SocialMedia from "../components/shared/SocialMedia";
import TopRatedAuthors from "../components/shared/TopRatedAuthors";
import MobileBorrowingBooks from "../components/shared/MobileBorrowingBooks";
// import BooksCategory from "../components/shared/category";

export default function Home() {
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-12  container gap-8 mx-auto mt-10 text-left justify-between py-10  ">
      <div className="  md:col-span-3 p-4 hidden md:block sticky top-10 h-fit">
        <h3 className="text-2xl font-bold mb-5">All Category</h3>
        <BooksCategory></BooksCategory>

      </div>
      <div className="md:col-span-6 top-10 h-fit">
        <h3 className="text-2xl font-bold mb-5">Borrowing Books</h3>
        <div  className="hidden md:block">
          <BorrowingBooks id={1}></BorrowingBooks>
        </div>
        <div className="block md:hidden">
          <MobileBorrowingBooks ></MobileBorrowingBooks>
        </div>

      </div>
      <div className="md:col-span-3 p-2  sticky top-10 h-fit">
        <div className=''>
          <h3 className="text-2xl  font-bold mb-5">Social Login</h3>
        <LoginSection ></LoginSection>
        <SocialMedia  ></SocialMedia>
        </div>
        <div>
          <h3 className='text-3xl font-bold my-10'>Top Rated Authors</h3>
          <TopRatedAuthors></TopRatedAuthors>
        </div>

      </div>
    </div>
  );
}
