import { useState } from 'react';
import { useRouter } from 'next/router';
import { useGetTil } from '@/api/hooks/til';
import Comment from '@/components/TILWrite/Comments/Comment';
import CommentPatchModal from '@/components/TILWrite/Comments/CommentPatchModal';
import Header from '@/components/TILWrite/Comments/Header';
import TextAreaSection from '@/components/TILWrite/Comments/TextAreaSection';
import * as Styled from '@/components/TILWrite/Comments/style';
import { useModalState } from '@/hooks/useModalState';

interface CommentsProps {
  asideMount: boolean;
  handleCloseCommentAside: () => void;
}

const Comments = (props: CommentsProps) => {
  const { asideMount, handleCloseCommentAside } = props;

  const [selectedCommentId, setSelectedCommentId] = useState<number>(0);

  const { query } = useRouter();
  const { isOpen, handleOpen, handleClose } = useModalState(false);
  const { tilDetail } = useGetTil({
    roadmapId: Number(query.roadmapId),
    stepId: Number(query.stepId),
    tilId: Number(query.tilId),
  });

  const handleSelectComment = (commentId: number) => {
    setSelectedCommentId(commentId);
  };

  return (
    <Styled.TILViewRoot
      initial="closed"
      animate={asideMount ? 'open' : 'closed'}
      variants={{
        open: { opacity: 1 },
        closed: { opacity: 0 },
      }}
      transition={{ type: 'tween' }}>
      <Styled.HeaderContainer>
        <Header handleCloseCommentAside={handleCloseCommentAside} />
      </Styled.HeaderContainer>

      <Styled.CommentContainer>
        {tilDetail?.comments.map((comment) => {
          return (
            <Comment
              handlePatchModalOpen={handleOpen}
              handleSelectComment={handleSelectComment}
              key={comment.id}
              {...comment}
            />
          );
        })}
      </Styled.CommentContainer>

      <TextAreaSection />

      <CommentPatchModal selectedCommentId={selectedCommentId} onClose={handleClose} isOpen={isOpen} />
    </Styled.TILViewRoot>
  );
};

export default Comments;
