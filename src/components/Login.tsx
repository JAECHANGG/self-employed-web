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
        <div key={id}>
          <button
            className="w-full transform rounded-md bg-gray-700 px-4 py-2 mb-2 tracking-wide text-white transition-colors duration-200 hover:bg-gray-600 focus:bg-gray-600 focus:outline-none"
            onClick={() => signIn(id, { callbackUrl })}
          >
            {`${name} 로그인`}
          </button>
        </div>
      ))}
    </>
  );
}
