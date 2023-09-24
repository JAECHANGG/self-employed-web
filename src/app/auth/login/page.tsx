import Login from "@/components/Login";

import "./page.css";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { getProviders } from "next-auth/react";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

interface Props {
  searchParams: {
    callbackUrl: string;
  };
}

const LoginPage = async ({ searchParams: { callbackUrl } }: Props) => {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/");
  }

  const providers = (await getProviders()) ?? {};
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
        <Login providers={providers} callbackUrl={callbackUrl} />
      </div>
    </div>
  );
};

export default LoginPage;
