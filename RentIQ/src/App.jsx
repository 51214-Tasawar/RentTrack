import RentIqIcon from "./assets/Icon";
import Home from "./Homepage";
import Properties from "./Properties";
import About from "./Info";
import { Link } from "lucide-react";
// import { Link, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      {/*Nav Bar Section*/}
      <div class="flex justify-between min-w-screen h-24 bg-slate-500 ">
        <div className="w-6/12 h-24 flex justify-start items-center">
          <RentIqIcon size={80} className="text-blue-600 cursor-pointer" />
          <p className="font-serif text-2xl text-white cursor-pointer">RentIq</p>
        </div>
        <div className="flex justify-end items-center p-10 gap-5">
          <Link to={'/'} className="font-serif text-xl text-white cursor-pointer">Home</Link>
          <Link to={'/Properties'} className="font-serif text-xl text-white cursor-pointer">Properties</Link>
          <Link to={'/Info'} className="font-serif text-xl text-white cursor-pointer">About Us</Link>
          <Link className="font-serif text-xl text-white cursor-pointer">Contact Us</Link>
        </div>
      </div>
     <Home />
     <Properties />
     <About />

      {/* <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Info" element={<About/>} />
        <Route path="/Properties" element={<Properties/>}/>
      </Routes> */}
      <div class='min-w-screen h-80 bg-slate-500 flex p-5'>
       <div class=' flex flex-col w-1/4 justify-center items-center '>
       <RentIqIcon size={90} className="text-blue-600 cursor-pointer" />
       <p class='w-3/4 font-serif text-wrap text-xl font-medium text-center'>RentIQ connects renters with trusted properties effortlessly.
        Your journey to a better living space starts here
       </p>
       </div>

       <div class=' flex  flex-col w-1/4 justify-center items-center gap-4'>
       <p class="font-serif text-xl font-semibold">Platform</p>
       <div class="flex flex-col cursor-pointer items-center">
        <p>Email</p>
       <p>Facebook</p>
       <p>Twitter</p>
       </div>
       </div>
       
       <div class=' flex  flex-col w-1/4 justify-center items-center gap-4'>
       <p class="font-serif text-xl font-semibold">Support</p>
       <div class="flex flex-col cursor-pointer items-center">
      <p>Help Center</p>
       <p>Agent</p>
       <p>Dashboard</p>
       </div>
       </div>

       <div class=' flex  flex-col w-1/4 justify-center items-center gap-4'>
       <p class="font-serif text-xl font-semibold">Legal</p>
       <div class="flex flex-col cursor-pointer items-center">
        <p>Privacy Policy</p>
       <p>Terms of Service</p>
       <p>Cookie Policy</p>
       </div>
       </div>
      </div>
         <div class="min-w-screen h-20 bg-slate-500 flex justify-center items-center">
        <p>©MyrentIq.All rights reserved.</p>
      </div>
    </>
  );
};
export default App;
