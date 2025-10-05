import { IoLocationSharp } from "react-icons/io5";

export type ExperienceItemProps = {
    workType: string;
    description: React.ReactNode | string;
    companyName: string;
    startDate: string;
    endDate: string;
    role: string;
    location: string;
}

export default function ExperienceItem(props: ExperienceItemProps) {
    return (
        <div className="p-3 font-poppins text-white">
            <h1 className="text-lg font-semibold">{props.role}</h1>
            <div className="flex gap-1.5">
                <IoLocationSharp className="text-rose-800" />
                <p className="text-sm">
                    {props.companyName} - {props.location} ({props.workType})
                </p>
            </div>
            <span className="text-sm italic">{props.startDate} - {props.endDate}</span>
            <p className="text-sm">{props.description}</p>
        </div>
    )
}