"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { RecoilRoot } from "recoil";
import "./provider.css";
import { signIn, useSession } from "next-auth/react";
import LoginPage from "./auth/login/page";
import HomePage from "./page";

interface Props {
  children: ReactNode;
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 5 * 1000,
      // enabled : false 값이면 자동 호출하지 않고 사용하는 곳마다 true로 설정해줘야 한다.

      // retry : 서버 통신 실패시 재시도 횟수, 0으로 하면 유저에게 빠른 응답을 보여줄 수 있음

      // suspense : true로 설정하면 status === 'loading'일 때 쿼리가 일시 중단

      // keepPreviousData : 새 쿼리 키를 기반으로 가져올 때 이전 '데이터'를 유지

      // optimisticResults : 쿼리가 실제로 가져오기를 시작하기 전에 결과를 가져오는 상태로 낙관적으로 설정

      // useErrorBoundary : 에러가 뜬다면 ErrorBoundary fallback
      // 에러 바운더리는 API에 대한 에러는 잡지 못한다. 왜냐하면 API 요청과 응답은 비동기로 동작한다. class component도 함수다.
      // 요청을 보낼 때는 에러 바운더리의 실행 컨텍스트가 존재했지만 API 응답이 에러로 오는 순간에는 에러 바운더리의 실행 컨텍스트는 존재하지 않는다.
    },
    mutations: {
      // useErrorBoundary
    },
  },
});

export function Provider({ children }: Props) {
  const { data: session } = useSession();
  console.log({ session });

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        {/* <button onClick={() => signIn()}>login</button> */}
        <div className="app-wrap">{children}</div>
      </RecoilRoot>
    </QueryClientProvider>
  );
}
