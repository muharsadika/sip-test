import { useState} from "react";
import { useServiceHeaders } from "../../hooks/useServiceHeaders";
import { useServiceDetails } from "../../hooks/useServiceDetails";
import { IServiceHeader } from "../../types";
import ServiceHeaderItem from "../common/ServiceHeaderItem";
import ModalFotoPersyaratan from "../common/ModalFotoPersyaratan";
import ModalTtdPerjanjian from "../common/ModalTtdPerjanjian";
import ModalBpkb from "../common/ModalBpkb";

interface ItemAcceptance {
  [key: string]: boolean;
}

function HomeTest() {
  const [openModal, setOpenModal] = useState(false)
  const [modalTitle, setModalTitle] = useState("")
  const [done, setDone] = useState<ItemAcceptance>({});

  const { data: serviceHeaders, isLoading: isLoadingHeaders } = useServiceHeaders();
  const { data: serviceDetails, isLoading: isLoadingDetails } = useServiceDetails();

  const handleModal = (title: string) => {
    setModalTitle(title)
    setOpenModal(true)
  }

  const handleAcceptModal = () => {
    setOpenModal(false);
    setDone({ ...done, [modalTitle]: true });
  };

  if (isLoadingHeaders || isLoadingDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="my-20 mx-auto w-1/2 bg-blue-50 justify-center">
      <div className="px-6 py-12">
        <div className="flex flex-col text-center gap-5 mb-10">
          <p className="text-4xl font-bold">
            List Pengerjaan Service
          </p>
          <p className="">
            Silahkan selesaikan Pengerjaan Service ini, jika sudah selesai klik tombol "Order Selesai"
          </p>
          <p className="text-red-600">
            * Mandatory (harus dilengkapi)
          </p>
        </div>

        <div>
          {serviceHeaders.map((header: IServiceHeader) => (
            <ServiceHeaderItem key={header.id} header={header} onClick={handleModal} done={done} />
          ))}
        </div>
        <div className="flex justify-center items-center mt-20">
          <button className="bg-blue-500 text-white px-10 py-3 rounded-lg font-semibold">Submit</button>
        </div>
      </div>

      {modalTitle === "Foto Persyaratan" && (
        <ModalFotoPersyaratan
          show={openModal}
          onClose={() => setOpenModal(false)}
          handleDraftModal={handleAcceptModal}
          handleSaveModal={handleAcceptModal}
          serviceDetails={serviceDetails}
        />
      )}

      {modalTitle === "Tanda Tangan Perjanjian" && (
        <ModalTtdPerjanjian
          show={openModal}
          onClose={() => setOpenModal(false)}
          handleDraftModal={handleAcceptModal}
          handleSaveModal={handleAcceptModal}
          serviceDetails={serviceDetails}
        />
      )}

      {modalTitle === "BPKB Kendaraan" && (
        <ModalBpkb
          show={openModal}
          onClose={() => setOpenModal(false)}
          handleDraftModal={handleAcceptModal}
          handleSaveModal={handleAcceptModal}
          serviceDetails={serviceDetails}
        />
      )}
    </div>
  )
}

export default HomeTest