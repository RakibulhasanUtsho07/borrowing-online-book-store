import Image from "next/image";
import BooksCategory from "../components/shared/Category";
import BorrowingBooks from "../components/shared/BorrowingBooks";
import LoginSection from "../components/shared/LoginSection";
// import BooksCategory from "../components/shared/category";

export default function Home() {
  return (
    <div className="grid grid-cols-12 container gap-8 mx-auto mt-10 text-left justify-between py-10">
      <div className="  col-span-3">
        <h3 className="text-2xl font-bold mb-5">All Category</h3>
        <BooksCategory></BooksCategory>

      </div>
      <div className="col-span-6  ">
        <h3 className="text-2xl font-bold mb-5">Borrowing Books</h3>
        <BorrowingBooks></BorrowingBooks>

      </div>
      <div className="col-span-3 p-2">
        <h3 className="text-2xl font-bold mb-5">Social Login</h3>
        <LoginSection></LoginSection>
      </div>
    </div>
  );
}
{/* <div className="grid grid-cols-12 gap-10  container mx-auto">
            <div className="sticky col-span-3">
                <h3 className="text-xl font-semibold mb-5 ">All Category</h3>
                <Category activeId={id}></Category>
            </div>
            <div className="col-span-6">
                <h3 className="text-xl font-semibold ">Dragon News Home</h3>
                <HomeNews id={id}></HomeNews>
            </div>
            <div className="sticky col-span-3">
                <h3 className="text-xl font-semibold ">Login With</h3>
                <LoginSection></LoginSection>
            </div>
        </div> */}