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
    <article className="box-border px-4 flex flex-col justify-center items-center w-full h-full">
      <Image
        className="rounded-full mb-12"
        width={200}
        height={200}
        src="https://yt3.googleusercontent.com/ytc/AOPolaTZzFi9FuptnL36UNZ4q2zNXPjtn4hVk9FGGlpX=s900-c-k-c0x00ffffff-no-rj"
        alt="logo image"
      />
      <Login providers={providers} callbackUrl={callbackUrl} />
    </article>
  );
};

export default LoginPage;
