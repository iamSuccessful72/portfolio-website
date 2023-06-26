import { FaCertificate, FaGraduationCap } from "react-icons/fa";

function AboutMe() {
  return (
    <section className="lg:px-20 p-4" id="about">
      <h2 className="font-bold text-green-700 text-xl">About Me</h2>
      <p className="my-4">
        I'm a self taught meticulous web developer from Lagos, Nigeria with over
        2 years of front end experience and passion for responsive website
        design and a firm believer in the mobile-first approach. i'm a dedicated
        and well organized seeking a responsible position to gain practical
        exprience. I fondly anticipate working in a challenging yet rewarding
        organization to attain its visions for personal growth.
      </p>
      <div className="gap-4 grid-cols-2 md:grid">
        <div className="bg-zircon mt-4 md:mt-0 p-4 rounded-md">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-xl">EDUCATION</h3>
            <div className="text-green-700 text-xl">
              <FaGraduationCap />
            </div>
          </div>
          <p className="text-gray-500">December 2017 to April 2021</p>
          <p className="font-bold">
            National Certificate of Education in Economic History Studies
          </p>
          <p className="text-green-700">
            Alvan Ikoku Federal College Of Education Owerri
          </p>
        </div>
        <div className="bg-zircon mt-4 md:mt-0 p-4 rounded-md">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-xl">CERTIFICATES</h3>
            <div className="text-green-700 text-xl">
              <FaCertificate />
            </div>
          </div>
          <p className="text-gray-500">December 2017 to April 2021</p>
          <p className="font-bold">
            Certificate of Education in Economic History Studies
          </p>
          <p className="text-green-700">
            Alvan Ikoku Federal College Of Education Owerri
          </p>
          <p className="text-gray-500">September 2007 to July 2013</p>
          <p className="font-bold">West African Senior School Certificate</p>
          <p className="text-green-700">
            Awodi Ora Senior Secondary School Ajeromi Ifelodun Apapa, Lagos,
            State
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
