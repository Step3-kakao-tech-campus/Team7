import { useEffect } from 'react';
import { useForm, Controller, type SubmitHandler } from 'react-hook-form';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useMutation } from '@tanstack/react-query';
import styled from '@emotion/styled';
import { postJoin } from '@/api/auth';
import Button from '@/components/common/Button';
import Flex from '@/components/common/Flex';
import Input from '@/components/common/Input';
import Logo from '@/components/common/Logo';
import { useModalState } from '@/components/common/Modal/useModalState';
import { tilyLinks } from '@/constants/links';
import { NAME_REGEX, PASSWORD_REGEX } from '@/constants/regex';
import RegisterModal from './RegisterModal';

interface RegisterFormInput {
  email: string;
  name: string;
  password: string;
  passwordConfirm: string;
}

const Register = () => {
  const { mutateAsync, isLoading } = useMutation({ mutationFn: (data: RegisterFormInput) => postJoin(data) });

  const { isOpen, handleOpen, handleClose } = useModalState();

  const router = useRouter();

  const {
    control,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      name: '',
      password: '',
      passwordConfirm: '',
    },
    mode: 'onSubmit',
  });

  const onSubmit: SubmitHandler<RegisterFormInput> = async (formData) => {
    const data = await mutateAsync(formData);

    if (data?.code === 200) {
      handleOpen();
    } else {
      console.log('error');
    }
  };

  useEffect(() => {
    if (router.query['email']) {
      if (Array.isArray(router.query['email'])) {
        setValue('email', router.query['email'][0]);
      } else {
        setValue('email', router.query['email']);
      }
    }
  }, [router.query, setValue]);

  return (
    <>
      <StyledFlex dir="col" align="center" gap={2}>
        <Logo />
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="email"
            control={control}
            render={({ field }) => <Input label="이메일" placeholder="이메일을 입력해주세요." disabled {...field} />}
          />

          <Controller
            name="name"
            control={control}
            rules={{
              required: '필수 정보입니다.',
              pattern: {
                value: NAME_REGEX,
                message: '2~10글자의 이름만 사용 가능합니다.',
              },
            }}
            render={({ field }) => (
              <Input
                label="이름"
                placeholder="이름을 입력해주세요."
                message={errors.name?.message}
                status={errors.name ? 'error' : 'default'}
                {...field}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            rules={{
              required: '필수 정보입니다.',
              pattern: {
                value: PASSWORD_REGEX,
                message: '영문, 숫자, 특수문자 포함한 8~20자의 비밀번호만 사용가능합니다.',
              },
            }}
            render={({ field }) => (
              <Input
                type="password"
                label="비밀번호"
                placeholder="비밀번호를 입력해주세요."
                message={errors.password?.message}
                status={errors.password ? 'error' : 'default'}
                {...field}
              />
            )}
          />
          <Controller
            name="passwordConfirm"
            control={control}
            rules={{
              required: '필수 정보입니다.',
              validate: (value) => value === getValues('password') || '비밀번호와 일치하지 않습니다',
            }}
            render={({ field }) => (
              <Input
                type="password"
                label="비밀번호 확인"
                placeholder="비밀번호를 입력해주세요."
                message={errors.passwordConfirm?.message}
                status={errors.passwordConfirm ? 'error' : 'default'}
                {...field}
              />
            )}
          />
          <StyledButtonContainer>
            <Link href={tilyLinks.verify()}>취소</Link>
            <Button type="submit" isLoading={isLoading}>
              완료
            </Button>
          </StyledButtonContainer>
        </StyledForm>
      </StyledFlex>
      <RegisterModal isOpen={isOpen} handleClose={handleClose} />
    </>
  );
};

export default Register;

const StyledFlex = styled(Flex)`
  width: 100%;
`;

const StyledForm = styled.form`
  width: 100%;

  & > label {
    margin-bottom: 0.8rem;
  }
`;

const StyledButtonContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  float: right;

  & > * {
    padding: 0.5rem 1.2rem;
  }

  & > a {
    font-weight: 600;

    &:hover {
      text-decoration: underline;
    }
  }
`;
