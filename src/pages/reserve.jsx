import Image from "next/image";

export default function Reservation() {
  return (
    <div className="h-screen mt-[10rem]">
      <h2 className="text-4xl font-pf font-semibold text-center my-10">
        Reservations
      </h2>
      <div className="w-11/12 border grid md:grid-cols-2 mx-auto">
        <div className="col-span-1 max-sm:order-2">
          <div className="mx-auto text-center mt-10">
            <h2 className="text-5xl mb-10 font-pf">Visit Us</h2>
            <ul className="font-thin">
              <li>
                <strong>📍 Address:</strong> Via del Gusto, 27, 80134 Napoli,
                Italy 🇮🇹
              </li>
              <li>
                <strong>⏰ Timings:</strong> 8AM - 9PM
              </li>
              <li>
                <strong>📧 Email:</strong> reservations@pizzario.vercel.app
              </li>
            </ul>
            <h3 className="text-2xl font-bold my-4">OR</h3>
            <button className="bg-gray-300 text-black p-3 rounded-md max-sm:mb-6">
              📞 Call Us
            </button>
          </div>
        </div>
        <div className="col-span-1 max-sm:order-1">
          <Image
            src="/reserve.jpeg"
            alt="Restaurant Location"
            width={400}
            height={400}
            className="max-sm:justify-self-center md:justify-self-end"
          />
        </div>
      </div>
    </div>
  );
}
