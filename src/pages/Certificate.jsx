import CertificateCard from "../components/CertificateCard";
import certificate_data from "../information/certificateInfo";

export default function Certificate() {
  return (
    <section id="certificate" className="flex flex-col items-center">
      <h1 className="text-3xl font-bold text-center text-white mb-8 mt-8 tittle">
        Certificates
      </h1>
      <div className="flex flex-wrap gap-3 justify-center">
        {certificate_data.map((item) => (
          <CertificateCard
            certificationName={item.certificationName}
            organizationName={item.OrganizationName}
            receivedOn={item.receivedOn}
            link={item.CertificationLink}
          />
        ))}
      </div>
    </section>
  );
}
