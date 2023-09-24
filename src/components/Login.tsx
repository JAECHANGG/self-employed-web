"use client";

import { ClientSafeProvider, signIn } from "next-auth/react";
import React from "react";

interface Props {
  providers: Record<string, ClientSafeProvider>;
  callbackUrl: string;
}

export default function Login({ providers, callbackUrl }: Props) {
  return (
    <>
      {Object.values(providers).map(({ name, id }) => (
        <div key={id}>
          <button onClick={() => signIn(id, { callbackUrl })}>로그인</button>
        </div>
      ))}
    </>
  );
}
