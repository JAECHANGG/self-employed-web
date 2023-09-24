"use client";

import "./naver-login.css";

const NaverLogin = () => {
  const NAVER_CLIENT_ID = `${process.env.NEXT_PUBLIC_NAVER_CLIENT_ID}`;
  const NAVER_REDIRECT_URL = `${process.env.NEXT_PUBLIC_NAVER_REDIRECT_URL}`;
  const STATE = "test";
  const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&state=${STATE}&redirect_uri=${NAVER_REDIRECT_URL}`;

  const handleNaverLogin = () => {
    // 클릭시 요청 URL로 이동
    window.location.href = NAVER_AUTH_URL;
  };
  return (
    <button className="naver-button" onClick={handleNaverLogin}>
      네이버로 시작하기
    </button>
  );
};

export default NaverLogin;
