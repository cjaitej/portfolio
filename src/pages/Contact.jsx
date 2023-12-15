import happy from "/thankyou.png";

export default function Contact() {
  return (
    <div
      id="contact"
      className="flex flex-col w-screen p-20 py-44 justify-evenly items-center gap-5"
    >
      <h1 className="text-white text-xl flex items-center gap-2">
        Thank you, for scrolling down
        <img className="w-8 rounded-full" src={happy} alt="happy" />
      </h1>
      <a
        className="flex items-center gap-2 bg-text3 px-8 py-2 rounded-xl text-2xl font-md text-white contact"
        href="mailto:cjaitej@gmail.com"
        target="_blank"
      >
        Contact me
      </a>
    </div>
  );
}
