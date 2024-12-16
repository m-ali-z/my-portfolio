import { Mail, MapPin, Phone } from "lucide-react";
import { BsInstagram, BsLinkedin, BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  return (
    <section id="contact" className="h-auto  bg-[#2a3542e0] relative">
      <div className="absolute w-full flex items-center justify-center -top-4 md:-top-6 gap-x-4">
        <hr className="flex-grow  border-orange-300 border border-t-2 shadow-[0px_0px_20px_0px_#FFA500]" />
        <h1 className="text-xl md:text-5xl md:-top-8 font-bold text-white text-center">
          Contact me
        </h1>
        <hr className="flex-grow border-orange-300 border  border-t-2 shadow-[0px_0px_20px_0px_#FFA500]" />
      </div>
      <div className="pb-24 flex flex-col py-20 md:grid md:grid-cols-2 place-items-center w-full md:gap-x-4 px-4 md:px-[20%] mx-auto gap-y-4 text-orange-300 text-sm md:text-xl">
        <div className="rounded-lg p-4 flex justify-start gap-4 w-full items-center h-20 bg-[#283340]">
          <Mail color="white" />
          <p>alizulfiqar22222@gmail.com</p>
        </div>
        <div className="rounded-lg p-4 flex justify-start w-full gap-4 items-center h-20 bg-[#283340]">
          <Phone color="white" />
          <p>+92 300 0191611</p>
        </div>
        <div className="rounded-lg p-4 flex col-span-2 justify-start gap-4 md:w-1/2 w-full items-center h-20 bg-[#283340]">
          <MapPin color="white" />
          <p>Lahore, Pakistan</p>
        </div>
      </div>
      <div className="flex items-center justify-center space-x-4">
        <hr className="border-orange-300 border flex-grow border-t-2 shadow-[0px_0px_20px_0px_#FFA500]" />
        <div className="text-5xl text-center font-bold text-white flex justify-around gap-x-3">
          <a
            className="text-blue-400 shadow-md shadow-blue-500"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/muhammad-ali-zulfiqar-982692264/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3B%2BLTbseL9QCmJjY1CqFgWEA%3D%3D"
          >
            <BsLinkedin size={30} />
          </a>

          <BsInstagram size={30} />

          <a
            href="https://wa.me/923000191611" // Replace with your number
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 hover:text-green-700 flex items-center gap-2"
          >
            <BsWhatsapp size={30} />
          </a>
        </div>
        <hr className="border-orange-300 flex-grow border border-t-2 shadow-[0px_0px_20px_0px_#FFA500]" />
      </div>
      <footer className="text-center text-md text-gray-300 py-10">
        © 2024 Muhammad Ali Zulfiqar. Made with ❤️.
      </footer>
    </section>
  );
};

export default Contact;
