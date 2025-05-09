// import { Mail, Phone, Linkedin, MapPin } from 'lucide-react';

// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';

// export default function Contact() {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm('service_59ez7t5', 'template_hhkp8pr', form.current, {
//         publicKey: 'V56q0q58EpY26DJP1',
//       })
//       .then(
//         () => {
//           console.log('SUCCESS!');
//         },
//         (error) => {
//           console.log('FAILED...', error.text);
//         },
//       );
//   };
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, Linkedin, MapPin } from 'lucide-react';

export default function Contact() {
  const form = useRef();
  const [isDisabled, setIsDisabled] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsDisabled(true); // Disable the button immediately on submit

    emailjs
      .sendForm('service_59ez7t5', 'template_hhkp8pr', form.current, {
        publicKey: 'V56q0q58EpY26DJP1',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          // Re-enable button after 5 seconds
          setTimeout(() => {
            setIsDisabled(false);
          }, 5000);
        },
        (error) => {
          console.log('FAILED...', error.text);
          setIsDisabled(false); // Re-enable if failed
        },
      );
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Get In <span className="text-purple-600">Touch</span>
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-purple-50 rounded-full text-purple-600">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-medium">Email</h3>
                  <a
                    href="mailto:pankaj.coder7@gmail.com"
                    className="text-gray-600 hover:text-purple-600"
                  >
                    pankaj.coder7@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-purple-50 rounded-full text-purple-600">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <a
                    href="tel:+917723803977"
                    className="text-gray-600 hover:text-purple-600"
                  >
                    +91 7723803977
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-purple-50 rounded-full text-purple-600">
                  <Linkedin size={24} />
                </div>
                <div>
                  <h3 className="font-medium">LinkedIn</h3>
                  <a
                    href="https://www.linkedin.com/in/pankaj-panchal-4b977031b"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-purple-600"
                  >
                    Connect with me
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-purple-50 rounded-full text-purple-600">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-medium">Location</h3>
                  <p className="text-gray-600">Vellore, Tamil Nadu, India</p>
                </div>
              </div>
            </div>

            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                name="title"/>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
               name="name" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                name="message"></textarea>
              </div>
              {/* <button
                type="submit"
                className="w-full bg-purple-600 text-white py-2 px-6 rounded-lg hover:bg-purple-700 transition-colors">
                Send Message
              </button> */}
              <button
  type="submit"
  disabled={isDisabled}
  className={`w-full py-2 px-6 rounded-lg transition-colors ${
    isDisabled
      ? 'bg-gray-400 cursor-not-allowed'
      : 'bg-purple-600 hover:bg-purple-700 text-white'
  }`}
>
  {isDisabled ? 'Please wait...' : 'Send Message'}
</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}