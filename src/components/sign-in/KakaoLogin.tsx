"use client";

import "./kakao-login.css";

const KakaoLogin = () => {
  const REST_API_KEY = `${process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY}`; // REST API KEY
  const REDIRECT_URI = `${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URL}`; // Redirect URI
  // 요청 URL
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const handleKakaoLogin = () => {
    // 클릭시 요청 URL로 이동
    window.location.href = kakaoURL;
  };

  return (
    <button className="kakao-button" onClick={handleKakaoLogin}>
      카카오 로그인
    </button>
  );
};

export default KakaoLogin;
