import RentIqIcon from "./assets/Icon";
import Home from "./Homepage";
import Properties from "./Properties";
import About from "./Info";

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
          <a className="font-serif text-xl text-white cursor-pointer">Home</a>
          <a className="font-serif text-xl text-white cursor-pointer">Properties</a>
          <a className="font-serif text-xl text-white cursor-pointer">Contact Us</a>
          <a className="font-serif text-xl text-white cursor-pointer">About Us</a>
        </div>
      </div>
      <Home />
      <Properties />
      <About/>
      <div class='min-w-screen h-80 bg-slate-500 flex p-5'>

       <div class=' flex flex-col w-1/4 justify-center items-center '>
       <RentIqIcon size={90} className="text-blue-600 cursor-pointer" />
       <p class='font-serif text-wrap text-1xl font-medium text-center'>My New Tesing Text for the ksnk,ms nkcm,. vmkszxmn ,jdvukqyeg xcv hebkv,mmx zvhwdvj</p>
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
