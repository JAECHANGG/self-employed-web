"use client";
// import { v4 as uuidv4 } from "uuid";

import "./google-login.css";

const GoogleLogin = () => {
  const GOOGLE_CLIENT_ID = `${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}`;
  const GOOGLE_REDIRECT_URL = `${process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URL}`;
  const STATE = "test";
  // const SECURITY_TOKEN = uuidv4();

  // GOOGLE_AUTH_URL에 들어갈 파라미터가 많은데 다 이해하지 못해서 몇 개 생략함
  // 공식 문서보고 필요한 거 다시 넣을 수 있으면 넣어야 함
  const GOOGLE_AUTH_URL = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${GOOGLE_CLIENT_ID}&scope=openid%20email%20profile&redirect_uri=${GOOGLE_REDIRECT_URL}&state=${STATE}`;

  const handleGoogleLogin = async () => {
    // // 클릭시 요청 URL로 이동
    window.location.href = GOOGLE_AUTH_URL;
  };

  return (
    <button className="google-button" onClick={handleGoogleLogin}>
      구글 로그인
    </button>
  );
};

export default GoogleLogin;
