import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

function HeroSection() {
  return (
    <section className="items-center justify-center lg:flex lg:px-20 min-h-screen p-4">
      <div className="lg:flex">
        <div className="basis-2/4">
          <p className="text-2xl">Hello, My name is</p>
          <p className="font-bold my-6 text-green-700 text-5xl">
            Ifeanyichukwu <br /> Success <br /> Okorie
          </p>
          <div>
            <a
              className="hover:text-green-700 inline-block ml-2 text-2xl"
              href="https://twitter.com/Okorieifeanyic5?t=N_Ow27DynEa1NHEfiFViIw&s=09"
              target="_blank"
            >
              <FaTwitter />
            </a>
            <a
              className="hover:text-green-700 inline-block ml-2 text-2xl"
              href="https://www.instagram.com/okorieifeanyichukwu72/"
              target="_blank"
            >
              <FaInstagram />
            </a>
            <a
              className="hover:text-green-700 inline-block ml-2 text-2xl"
              href="https://github.com/iamSuccessful72"
              target="_blank"
            >
              <FaGithub />
            </a>
            <a
              className="hover:text-green-700 inline-block ml-2 text-2xl"
              href="https://www.linkedin.com/in/okorie-ifeanyichukwu-8380a11a8"
              target="_blank"
            >
              <FaLinkedin />
            </a>
          </div>
          <p className="my-6">
            I am a{" "}
            <span className="font-bold text-green-700">
              Frontend Developer.
            </span>{" "}
            Highly dedicated and hardworking. <br /> Most of the time i am busy
            working on my <span className="font-bold text-green-700">CSS</span>{" "}
            <span className="font-bold text-green-700">HTML</span> and{" "}
            <span className="font-bold text-green-700">REACT</span> Skills.
          </p>
          <div>
            <a
              className="bg-green-700 inline-block mr-2 p-2 rounded-full text-center text-zircon w-32"
              href="mailto:okorieifeanyichukwu72@gmail.com"
            >
              Email Me
            </a>
            <a
              className="border border-green-700 inline-block ml-2 p-2 rounded-full text-green-700 text-center w-32"
              download="my resume"
              href="src\resume\Ifeanyichukwu-Okorie.pdf"
            >
              Download CV
            </a>
          </div>
        </div>
        <div className="basis-2/4 lg:mt-0 mt-4">
          <div className="2xl:h-4/5 2xl:w-4/5 h-full w-full">
            <img
              alt="photo of Okorie Ifeanyichukwu Success"
              className="h-full max-h-full max-w-full object-cover rounded-md w-full"
              src="src\images\Screenshot_20230625_093225_Gallery.jpg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
