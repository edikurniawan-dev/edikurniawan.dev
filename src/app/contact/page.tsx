import React from "react";
import FormContact from "./components/form-contact";

export const metadata = {
  title: "Contact",
  description:
    "Feel free to reach out if you need web development services. As a web developer, I'm ready to help bring your digital projects to life.",
};

export default function Contact() {
  return (
    <>
      <h1 className="text-2xl font-bold">Contact</h1>

      <p className="mt-5">
        Feel free to reach out if you need web development services. As a web developer, I&apos;m ready to help bring
        your digital projects to life.
      </p>

      <div className="mx-auto mt-5 flex justify-center">
        <FormContact />
      </div>
    </>
  );
}
