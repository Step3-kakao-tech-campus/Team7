import { useState } from 'react';
import { useRouter } from 'next/router';
import { usePatchRoadmapGroupMemberRole } from '@/api/hooks/roadmap';
import type { Member, Role } from '@/api/roadmap/type';
import { roleStatus } from '@/api/roadmap/type';
import Avatar from '@/components/common/Avatar';
import Button from '@/components/common/Button';
import Select from '@/components/common/Select';
import type { SelectOption } from '@/components/common/Select';
import * as Styled from './style';

const selectOptionItems: SelectOption[] = [
  {
    label: '매니저',
    value: 'manager',
  },
  {
    label: '멤버',
    value: 'member',
  },
];

interface TableColumnProps extends Member {
  myRole?: Role;
}

const TableColumn = (props: TableColumnProps) => {
  const { id: memberId, myRole, name, image, role: userRole } = props;

  const [selectedOption, setSelectedOption] = useState<SelectOption>({
    label: roleStatus[userRole],
    value: userRole,
  });

  const { query } = useRouter();
  const { patchRoadmapGroupMemberRole } = usePatchRoadmapGroupMemberRole();

  const handleChangeRole = (option: SelectOption) => {
    patchRoadmapGroupMemberRole({
      roadmapId: Number(query.roadmapId),
      userId: memberId,
      role: option.value as Exclude<Role, null>,
    });
  };

  return (
    <tr>
      <td>
        <Avatar imageUrl={image} alt="프로필 이미지" imageSize={46} />
        {name}
      </td>

      {myRole === 'master' ? (
        <td>
          {userRole === 'master' ? (
            <Styled.RenderUserRole>마스터</Styled.RenderUserRole>
          ) : (
            <Select
              selectedOption={selectedOption}
              onChangeOption={(option) => setSelectedOption(option)}
              callbackFunction={handleChangeRole}
              options={selectOptionItems}
            />
          )}
        </td>
      ) : (
        <td>
          <Styled.RenderUserRole>{roleStatus[userRole]}</Styled.RenderUserRole>
        </td>
      )}

      {myRole === 'master' && (
        <td>
          <Button variant="primary" css={Styled.ButtonStyles}>
            강퇴
          </Button>
        </td>
      )}
    </tr>
  );
};

export default TableColumn;