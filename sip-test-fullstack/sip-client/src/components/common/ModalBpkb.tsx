import { Button, Modal as FlowbiteModal } from "flowbite-react";
import { IServiceDetail } from "../../types";

interface BpkbModalProps {
  show: boolean;
  onClose: () => void;
  handleDraftModal: () => void;
  handleSaveModal: () => void;
  serviceDetails: IServiceDetail[];
}

function BpkbModal({ show, onClose, handleDraftModal, handleSaveModal, serviceDetails }: BpkbModalProps) {
  return (
    <FlowbiteModal show={show} onClose={onClose}>
      <FlowbiteModal.Header></FlowbiteModal.Header>
      <FlowbiteModal.Body>
        <div className="space-y-6">
          {serviceDetails
            .filter((item) => (item.group === 'parent' || item.group === 'child') && item.id >= 15 && item.id <= 21)
            .map((item) => (
              <div key={item.id} className={` ${item.group === 'parent' ? 'text-2xl text-center font-semibold' : ''}`}>
                {item.type === 'checkbox' && (
                  <>
                    <input
                      type="radio"
                      id={`FormBpkb-${item.id}`}
                      name={`FormBpkb-${item.id}`}
                      className="mr-2"
                    />
                  </>
                )}
                <label>
                  {item.description}
                  {item.mandatory ? <span className="text-red-500"> *</span> : null}
                </label>
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

export default BpkbModal;