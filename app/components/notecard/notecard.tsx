import Link from "next/link";

import { FiMoreHorizontal } from "react-icons/fi";

interface NoteCardProps {
  title: string;
  description: string;
  id: string;
  date:Date
}

const Notecard: React.FC<NoteCardProps> = ({ title, description,id ,date }) => {
  const dateTimeString: Date = date

  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };
  
  const dateTime: Date = new Date(dateTimeString);
  
  const formattedDate: string = new Intl.DateTimeFormat('en-US', options).format(dateTime);
  
  const formattedTime: string = new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  }).format(dateTime);

  
  return (
    <Link  href={`/detailpage/${id}`} className="bg-white rounded-lg shadow-md mt-4 p-4">
      <div className="mr-4 mb-2  ">
        <div className="flex justify-between items-center px-1">
          <div className="text-xl font-semibold mb-2">{title}</div>
          <div className="">
          
          </div>
        </div>
        <div className="text-gray-500">{description}</div>
      </div>
      <div className="flex justify-between">
        <div className="text-gray-500">
         {formattedDate} <a href="" className=""></a>
        </div>
        <div className="text-gray-500">{formattedTime}</div>
      </div>
    </Link>
  );
};

export default Notecard;
