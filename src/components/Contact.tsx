import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";

function Contact() {
  return (
    <section className="lg:px-20 p-4" id="contact">
      <h2 className="font-bold text-green-700 text-xl">Contact</h2>
      <p className="font-bold my-4 text-center text-4xl">Ways To Contact Me</p>
      <div className="flex flex-wrap gap-4 justify-center">
        <a
          className="block bg-zircon flex items-center p-4 rounded-md text-green-700"
          href="mailto:okorieifeanyichukwu72@gmail.com"
        >
          <span className="mr-2">
            <FaEnvelope />
          </span>
          <span>okorieifeanyichukwu72@gmail.com</span>
        </a>
        <a
          className="block bg-zircon flex items-center p-4 rounded-md text-green-700"
          href="https://github.com/iamSuccessful72"
          target="_blank"
        >
          <span className="mr-2">
            <FaGithub />
          </span>
          <span>iamSuccessful72</span>
        </a>
        <a
          className="block bg-zircon flex items-center p-4 rounded-md text-green-700"
          href="tel:+2348175858309"
        >
          <span className="mr-2">
            <FaPhoneAlt />
          </span>
          <span>+2348175858309</span>
        </a>
        <a
          className="block bg-zircon flex items-center p-4 rounded-md text-green-700"
          href="https://twitter.com/Okorieifeanyic5?t=N_Ow27DynEa1NHEfiFViIw&s=09"
          target="_blank"
        >
          <span className="mr-2">
            <FaTwitter />
          </span>
          <span>@Okorieifeanyic5</span>
        </a>
        <a
          className="block bg-zircon flex items-center p-4 rounded-md text-green-700"
          href="https://www.linkedin.com/in/okorie-ifeanyichukwu-8380a11a8"
          target="_blank"
        >
          <span className="mr-2">
            <FaLinkedin />
          </span>
          <span>Okorie Ifeanyichukwu</span>
        </a>
      </div>
    </section>
  );
}

export default Contact;
