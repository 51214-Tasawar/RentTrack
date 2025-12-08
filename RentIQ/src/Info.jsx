import {} from 'lucide-react'

const About = () => {
  return (
    <>
      <div class="min-w-screen h-screen bg-slate-400 flex flex-col gap-9 ">
        <div class="min-w-screen h-28 flex justify-center items-center mt-24 ">
          <p class="text-3xl font-semibold text-white">
            RentIQ — Turning Your Rental Dreams into Reality
          </p>
        </div>
        <div class="min-w-screen h-full flex">
          <div class="w-1/2 h-4/5 flex flex-col items-center gap-8 bg-gray-600 rounded-md">
            <p class="font-bold text-8xl text-center text-white">Our Mission </p>
            <p class=" w-2/3 font-serif text-2xl text-center text-white ">Our mission is to make property renting 
            smart, transparent, and stress-free.We aim to empower users with accurate data, real-time
            listings, and intelligent tools that help them find the right property without hassle.
            </p>
          </div>
          <div class="w-1/2 h-full flex flex-col justify-center items-center">
         <BadgeCheck className="w-6 h-6 text-green-600" />
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
