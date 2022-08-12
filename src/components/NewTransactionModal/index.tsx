import * as Dialog from "@radix-ui/react-dialog";
import { X } from "phosphor-react";
import { ButtonClose, Content, Overlay } from "./styles";

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Nova transação</Dialog.Title>
        <ButtonClose>
          <X size={24} />
        </ButtonClose>
        <form action="">
          <input type="text" placeholder="Descrição" required />
          <input type="number" placeholder="Valor" required />
          <input type="text" placeholder="Categoria" required />

          <button type="submit">Cadastrar</button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
