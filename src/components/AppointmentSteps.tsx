/**
 * This code was generated by Builder.io.
 */
import React from "react";

interface Step {
  number: string;
  title: string;
  description: string;
}

const AppointmentStep: React.FC<Step> = ({ number, title, description }) => (
  <>
    <div className="flex gap-5 self-start">
      <div className="overflow-hidden px-5 text-3xl leading-none text-center text-white whitespace-nowrap bg-[linear-gradient(101deg,#0E948A_21%,#C5EAE9_93.51%)] h-[52px] rounded-[100px] w-[52px]">
        {number}
      </div>
      <div className="flex-auto my-auto text-3xl leading-none text-neutral-700">
        {title}
      </div>
    </div>
    <div className="self-end mt-1 text-base font-semibold leading-6 text-neutral-500 max-md:max-w-full">
      {description}
    </div>
  </>
);

const AppointmentSteps: React.FC = () => {
  const steps: Step[] = [
    {
      number: "1",
      title: "Choose Your Treatment",
      description:
        "Choose Your Treatment: Tailored options for personalised care at our clinic. Select from a range of expert treatments designed to meet your unique health needs.",
    },
    {
      number: "2",
      title: "Make Booking",
      description:
        "Make a Booking: Secure your appointment at our clinic with ease. Schedule your treatment today for personalised care at your convenience.",
    },
    {
      number: "3",
      title: "Meet Your Doctor",
      description:
        "Meet Your Doctor: Connect with our experienced physicians for personalised care. Get to know the experts dedicated to your health and well-being.",
    },
  ];

  return (
    <section className="self-center mt-32 max-w-full w-[1164px] max-md:mt-10">
      <h2 className="self-center mt-32 text-4xl font-bold leading-tight text-center text-neutral-700 max-md:mt-10 max-md:max-w-full">
        How make an appointment
      </h2>
      <p className="self-center mt-5 text-base font-semibold leading-6 text-center text-zinc-400 w-[766px] max-md:max-w-full">
        Navigating your healthcare journey with Best clinic is seamless. Just
        follow these steps mentioned below to proceed with your selected
        services. You can also see our FAQ section for more guidance:
      </p>
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-3/5 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col w-full font-bold max-md:mt-1.5 max-md:max-w-full">
            {steps.map((step, index) => (
              <AppointmentStep key={index} {...step} />
            ))}
          </div>
        </div>
        <div className="flex flex-col ml-5 w-2/5 max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/59d4883bbeb705322c99f972bdeaa6bc27d75382880eb43f7040baa659321d74?placeholderIfAbsent=true&apiKey=d34435c2f52d468e948b79f730126110"
            className="object-contain grow mt-6 w-full rounded-none aspect-[1.25] max-md:mt-8 max-md:max-w-full"
            alt="Doctor appointment illustration"
          />
        </div>
      </div>
    </section>
  );
};

export default AppointmentSteps;
