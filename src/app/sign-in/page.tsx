import WhiteSpace from "../../components/WhiteSpace";
import GoogleLogin from "../../components/sign-in/GoogleLogin";
import KakaoLogin from "../../components/sign-in/KakaoLogin";
import NaverLogin from "../../components/sign-in/NaverLogin";

import "./page.css";

export const SignInPage = () => {
  return (
    <div className="sign-in-page-wrap">
      <div className="logo-wrap">
        <img
          className="logo-image"
          width={200}
          height={200}
          src="https://yt3.googleusercontent.com/ytc/AOPolaTZzFi9FuptnL36UNZ4q2zNXPjtn4hVk9FGGlpX=s900-c-k-c0x00ffffff-no-rj"
          alt="logo image"
        />
        <div className="logo-title">장사의 신</div>
      </div>
      <div className="login-wrap">
        <GoogleLogin />
        <WhiteSpace />
        <NaverLogin />
        <WhiteSpace />
        <KakaoLogin />
      </div>
    </div>
  );
};

export default SignInPage;
