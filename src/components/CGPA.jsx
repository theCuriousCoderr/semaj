import ui_calc from "../assets/UI_calc.png";

export default function CGPA() {
    return (
        <div className="w-full h-1/2 bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-5 flex items-center gap-10">
        <div className="h-[80%] xs:max-md:h-20 aspect-square">
          <img
            src={ui_calc}
            className="size-full object-contain object-center"
          />
        </div>
        <div>
          <h2 className="text-slate-300 font-medium">
            <a
              target="_blank"
              href="https://ui-cgpa-calc.onrender.com/"
              className="text-blue-500 underline hover:no-underline block"
            >
              UI CGPA Calculator
            </a>
          </h2>
          <p className="text-slate-400">
            A University of Ibadan standard C.G.P.A calculator using a scale
            of 4.0 <br />( per semester/session CGPA calculator )
          </p>
        </div>
      </div>
    )
}