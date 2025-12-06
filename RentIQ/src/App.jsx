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

       <div class=' flex w-1/5 justify-center items-center gap-4'>
       <RentIqIcon size={200} className="text-blue-600 cursor-pointer" />
       <p class='font-serif text-wrap text-1xl font-medium'>My New Tesing Text for the ksnk,ms nkcm,. vmkszxmn ,jdvukqyeg xcv hebkv,mmx zvhwdvj</p>
       </div>

       <div class=' flex w-1/5 justify-center items-center gap-4'>
       

       </div>
       
       <div class=' flex w-1/5 justify-center items-center gap-4'>
       <RentIqIcon size={200} className="text-blue-600 cursor-pointer" />
       <p class='font-serif text-wrap text-1xl font-medium'>My New Tesing Text for the ksnk,ms nkcm,. vmkszxmn ,jdvukqyeg xcv hebkv,mmx zvhwdvj</p>
       </div>

       <div class=' flex w-1/5 justify-center items-center gap-4'>
       <RentIqIcon size={200} className="text-blue-600 cursor-pointer" />
       <p class='font-serif text-wrap text-1xl font-medium'>My New Tesing Text for the ksnk,ms nkcm,. vmkszxmn ,jdvukqyeg xcv hebkv,mmx zvhwdvj</p>
       </div>

      </div>
    </>
  );
};
export default App;
