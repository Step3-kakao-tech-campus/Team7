import { memo } from 'react';
import { useRouter } from 'next/router';
import { useGetTil } from '@/api/hooks/til';
import ExtensionIcon from '@/components/TILWrite/TILWriteSection/Header/ExtensionIcon';
import ExtensionInfoModal from '@/components/TILWrite/TILWriteSection/Header/ExtensionInfoModal';
import Icon from '@/components/common/Icon';
import Logo from '@/components/common/Logo';
import TILY_LINKS from '@/constants/links';
import { useModalState } from '@/hooks/useModalState';
import * as Styled from './style';

interface HeaderProps {
  TILContent: string;
  handleOpenCommentAside: () => void;
}

const Header = (props: HeaderProps) => {
  const { TILContent, handleOpenCommentAside } = props;

  const router = useRouter();
  const { isOpen, handleClose, handleOpen } = useModalState();

  const { tilDetail } = useGetTil({
    roadmapId: Number(router.query.roadmapId),
    stepId: Number(router.query.stepId),
    tilId: Number(router.query.tilId),
  });

  return (
    <Styled.Root>
      <button onClick={() => router.push(TILY_LINKS.home())}>
        <Logo type="logo" imageSize={32} />
      </button>
      <Styled.Title>{tilDetail?.step.title}</Styled.Title>

      <Styled.IconContainer>
        <ExtensionIcon TILContent={TILContent} handleModalOpen={handleOpen} />

        {!tilDetail?.isPersonal && (
          <Icon onClick={handleOpenCommentAside} iconName="ic_commentBlack" imageSize={32} ext="svg" alt="코멘트" />
        )}
      </Styled.IconContainer>
      <ExtensionInfoModal isOpen={isOpen} handleClose={handleClose} />
    </Styled.Root>
  );
};

export default memo(Header);