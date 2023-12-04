"use client";

import { ClientSafeProvider, signIn } from "next-auth/react";

interface Props {
  providers: Record<string, ClientSafeProvider>;
  callbackUrl: string;
}

export default function Login({ providers, callbackUrl }: Props) {
  return (
    <>
      {Object.values(providers).map(({ name, id }) => (
        <div className="w-72" key={id}>
          <button
            className={`w-full transform rounded-md px-4 py-2 mb-2 tracking-wide transition-colors duration-200 focus:outline-none ${
              id === "kakao"
                ? "bg-myColor-kakao-yellow hover:bg-yellow-300 focus:bg-yellow-300 text-black"
                : id === "naver"
                ? "bg-myColor-naver-green hover:bg-green-500 focus:bg-green-500 text-white"
                : "bg-white hover:bg-slate-100 focus:bg-slate-100 text-black border border-slate-300"
            }`}
            onClick={() => signIn(id, { callbackUrl })}
          >
            {`${name} 로그인`}
          </button>
        </div>
      ))}
    </>
  );
}
