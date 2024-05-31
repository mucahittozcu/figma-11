
import { GoAlertFill } from "react-icons/go";
const App = () => {
  return (
    <div className="h-screen bg-[#DE303F] flex justify-center items-center">

        <div className=" flex justify-center items-center">
        <div className="bg-white xl:p-8 xl:pb-20 xl:pl-24 xl:pr-24 rounded-2xl lg:p-5 lg:pb-16 lg:pl-20 lg:pr-20 sm:p-3 sm:pb-12 sm:pl-16 sm:pr-16 p-2 pb-8 pl-10 pr-10">
           <h1 className="flex justify-center text-3xl pb-7 font-semibold">Delete User</h1>
           <p className="text-xl ">Are you sure you want to delete <strong> <a href="#">your account</a> ?</strong> </p>
           
        <div className="flex mt-4 mb-4">
         <div className="bg-[#FA703F] sm:bg-[#FA703F] sm:h-[152px] h-[152px] w-1 sm:w-2 xl:bg-[#FA703F] xl:w-2 xl:h-[143px] lg:bg-[#FA703F] lg-h-[100px] lg:w-2 "></div>

        <div className="bg-[#f77140] bg-opacity-30 p-8">
           
        <div className="flex">
           <GoAlertFill  size={25} color={"#771505"} />
           <h2 className="text-[#771505] pl-2 pb-3 text-lg" >Warning</h2>
        </div>

           <p className="text-[#BC4C2E]">By Deleteing this account,you won't be able to access the system.</p>
        </div>
        </div>
 
        <div className="flex justify-between text-xl pt-3"> 
           <button className="bg-black border border-black text-white p-5">No,Cancel</button>
           <button className="bg-white border border-black text-black p-5">Yes,Delete</button>
        </div>
        
        </div>
        </div>

    </div>
  )
}
export default App 