import React, { useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
} from "@chakra-ui/react";

interface NewPostProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NewPost: React.FC<NewPostProps> = ({ isOpen, onClose }) => {
  const [paragraphs, setParagraphs] = useState<string[]>([""]);

  const handleAddParagraph = () => {
    setParagraphs((prevParagraphs) => [...prevParagraphs, ""]);
  };

  const handleRemoveParagraph = (index: number) => {
    setParagraphs((prevParagraphs) =>
      prevParagraphs.filter((_, i) => i !== index)
    );
  };

  const handleParagraphChange = (index: number, content: string) => {
    setParagraphs((prevParagraphs) => {
      const newParagraphs = [...prevParagraphs];
      newParagraphs[index] = content;
      return newParagraphs;
    });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Novo Post</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel>Post Title</FormLabel>
            <Input placeholder="Enter title" />
            {paragraphs.map((paragraph, index) => (
              <div key={index} style={{ marginTop: "10px" }}>
                <FormLabel>{`Paragraph ${index < 9 ? "0" : ""}${
                  index + 1
                }`}</FormLabel>
                <Textarea
                  placeholder={`Enter content for paragraph ${index + 1}`}
                  value={paragraph}
                  onChange={(e) => handleParagraphChange(index, e.target.value)}
                />
                <Button
                  mt={1}
                  colorScheme="red"
                  size="sm"
                  onClick={() => handleRemoveParagraph(index)}
                >
                  Remover Parágrafo
                </Button>
              </div>
            ))}
          </FormControl>

          <Button mt={4} onClick={handleAddParagraph}>
            Adicionar Novo Parágrafo
          </Button>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Fechar
          </Button>
          <Button colorScheme="green">Salvar</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
