import type { ApplyMember } from '@/api/roadmap/type';
import * as Styled from '@/components/Roadmap/manage/member/TableColumn/style';
import Avatar from '@/components/common/Avatar';
import Button from '@/components/common/Button';

interface TableColumnProps extends ApplyMember {
  handleUserId: (userId: number) => void;
  handleOpen: () => void;
}

const TableColumn = (props: TableColumnProps) => {
  const { id: memberId, name, image, date, handleUserId, handleOpen } = props;

  return (
    <>
      <tr>
        <td>
          <Avatar imageUrl={image} alt="프로필 이미지" imageSize={46} />
          {name}
        </td>

        <td>{date}</td>

        <td>
          <Button
            variant="primary"
            css={Styled.ButtonStyles}
            onClick={() => {
              handleOpen();
              handleUserId(memberId);
            }}>
            신청서 확인
          </Button>
        </td>
      </tr>
    </>
  );
};

export default TableColumn;
