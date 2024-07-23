import "./App.css";

import ui_logo from "./assets/UI_logo.png";
import AboutSemaj from "./components/AboutSemaj";
import Level100 from "./components/100LResources";
import CGPASection from "./components/CGPA";

function App() {
  return (
    <div className="h-screen xs:max-md:h-auto w-full bg-gray-950 flex xs:max-md:flex-col gap-5 px-5 py-2 xs:max-md:p-2">
      <div className="relative h-full w-1/2 xs:max-md:w-full overflow-y-scroll hide-scrollbar space-y-5">
        <div className="h-20 xs:max-md:h-10 w-full bg-white bg-opacity-10 backdrop-blur-md rounded-xl xs:max-md:rounded-md p-5 xs:max-md:p-0"></div>
        <AboutSemaj />
        <div className="xs:max-md:hidden h-20 xs:max-md:h-10 w-full bg-white bg-opacity-10 backdrop-blur-md rounded-xl xs:max-md:rounded-md p-5 xs:max-md:p-0"></div>
      </div>
      <div className="h-full w-1/2 xs:max-md:w-full xs:max-md:mt-10 flex flex-col gap-5">
        <h2 className="text-2xl font-bold text-white text-center  ">
          ACADEMIC RESOURCES
        </h2>
        <div className="w-full h-1/2 bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-5 flex items-center gap-10">
          <div className="h-[80%] xs:max-md:h-20 aspect-square">
            <img
              src={ui_logo}
              className="size-full object-contain object-center"
            />
          </div>
          <div className="flex items-start gap-5">
            <Level100 />
            <button onClick={() => alert("200 level Materials not yet available")} className="text-slate-600">200L</button>
            <button onClick={() => alert("300 level Materials not yet available")} className="text-slate-600">300L</button>
          </div>
        </div>
        <CGPASection />
      </div>
    </div>
  );
}

export default App;
