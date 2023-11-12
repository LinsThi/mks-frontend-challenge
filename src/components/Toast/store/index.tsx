import { create } from "zustand";

import {
  MessageProps,
  StateProps,
  StoreProps,
  TypeMessageToastProps,
} from "../@types";

const initialState: StateProps = {
  messages: [],
};

export const useToast = create<StoreProps>((set, get) => ({
  state: initialState,
  actions: {
    showToast: (type: TypeMessageToastProps, text: string) => {
      const newMessage: MessageProps = {
        id: 10,
        type,
        text,
        finished: false,
      };

      set((prev) => ({
        state: {
          ...prev.state,
          messages: [...prev.state.messages, newMessage],
        },
      }));
    },
    addToast: (type: TypeMessageToastProps, text: string) => {
      const id = get().state.messages.length + 1;

      const newMessage: MessageProps = {
        id,
        type,
        text,
        finished: false,
      };

      set((prev) => ({
        state: {
          messages: [...prev.state.messages, newMessage],
        },
      }));
    },
    messageTimesUp: (messageID: number) => {
      const arrayMessages = get().state.messages;

      const findIndex = arrayMessages.findIndex(
        (currentMessage) => currentMessage.id === messageID
      );

      if (findIndex > -1) {
        arrayMessages[findIndex].finished = true;
        set(() => ({
          state: {
            messages: arrayMessages,
          },
        }));

        setTimeout(() => {
          get().actions.removeMessage(findIndex);
        }, 900);
      }
    },
    removeMessage: (indexMessage: number) => {
      const arrayMessages = get().state.messages;

      arrayMessages.splice(indexMessage, 1);
      set(() => ({
        state: {
          messages: arrayMessages,
        },
      }));
    },
  },
}));
