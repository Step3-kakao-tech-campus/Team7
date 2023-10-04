import qs from 'qs';
import { useRouter } from 'next/router';
import type { NextRouter } from 'next/router';

export const useParamsToUrl = () => {
  const router = useRouter();

  const getParamsToUrl = (queryParams: NextRouter['query']) => {
    // 현재 url의 query와 새로운 query를 합친다.
    const mergedParams = { ...router.query, ...queryParams };

    router.push(
      // qs.stringify: 객체를 쿼리스트링으로 변환
      `${router.pathname}${qs.stringify(mergedParams, {
        addQueryPrefix: true, // prefix로 ?를 붙여준다.
      })}`,
      undefined, // 두번째 옵션은 사용하지 않는다.
      {
        scroll: false, // 라우터 이동시 스크롤 위치 고정
      },
    );
  };

  return { getParamsToUrl };
};