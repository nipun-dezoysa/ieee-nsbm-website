import CSLogo from "@/assets/ieee-cs-colored-black.png";
import SBLogo from "@/assets/ieee-sb-new-colored.png";
import WIELogo from "@/assets/wie-colored.png";
import AboutSection from "@/components/about-us/about-section";

export default function About() {
  return (
    <div className="flex flex-col gap-8 my-8 w-full">
      <div className="w-full">
        <AboutSection
          firstTitle="IEEE"
          secondTitle="NSBM"
          subtitle="IEEE STUDENT BRANCH OF NSBM"
          imageSrc={SBLogo}
          socialLinks={[
            {
              platform: "facebook",
              link: "https://facebook.com/ieeesbNSBM",
            },
            {
              platform: "linkedin",
              link: "https://linkedin.com/company/ieee-sb-nsbm",
            },
            {
              platform: "instagram",
              link: "https://instagram.com/ieeesbnsbm",
            },
          ]}
          description={`IEEE Computer Society (sometimes abbreviated as the Computer Society or CS) is a professional
      society of the Institute of Electrical and Electronics Engineers (IEEE). Its purpose and scope are "to advance the theory,
      practice, and application of computer and information processing science and technology" and the "professional standing of its members".
      The CS is the largest of 39 technical societies organized under the IEEE Technical Activities Board.<br><br>
      The IEEE Computer Society sponsors workshops and conferences, publishes a variety of peer-reviewed literature,
      operates technical committees, and develops IEEE computing standards. It supports more than 200 chapters worldwide and participates
      in educational activities at all levels of the profession, including distance learning, accreditation of higher education programs
      in computer science, and professional certification in software engineering.`}
        />
      </div>
      <div className="w-full">
        <AboutSection
          firstTitle="WIE"
          secondTitle="Affinity Group"
          firstTitleColor="#702f8a"
          subtitle="WOMEN IN ENGINEERING AFFINITY GROUP OF NSBM"
          imageSrc={WIELogo}
          socialLinks={[
            {
              platform: "facebook",
              link: "https://facebook.com/ieeesbNSBM",
            },
            {
              platform: "linkedin",
              link: "https://linkedin.com/company/ieee-sb-nsbm",
            },
            {
              platform: "instagram",
              link: "https://instagram.com/ieeesbnsbm",
            },
          ]}
          description={`IEEE Women in Engineering (WIE) is a global platform of IEEE members and volunteers dedicated to advancing
      women engineers and scientists and empowering young girls throughout the world to pursue academic interests in engineering
      and scientific professions. Women in Engineering Affinity Group of NSBM (WIE NSBM) is one of the student branch chapters
      of the global network which uplifts the women in leadership roles in industry as well as international platforms.`}
        />
      </div>
      <div className="w-full">
        <AboutSection
          firstTitle="COMPUTER SOCIETY"
          secondTitle="NSBM"
          firstTitleColor="#ffa300"
          subtitle="COMPUTER SOCIETY STUDENT BRANCH CHAPTER OF NSBM"
          imageSrc={CSLogo}
          socialLinks={[
            {
              platform: "facebook",
              link: "https://facebook.com/ieeesbNSBM",
            },
            {
              platform: "linkedin",
              link: "https://linkedin.com/company/ieee-sb-nsbm",
            },
            {
              platform: "instagram",
              link: "https://instagram.com/ieeesbnsbm",
            },
          ]}
          description={`IEEE Computer Society (sometimes abbreviated as the Computer Society or CS) is a professional society of the Institute
      of Electrical and Electronics Engineers (IEEE). Its purpose and scope are "to advance the theory, practice, and application of computer
      and information processing science and technology" and the "professional standing of its members". The CS is the largest of 39 technical
      societies organized under the IEEE Technical Activities Board.
      The IEEE Computer Society sponsors workshops and conferences,
      publishes a variety of peer-reviewed literature, operates technical committees, and develops IEEE computing standards.
      It supports more than 200 chapters worldwide and participates in educational activities at all levels of the profession,
      including distance learning, accreditation of higher education programs in computer science, and professional certification in software
      engineering.`}
        />
      </div>
    </div>
  );
}
