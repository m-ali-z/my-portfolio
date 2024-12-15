import { Instagram, LinkedinIcon, Mail, MapPin, Phone } from "lucide-react";
import { BsInstagram, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { CiInstagram } from "react-icons/ci";
import { PiWhatsappLogo } from "react-icons/pi";

const Contact = () => {
  return (
    <section id="contact" className="h-auto py-20 bg-[#2a3542e0] relative">
      <hr className="absolute top-0 border-orange-300 border border-t-2 w-[40%] shadow-[0px_0px_20px_0px_#FFA500]" />
      <h1 className="absolute text-5xl text-center -top-8 font-bold transform left-1/2 -translate-x-1/2 text-white">
        Contact Me
      </h1>
      <hr className="absolute top-0 right-0  border-orange-300 border w-[40%] border-t-2 shadow-[0px_0px_20px_0px_#FFA500]" />

      <div className="pb-24 grid grid-cols-2 px-20 gap-x-2 gap-y-4 text-orange-300 text-xl">
        <div className="col-span-2 flex justify-center gap-4">
          <div className="rounded-lg p-4 flex justify-start gap-4 items-center h-20 bg-[#283340]">
            <Mail color="white" />
            <p>alizulfiqar22222@gmail.com</p>
          </div>
          <div className="rounded-lg p-4 flex justify-start gap-4 items-center h-20 bg-[#283340]">
            <Phone color="white" />
            <p>alizulfiqar22222@gmail.com</p>
          </div>
        </div>
        <div className="col-span-2 flex justify-center gap-4">
          <div className="rounded-lg p-4 flex justify-start gap-4 items-center h-20 bg-[#283340]">
            <MapPin color="white" />
            <p>alizulfiqar22222@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <hr className="border-orange-300 border border-t-2 w-[40%] shadow-[0px_0px_20px_0px_#FFA500]" />
        <div className="absolute text-5xl text-center font-bold transform left-1/2 -translate-x-1/2 text-white flex justify-around gap-x-6">
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
        <hr className="absolute right-0 border-orange-300 border w-[40%] border-t-2 shadow-[0px_0px_20px_0px_#FFA500]" />
      </div>
      <footer className="text-center text-md text-gray-300 py-10">
        © 2024 Muhammad Ali Zulfiqar. Made with ❤️.
      </footer>
    </section>
  );
};

export default Contact;
