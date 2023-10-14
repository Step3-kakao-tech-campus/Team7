import FocusTrap from 'focus-trap-react';
import { type PropsWithChildren, type HTMLAttributes, useRef } from 'react';
import { RemoveScroll } from 'react-remove-scroll';
import Image from 'next/image';
import type { SerializedStyles } from '@emotion/react';
import Portal from '@/components/common/Portal';
import { useOnClickOutside } from '@/hooks/useOnClickOutside';
import type { EmotionTheme } from '@/styles/emotion';
import * as Styled from './style';

export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  width?: number;
  isOpen?: boolean;
  onClose: () => void;
  modalContentStyles?: (theme: EmotionTheme) => SerializedStyles;
  closeButtonStyles?: (theme: EmotionTheme) => SerializedStyles;
  closeButtonSize?: number;
}

const Modal = (props: PropsWithChildren<ModalProps>) => {
  const {
    children,
    width,
    isOpen,
    onClose,
    modalContentStyles,
    closeButtonStyles,
    closeButtonSize = 24,
    ...rest
  } = props;

  const modalRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(modalRef, () => {
    onClose();
  });

  if (!isOpen) {
    return null;
  }

  return (
    <Portal>
      <Styled.Background>
        <Styled.Root
          initial="closed"
          animate={isOpen ? 'open' : 'closed'}
          variants={{
            open: { opacity: 1 },
            closed: { opacity: 0 },
          }}
          transition={{ type: 'tween', duration: 0.2 }}>
          <FocusTrap>
            <RemoveScroll>
              <Styled.Container role="dialog" ref={modalRef} width={width} {...rest}>
                <Styled.CloseButton css={closeButtonStyles} onClick={onClose}>
                  <Image
                    src="/assets/icons/ic_closeButton.svg"
                    alt="close"
                    width={closeButtonSize}
                    height={closeButtonSize}
                  />
                </Styled.CloseButton>
                <Styled.Content css={modalContentStyles}>{children}</Styled.Content>
              </Styled.Container>
            </RemoveScroll>
          </FocusTrap>
        </Styled.Root>
      </Styled.Background>
    </Portal>
  );
};

export default Modal;
