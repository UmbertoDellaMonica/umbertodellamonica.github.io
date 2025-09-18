"use client";
import React, { useRef, useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { MdOutlineEmail } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { importantInfo } from "@/app/lib/static_info";

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [messageSent, setMessageSent] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  // Recupera tutto l'oggetto contact
  const contactText = t("contact", { returnObjects: true }) as {
    title: string;
    send: string;
    sendM: string;
    name: string;
    mail: string;
    message: string;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const userID = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    e.preventDefault();
    setMessageSent(true);

    if (formRef.current) {
      emailjs
        .sendForm(
          "service_36b9u4p",
          "template_49zqar2",
          formRef.current,
          "RPkPEHuXhGLJs5ql3"
        )
        .then(
          (result) => console.log(result.text),
          (error) => console.log(error.text)
        );
    }

    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="py-20">
      <h2 className="text-3xl font-bold text-center text-white mb-12">
        {contactText.title}
      </h2>
      <div className="container mx-auto grid lg:grid-cols-[30%_58%] gap-x-[12%] gap-y-8">
        {/* Contact Options */}
        <div className="flex flex-col justify-center gap-5">
          <article className="bg-gray-800 p-5 rounded-xl text-center border border-transparent hover:border-blue-500 hover:bg-transparent transition">
            <MdOutlineEmail className="text-2xl mb-2 mx-auto" />
            <h4 className="font-medium text-white">Email</h4>
            <h5 className="text-gray-400">{importantInfo.contactEmail}</h5>
            <a
              href={`mailto:${importantInfo.contactEmail}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-sm text-blue-400 hover:underline"
            >
              {contactText.sendM}
            </a>
          </article>
        </div>

        {/* Contact Form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-5"
        >
          <input
            type="text"
            placeholder={contactText.name}
            name="user_name"
            required
            className="w-full p-4 rounded-md bg-transparent border-2 border-blue-500 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          <input
            type="email"
            placeholder={contactText.mail}
            name="user_email"
            required
            className="w-full p-4 rounded-md bg-transparent border-2 border-blue-500 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          <textarea
            placeholder={contactText.message}
            rows={7}
            name="message"
            required
            className="w-full p-4 rounded-md bg-transparent border-2 border-blue-500 text-white resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          ></textarea>
          <button
            type="submit"
            className="px-6 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            {contactText.send}
          </button>
          {messageSent && (
            <span className="text-sm text-gray-300">
              Thanks, I will reply ASAP 🙂
            </span>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
