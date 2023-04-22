import { title } from "process";
import React from "react";

interface ContactProps {
  contacts: {
    name: string;
    phoneNumber?: string;
    address?: string;
    email?: string;
    position?: string;
    mainTitle?: string;
  }[];
}

export const ContactUs = ({ contacts }: ContactProps) => {
  return (
    <div className="p-2 rounded-lg mb-8 w-fit mx-auto">
      <ul>
        {contacts.map(({ name, position, phoneNumber, address, mainTitle, email }) => (
          <li key={name} className="mb-4">
            <h2 className="md:text-2xl text-lg font-bold mb-4">{mainTitle}</h2>
            <h3 className="md:text-xl text-lg font-semibold mb-2 font-mono">
              {name}
            </h3>
            <h3 className="md:text-lg text-base font-medium my-1">{position}</h3>
            <p className="md:text-lg text-base font-medium">{email}</p>
            <p className="mb-2">{phoneNumber}</p>
            <p>{address}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
