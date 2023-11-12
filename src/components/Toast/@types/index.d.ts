import { Element } from "react";

export type TypeMessageToastProps = "success" | "error";

export type MessageProps = {
  id: number;
  type: TypeMessageToastProps;
  text: string;
  finished: boolean;
};

export type StateProps = {
  messages: MessageProps[];
};

export type ActionProps = {
  showToast: (type: TypeMessageToastProps, text: string) => void;
  addToast: (type: TypeMessageToastProps, text: string) => void;
  messageTimesUp: (messageId: number) => void;
  removeMessage: (messageId: number) => void;
};

export type StoreProps = {
  state: StateProps;
  actions: ActionProps;
};

export type IconToastProps = {
  [key in TypeMessageToastProps]: Element;
};
