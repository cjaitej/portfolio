import image from "/certificate.png";
export default function CertificateCard({
  certificationName,
  organizationName,
  receivedOn,
  link,
}) {
  return (
    <div className="flex bg-textbg p-3 rounded-md border border-black border-3">
      <img className="bg-transparent w-20 object-contain" src={image} alt="" />
      <div className="bg-transparent text-white p-3">
        <h1 className="tittle bg-transparent text-xl font-md text-inherit">
          {certificationName}
        </h1>
        <h1 className="tittle bg-inherit text-md font-light text-inherit">
          {organizationName}
        </h1>
        <div className="flex justify-between items-center bg-transparent">
          <h1 className="tittle bg-inherit text-sm font-extralight text-inherit">
            {receivedOn}
          </h1>
          <a className="bg-inherit" href={link} target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-7 bg-inherit"
            >
              <path
                fillRule="evenodd"
                d="M15.75 2.25H21a.75.75 0 01.75.75v5.25a.75.75 0 01-1.5 0V4.81L8.03 17.03a.75.75 0 01-1.06-1.06L19.19 3.75h-3.44a.75.75 0 010-1.5zm-10.5 4.5a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V10.5a.75.75 0 011.5 0v8.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V8.25a3 3 0 013-3h8.25a.75.75 0 010 1.5H5.25z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
