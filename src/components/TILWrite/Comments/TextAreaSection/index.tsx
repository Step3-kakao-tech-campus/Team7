import { type FormEvent, useState } from 'react';
import { useRouter } from 'next/router';
import { usePostComment } from '@/api/hooks/til';
import Icon from '@/components/common/Icon';
import TextArea from '@/components/common/TextArea';
import * as Styled from './style';

const TextAreaSection = () => {
  const [content, setContent] = useState('');

  const { query } = useRouter();
  const { postComment } = usePostComment();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    postComment({
      roadmapId: Number(query.roadmapId),
      stepId: Number(query.stepId),
      tilId: Number(query.tilId),
      content,
    });
    setContent('');
  };

  return (
    <Styled.TextAreaContainer onSubmit={onSubmit}>
      <Styled.Container>
        <TextArea rows={3} value={content} onChange={(e) => setContent(e.target.value)} />
      </Styled.Container>

      <Icon iconName="ic_chatButton" imageSize={38} ext="svg" alt="전송" />
    </Styled.TextAreaContainer>
  );
};

export default TextAreaSection;
