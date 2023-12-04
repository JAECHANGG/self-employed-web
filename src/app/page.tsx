import Login from "@/components/Login";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { getProviders } from "next-auth/react";
import Image from "next/image";
import { redirect } from "next/navigation";
import "./page.css";

interface Props {
  searchParams: {
    callbackUrl: string;
  };
}

const LoginPage = async ({ searchParams: { callbackUrl } }: Props) => {
  const session = await getServerSession(authOptions);
  console.log("session", session);
  if (session) {
    redirect("/home");
  }

  const providers = (await getProviders()) ?? {};
  return (
    <section className="box-border px-4 py-12 flex flex-col justify-between items-center h-screen w-full">
      <main className="flex flex-col items-center w-full">
        <Image
          className="logo-image"
          width={200}
          height={200}
          src="https://yt3.googleusercontent.com/ytc/AOPolaTZzFi9FuptnL36UNZ4q2zNXPjtn4hVk9FGGlpX=s900-c-k-c0x00ffffff-no-rj"
          alt="logo image"
        />
        <h1 className="mb-12">장사의 신</h1>
        <Login providers={providers} callbackUrl={callbackUrl} />
      </main>
      <footer className="w-full flex justify-around">
        {/* <span>문의하기</span>
        <span>이용약관</span> */}
      </footer>
    </section>
  );
};

export default LoginPage;
