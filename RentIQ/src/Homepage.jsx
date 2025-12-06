import pic1 from "./assets/Home.jpg";

const Home = () => {
  return (
    <>
      <div class="min-w-screen min-h-screen bg-slate-400 flex flex-col">
        <p class="font-serif text-4xl text-white text-center mt-24 font-semibold">Explore and Choose 
          Your Ideal Spot</p>
        <div class="flex min-w-screen h-5/6">

          <div class="w-6/12 h-screen flex flex-col justify-center items-center">
            <img src={pic1} alt="Map Image" class="w-11/12 h-3/4 rounded-xl" />
          </div>
          <div class="w-6/12 flex flex-col justify-center items-center border-collapse border-b rounded-md">
          <p>RentIQ makes renting easier, faster, and more transparent. Discover verified properties, 
            compare rental options, and make informed decisions — all in one smart platform.</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
