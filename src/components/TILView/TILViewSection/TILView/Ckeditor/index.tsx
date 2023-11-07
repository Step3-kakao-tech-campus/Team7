import Editor from 'ckeditor5-custom-build/build/ckeditor';
import { useRouter } from 'next/router';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { useGetTil } from '@/api/hooks/til';
import * as Styled from '@/components/TILWrite/TILWriteSection/TILEditor/Ckeditor/style';

const CkEditor = () => {
  const { query } = useRouter();

  const { tilDetail } = useGetTil({
    roadmapId: Number(query.roadmapId),
    stepId: Number(query.stepId),
    tilId: Number(query.tilId),
  });

  return (
    <Styled.Root isReadOnly={true}>
      <CKEditor
        editor={Editor}
        data={tilDetail?.submitContent || ''}
        onReady={(editor) => {
          editor.enableReadOnlyMode('');
        }}
      />
    </Styled.Root>
  );
};

export default CkEditor;