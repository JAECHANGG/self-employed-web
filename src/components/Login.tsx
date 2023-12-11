"use client";

import { ClientSafeProvider, signIn } from "next-auth/react";
import GoogleLogo from "../../public/asset/svg/google_logo.svg";
import KakaoLogo from "../../public/asset/svg/kakao_logo.svg";
import NaverLogo from "../../public/asset/svg/naver_logo.svg";

interface Props {
  providers: Record<string, ClientSafeProvider>;
  callbackUrl: string;
}

interface logoType {
  [key: string]: JSX.Element;
}

const logos: logoType = {
  google: <GoogleLogo />,
  kakao: <KakaoLogo />,
  naver: <NaverLogo />,
};

export default function Login({ providers, callbackUrl }: Props) {
  return (
    <>
      {Object.values(providers).map(({ name, id }) => (
        <section className="w-full" key={id}>
          <button
            className={getButtonStyle(id)}
            onClick={() => signIn(id, { callbackUrl })}
          >
            {logos[id]}
            <span className="ml-2">{`${name} with login`}</span>
          </button>
        </section>
      ))}
    </>
  );
}

function getButtonStyle(id: string) {
  const baseStyle =
    "flex justify-center items-center w-full transform rounded-md px-4 py-3 mb-2 tracking-wide transition-colors duration-200 focus:outline-none font-semibold";
  const colorStyle = getButtonColorStyle(id);
  return `${baseStyle} ${colorStyle}`;
}

function getButtonColorStyle(id: string) {
  switch (id) {
    case "google":
      return "bg-white hover:bg-slate-100 focus:bg-slate-100 text-black border border-slate-300";
    case "kakao":
      return "bg-myColor-kakao-yellow hover:bg-yellow-300 focus:bg-yellow-300 text-black";
    case "naver":
      return "bg-myColor-naver-green hover:bg-green-500 focus:bg-green-500 text-white";
    default:
      throw new Error(`${id} 케이스를 찾을 수 없습니다.`);
  }
}
