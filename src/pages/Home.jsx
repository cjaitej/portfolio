import { Link } from "react-router-dom";
import image from "/jaitej_pic.png";

export default function Home() {
  return (
    <section id="home" className="flex justify-between items-center home">
      <div className="relative flex-col ml-20">
        <h1 className=" text-lite italic text-2xl mb-1">Hi, I am</h1>
        <h1 className="name font-bold text-8xl mb-1">Choudam Jaitej</h1>
        <div className="flex gap-2">
          <h1 className=" text-white text-3xl font-semibold">AI Engineer</h1>
          <h1 className=" text-lite text-3xl mb-1 italic">&</h1>
          <h1 className=" text-white text-3xl font-semibold">Web Developer</h1>
        </div>
        <div className="flex gap-6 mt-6">
          <a
            className="px-4 py-1 bg-buttonbg border-black text-md rounded-md home-button"
            href="mailto:cjaitej@gmail.com"
            target="_blank"
          >
            Contact me
          </a>
          <Link
            to="https://drive.google.com/file/d/1OxVJNKM2sOy1BHReH649Mzf_kYpUijE0/view?usp=sharing"
            target="_blank"
            className="flex px-4 bg-buttonbg text-md rounded-md items-center home-button"
          >
            Resume
          </Link>
        </div>
      </div>
      <div className="bg-transparent">
        <img
          className=" absolute ml-auto bottom-0 right-0 img bg-transparent"
          src={image}
          alt=""
        />
      </div>
    </section>
  );
}
