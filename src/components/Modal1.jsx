import React from "react";
import { Modal, Button } from "antd";

const CustomModal = ({ visible, onClose, imageSrc, projectDetails }) => {
  return (
    <Modal
      visible={visible}
      onCancel={onClose}
      footer={[
        <Button key="close" onClick={onClose}>
          Close
        </Button>,
        <Button key="view" type="primary" onClick={() => window.open(projectDetails.link, "_blank")}>
          View Project
        </Button>,
      ]}
    >
      <div>
        <img src={imageSrc} alt="Project" />
      </div>
      <div>
        {projectDetails.description}
      </div>
    </Modal>
  );
};

export default CustomModal;
