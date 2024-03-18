import { Button, Modal as FlowbiteModal } from "flowbite-react";
import { IServiceDetail } from "../../types";
import { GoUpload } from "react-icons/go";

interface FotoPersyaratanModalProps {
  show: boolean;
  onClose: () => void;
  handleDraftModal: () => void;
  handleSaveModal: () => void;
  serviceDetails: IServiceDetail[];
}

function FotoPersyaratanModal({ show, onClose, handleDraftModal, handleSaveModal, serviceDetails }: FotoPersyaratanModalProps) {

  const handleFileUpload = (itemId: number) => {
    console.log("Unggah file untuk item dengan ID:", itemId);
    const fileInput = document.getElementById(`FormFotoPersyaratan-${itemId}`) as HTMLInputElement;
    fileInput.click();
  };

  return (
    <FlowbiteModal show={show} onClose={onClose}>
      <FlowbiteModal.Header></FlowbiteModal.Header>
      <FlowbiteModal.Body>
        <div className="space-y-10">
          {serviceDetails
            .filter((item) => (item.group === 'parent' || item.group === 'child') && item.id >= 22 && item.id <= 42)
            .map((item) => (
              <div key={item.id} className={` ${item.group === 'parent' ? 'text-2xl text-center font-semibold' : ''}`}>
                <label>{item.description}</label>
                {item.mandatory ? <span className="text-red-500"> *</span> : null}
                {(item.type === 'photo' || item.type === 'video') && (
                  <>
                    <input hidden type="file" id={`FormFotoPersyaratan-${item.id}`} name={`FormFotoPersyaratan-${item.id}`} accept="image/*" className="form-control-file" />
                    <div className='w-full'>
                      <button onClick={() => handleFileUpload(item.id)} className="btn border rounded-lg w-full h-[100px]">
                        <div className="flex items-center justify-center">
                          <GoUpload className="text-xl" />
                          <span className="ml-2">Upload</span>
                        </div>
                      </button>
                    </div>
                  </>
                )}
              </div>
            ))}
        </div>
      </FlowbiteModal.Body>
      <FlowbiteModal.Footer className="flex justify-center gap-5">
        <Button onClick={handleDraftModal} className="bg-transparent text-black bordertext-black border-black">Draft</Button>
        <Button onClick={handleSaveModal}>Simpan</Button>
      </FlowbiteModal.Footer>
    </FlowbiteModal>
  );
}

export default FotoPersyaratanModal;