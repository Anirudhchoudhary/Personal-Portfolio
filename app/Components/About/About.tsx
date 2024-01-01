"use client"

import {
    VerticalTimeline,
    VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const WorkIcon = () => <></>;

interface AboutProps {

}

const About: React.FC<AboutProps> = () => {

    const TimeLine = [
        {
            heading: "Ajeenkya D Y Patil University",
            description: "Completed my Graudation from Ajeenkya D Y Patil University with CGPA of 7.8.",
            side: "left",
            date: "2017-2021",
            key: 1,
        },
        {
            heading: "Intership (Sottware Engineer)",
            description: "Started my Intership at Knowledge Publishing Group (KPG) Skills used: ElectronJS, NodeJS and React.",
            side: "right",
            date: "2019( Nov) - 2020 ( April )",
            key: 2,
        },
        {
            heading: "Full Stack Developer",
            description: "Started my Carrer at Instahyre on Sept 2021. Skills Used: Django, Elasticsearch, MySql, NodeJs and ReactJS.",
            side: "left",
            date: "2021 ( Sept ) - 2022 ( Nov )",
            key: 3,
        },
        {
            heading: "Development Team Lead",
            description: "Promoted to Development Team Lead. Managing Team of 4. Using Agile approach to meet the company approach.",
            side: "right",
            date: "2022 ( Nov ) - Present",
            key: 4,
        },
    ]

    return (
        <VerticalTimeline
            layout="2-columns"
            animate={true}
            lineColor="black"
            className="text-black">
            {TimeLine.map((item) => (
                <VerticalTimelineElement
                    key={item.key}
                    className="vertical-timeline-element--work text-blue-50"
                    contentStyle={{ background: '#1C2321', color: '#000' }}
                    position={item.side}
                    visible={true}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date={item.date}
                    dateClassName="text-white lg:text-black"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#000' }}
                >
                    <h3 className="vertical-timeline-element-title text-white">{item.heading}</h3>
                    <p className="text-white"> {item.description} </p>
                </VerticalTimelineElement>
            ))}
        </VerticalTimeline>
    )
}

export default About;