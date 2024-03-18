import { FaCamera, FaFileSignature } from "react-icons/fa";
import { SiGoogledocs } from "react-icons/si";
import { FaCircleCheck } from "react-icons/fa6";
import { IServiceHeader } from "../../types";

interface ServiceHeaderItemProps {
  header: IServiceHeader;
  onClick: (title: string) => void;
  done: { [key: string]: boolean };
}

function ServiceHeaderItem({ header, onClick, done }: ServiceHeaderItemProps) {
  return (
    <div key={header.id} className="w-5/6 p-10 mb-7 mx-auto bg-white rounded-lg cursor-pointer" onClick={() => onClick(header.service_name)}>
      <div className="grid grid-cols-4">
        {header.service_name === "Foto Persyaratan" && <FaCamera className="text-3xl ml-20 " />}
        {header.service_name === "Tanda Tangan Perjanjian" && <FaFileSignature className="text-3xl ml-20" />}
        {header.service_name === "BPKB Kendaraan" && <SiGoogledocs className="text-3xl ml-20" />}
        <p className="text-lg font-bold col-span-2 ">{header.service_name} <span className="text-lg font-bold text-red-600">*</span></p>
        {done[header.service_name] && <FaCircleCheck className="text-3xl ml-10 " />}
      </div>
    </div>
  )
}

export default ServiceHeaderItem