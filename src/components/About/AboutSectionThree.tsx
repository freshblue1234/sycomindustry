import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const AboutSectionThree = () => {
  const members = [
    {
      name: "Nshuti Moise",
      role: "CEO and Founder",
      image: "/images/members/Nshuti Moise,Ceo and founder.jpg",
      portfolio: "https://your-portfolio-link.com", // Will be updated later
    },
    {
      name: "Murengezi Samuel",
      role: "Company Analyst and Consultant",
      image: "/images/members/Murengezi Samuel,company analysist and consoler.jpg",
      portfolio: "https://blvpeppa.vercel.app", // Will be updated later
    },
    {
      name: "Ishimwe Shadad",
      role: "Developer",
      image: "/images/members/Ishimwe Shadad ,developer.jpg",
      portfolio: "https://your-portfolio-link.com", // Will be updated later
    },
    {
      name: "Baraka Salvator",
      role: "Company Representative",
      image: "/images/members/Baraka salvator,copany representative.jpg",
      portfolio: "https://BarakaSalvator.netlify.app", // Will be updated later
    },
  ];

  return (
    <section className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <SectionTitle
                title="Meet Our Team"
                paragraph="Our dedicated team of professionals is committed to delivering innovative AI solutions and driving digital transformation across Africa."
                mb="44px"
              />

              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {members.map((member, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-dark"
                  >
                    <div className="relative h-64 w-full overflow-hidden">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="mb-2 text-xl font-bold text-black dark:text-white">
                        {member.name}
                      </h3>
                      <p className="mb-4 text-sm text-body-color dark:text-body-color-dark">
                        {member.role}
                      </p>
                      <a
                        href={member.portfolio}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm font-medium text-primary transition-colors duration-300 hover:text-primary/80"
                      >
                        View Portfolio
                        <svg
                          className="ml-2 h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionThree; 