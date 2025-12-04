import RentIqIcon from "./assets/Icon";
import Home from "./Homepage";
const App = () => {
  return (
    <>
      {/*Nav Bar Section*/}
      <div class="flex justify-between min-w-screen h-24 bg-slate-500 ">
        <div class="w-6/12 h-24 flex justify-start items-center">
          <RentIqIcon size={80} className="text-blue-600 cursor-pointer" />
          <p class="font-serif text-2xl text-white cursor-pointer">RentIq</p>
        </div>
        <div class="flex justify-end items-center p-10 gap-5">
          <a class="font-serif text-xl text-white cursor-pointer">Home</a>
          <a class="font-serif text-xl text-white cursor-pointer">Properties</a>
          <a class="font-serif text-xl text-white cursor-pointer">Contact Us</a>
          <a class="font-serif text-xl text-white cursor-pointer">About Us</a>
        </div>
      </div>
      <Home />
    </>
  );
};
export default App;
