import React from "react";
import roadMap from "../roadmap/roadmap.scss";
import {
  SiAmd,
  SiBitcoinsv,
  SiApple,
  SiWindows,
  SiAmazon,
  SiCisco,
  SiIntel,
  SiAndroid,
} from "react-icons/si";

export default function Roadmap() {
  const RoadDate = [
    {
      date: "May 2019",
      name: "AMD",
      desc: "The Digital Pound Foundation hosted its inaugural webinar this Wednesday (10 November 2019), addressing the need for a digital Pound.",
      icon: <SiAmd />,
    },
    {
      date: "April 2020",
      name: "Bitcoin",
      desc: "Sat alongside William Lovell was Richard Ells, Founder and CEO of the ETN-Network.",
      icon: <SiBitcoinsv />,
    },
    {
      date: "June 2021",
      name: "Apple",
      desc: "We were also welcomed by originating members, Jannah Patchay of Markets Evolution",
      icon: <SiApple />,
    },
    {
      date: "September 2021",
      name: "Windows",
      desc: "This is a brilliantly concise statement as to the importance of the roles that the UK ",
      icon: <SiWindows />,
    },
    {
      date: "August 2021",
      name: "Amazon",
      desc: "It was at this point William Lovell, Head of Future Technology at the Bank of England. ",
      icon: <SiAmazon />,
    },
    {
      date: "Mart 2022",
      name: "Cisco",
      desc: "Echoing the recent announcement from the Bank of England that no CBDC.",
      icon: <SiCisco />,
    },
    {
      date: "April 2023",
      name: "Intel",
      desc: "Got a technical question on Solana? Ask on the Solana StackExchange",
      icon: <SiIntel />,
    },
    {
      date: "July 2023",
      name: "Android",
      desc: "Quickly build your program with the Solana Playground Web IDE",
      icon: <SiAndroid />,
    },
  ];
  return (
    <div className="roadmap flex column gap">
      <div className="roadmap-box text-center">
        <div className="roadmap-box__subtitle sub">
          <h3>Roadmap</h3>
        </div>
        <div className="roadmap-box__title">
          <h2>How Investing Can Change Your Future</h2>
        </div>
      </div>
      <div className="roadmap-inner flex gap">
        {RoadDate.map(({ date, name, desc, icon }, index) => {
          return (
            <div className="roadmap-inner__map flex column gap-1 a-start">
              <div className="roadmap-inner__icon flex j-center a-center">
                {icon}
              </div>
              <h3 className="roadmap-inner__data">{date}</h3>
              <h3 className="roadmap-inner__name">{name}</h3>
              <p className="roadmap-inner__desc sub">{desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
