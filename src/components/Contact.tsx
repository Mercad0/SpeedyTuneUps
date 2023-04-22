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
        {contacts.map(
          ({ name, position, phoneNumber, address, mainTitle, email }) => (
            <li key={name} className="mb-2 flex flex-col">
              <h2 className="md:text-2xl text-lg font-bold mb-2">
                {mainTitle}
              </h2>
              <h3 className="md:text-lg text-base font-semibold mb-2 font-mono">
                {name}
              </h3>
              <span className="md:text-base text-sm font-medium">
                {position}
              </span>
              <span className="md:text-base text-sm font-medium">{email}</span>
              <span className="mb-2">{phoneNumber}</span>
              <span>{address}</span>
            </li>
          )
        )}
      </ul>
    </div>
  );
};
