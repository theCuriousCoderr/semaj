import semaj from "../assets/semaj.jpeg";

export default function AboutSemaj() {
  return (
    <div className="relative h-full bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-5 flex flex-col items-center">
      <figure className="relative w-2/3 xs:max-md:w-full h-[50%] xs:max-md:h-80 bg-gradient-to-br from-gray-500 overflow-hidden rounded-md">
        <img src={semaj} className="size-full object-cover object-center" />
      </figure>
      <div className="text-center text-slate-200 space-y-2 xs:max-md:mt-5">
        <h1 className="text-white text-2xl font-bold underline">Meet SEMAJ</h1>
        <p className="text-slate-50">
          Hello! I&apos;m AJAYI James, popularly known as SEMAJ.{" "} 
        </p>
        <p className="text-slate-400">
          <span className="italic text-stone-400">
            I am a 400-level student of Agricultural and Environmental
            Engineering department,
          </span>{" "}
          <br />
          I&apos;ve had the privilege of serving in various leadership positions
          within my hall, department and the faculty.{" "}
        </p>
        <p className="text-slate-400">
          Currently, I&apos;m honored to be an Honorable member of the
          Technology & Engineering Student Association (TESA) House of Assembly
          and the Student Union (SU) 11th House of Assembly.{" "}
        </p>
        <p className="text-slate-400">
          I&apos;m excited to connect with like-minded individuals and build
          meaningful relationships. Feel free to reach out to me on{" "}
          <a
            href="https://Wa.me/+2349151069067"
            target="_blank"
            className="text-blue-500 underline"
          >
            WhatsApp
          </a>
          . Looking forward to meeting you!
        </p>
      </div>
    </div>
  );
}
