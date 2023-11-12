import { useEffect } from "react";

import { useTheme } from "styled-components";

import iconError from "../../assets/x_circle.svg";
import iconSuccess from "../../assets/check_circle.svg";

import { IconToastProps } from "./@types";
import { useToast } from "./store";
import {
  ButtonCloseToast,
  Container,
  ContentToast,
  IconToast,
  MessageToast,
  Timer,
} from "./styles";

function Toast() {
  const {
    state: { messages },
    actions: { messageTimesUp, removeMessage },
  } = useToast();
  const { COLORS } = useTheme();

  useEffect(() => {
    const removeMessageAfterDelay = (messageId: number) => {
      setTimeout(() => {
        messageTimesUp(messageId);
      }, 3000);
    };

    messages.forEach((currentMessage) => {
      removeMessageAfterDelay(currentMessage.id);
    });
  }, [messageTimesUp, messages]);

  const iconToast: IconToastProps = {
    success: (
      <IconToast
        src={iconSuccess}
        alt="icon-toast"
        color={COLORS.GREEN_SECONDARY}
      />
    ),
    error: (
      <IconToast
        src={iconError}
        alt="icon-toast"
        color={COLORS.ERROR_SECONDARY}
      />
    ),
  };

  return messages.map((currentMessage, index) => (
    <Container
      key={currentMessage.id}
      $typeMessage={currentMessage.type}
      style={{
        bottom: index * 110 + 20,
      }}
      $shouldHide={currentMessage.finished}
    >
      <ContentToast>
        <ButtonCloseToast onClick={() => removeMessage(index)}>
          x
        </ButtonCloseToast>

        {iconToast[currentMessage.type]}

        <MessageToast $typeMessage={currentMessage.type}>
          {currentMessage.text}
        </MessageToast>
      </ContentToast>
      <Timer $typeMessage={currentMessage.type} />
    </Container>
  ));
}

export default Toast;
