import github from "/github.png";

export default function ProjectCard({ tittle, image, info, link }) {
  return (
    <div className="flex flex-col w-min h-full bg-textbg rounded-lg p-3">
      <div className="flex bg-inherit w-64 h-40 bg-black justify-center rounded-lg">
        <img className=" object-contain bg-inherit" src={image} alt="" />
      </div>
      <div className="bg-transparent p-2 pt-0">
        <h1 className="bg-inherit text-white font-semibold text-xl pb-2 pt-1 text-center">
          {tittle}
        </h1>
        <h1 className="bg-inherit text-lite2 text-xs">{info}</h1>
      </div>
      <a
        href={link}
        target="_"
        className="flex relative w-fit bg-transparent ml-auto items-center gap-2"
      >
        <a className="bg-inherit text-blue-300 text-sm font-medium">
          Source Code
        </a>
        <img className="bg-inherit w-8" src={github} alt="" />
      </a>
    </div>
  );
}
