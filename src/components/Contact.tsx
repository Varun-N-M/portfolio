import emailjs from '@emailjs/browser';
import { FormEvent } from 'react';

export const Contact = () => {


  const sendEmail = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.sendForm('service_4u3bld2', 'template_y80f3df', e.currentTarget, 'YsRqGfo5Tu0SvUJee')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.currentTarget.reset()
      alert("Message sent")
  };

  return (
    <form onSubmit={sendEmail}>
      <div
        id="contact"
        className="pt-28 h-screen max-md:h-fit w-full flex justify-center items-center my-10"
      >
        <div className="max-width px-6 py-5 sm:px-16 shadow-xl shadow-gray-700 rounded-3xl flex flex-col items-center">
          <h1 className="tracking-wider text-5xl font-bold  text-center">
            Contact me
          </h1>
          <div className="w-full flex flex-col lg:flex-row justify-between mt-5 mb-10 lg:mt-10 gap-5 font-semibold">
            <div className="w-full py-5 ">
              <p>
                Email: <a className="underline">varunnm68@gmail.com</a>
              </p>
              <p className="mt-5">Looking forward to hear from you...!</p>
            </div>
            <div className="h-full lg:w-[150%] flex flex-col justify-between gap-5">
              <div className="flex flex-col md:flex-row gap-5">
                <div className="flex flex-col lg:flex-row gap-2">
                  <h3>Name:</h3>
                  <input
                    type="text"
                    name="name"
                    className="w-full bg-gray-200 outline-none rounded-3xl px-6 py-1 max-lg:mt-2 text-black"
                    required
                    autoComplete="off"
                  />
                </div>
                <div className="flex flex-col lg:flex-row gap-2">
                  <h3>Email:</h3>
                  <input
                    type="email"
                    name="email"
                    className="w-full bg-gray-200 outline-none rounded-3xl px-6 py-1 max-lg:mt-2 text-black"
                    required
                    autoComplete="off"
                    min="8"
                  />
                </div>
              </div>
              <div>
                <h3>Subject:</h3>
                <input
                  type="text"
                  name="subject"
                  className="w-full bg-gray-200 outline-none rounded-3xl px-6 py-1 mt-5 text-black"
                  required
                />
              </div>
              <div>
                <h3>Message:</h3>
                <textarea
                  name="message"
                  className="w-full outline-none bg-gray-200 rounded-xl px-5 py-2 text-black text-[12px]"
                />
              </div>
            </div>
          </div>
          <button
            className="px-5 py-2 bg-blue-600 text-white rounded-full min-w-[151px] font-semibold hover:bg-blue-700"
            type="submit"
          >
            Send
          </button>
        </div>
      </div>
    </form>
  );
};
