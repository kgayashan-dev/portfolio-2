import { aboutMeData } from "../data/data";
import Image from "next/image";


export default function Home() {
  return (
    <main className="flex flex-col items-center h-full sm:text-base text-sm bg-black ">
      <section className="flex sm:flex-row sm:w-9/12 w-9/12 mt-10 mb-6 items-center flex-col">
        <div className="sm:w-1/2 w-full flex justify-center items-center">
          <Image
            src={"/Pencil.jpg"}
            alt="The image"
            width={340}
            height={960}
            aria-label={"Image of my self"}
            className="rounded-full h-250  w-300 object-cover "
          />
        </div>
        <div className=" sm:w-2/3 pt-5 my-10 ">
          <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r to-red-700 from-indigo-700  uppercase mb-6 text-center sm:text-left">
            {aboutMeData.title}
       
          </h2>
          <p className=" text-justify text-white">{aboutMeData.body}</p>
        </div>
      </section>
      <section className="w-full my-8 bg-transparent p-10 h-full">
        <div>
          <p className="text-justify text-white">
            {aboutMeData.highlightedBody}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            tincidunt urna nec nisl placerat, in interdum erat bibendum. Duis
            consequat purus quis enim hendrerit, in varius ipsum laoreet. Nullam
            hendrerit felis vitae tellus hendrerit, quis commodo nunc consequat.
            Integer quis nunc rhoncus, iaculis est a,
          </p>
        </div>
      </section>

      <section className="flex sm:flex-row  items-center mb-32 sm:w-10/12 flex-col mt-10 p-10">
        <div className="flex flex-col w-full mb-10 sm:mb-0 sm:w-7/12 ">
          <p className="text-justify text-white">
            {aboutMeData.body2}
            Accept assignments that will help me develop all of my talents,
            experiences, and qualifications. In addition, I would like to
            contribute as much of my knowledge, experiences, and talents as I
            can to the project.I am a self-motivated, honest, industrious, and
            trustworthy individual who can operate in any competitive setting by
            accepting challenges.
          </p>
        </div>
        <div className="sm:w-5/12 sm:ml-10 w-full ml-0">
          <Image
            src={"/IMG_0072.jpg"}
            alt="The image"
            width={640}
            height={960}
            aria-label={"Image of my self"}
            className="rounded-lg h-250  w-500 object-cover "
          />
        </div>
      </section>
    </main>
  );
}
