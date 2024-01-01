import AuthContext from "@/components/AuthContext";
import { BottomNavigate } from "@/components/layout/BottomNavigate";
import { Content } from "@/components/layout/Content";
import { Header } from "@/components/layout/Header";
import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import { Noto_Sans_KR } from "next/font/google";
import { authOptions } from "./api/auth/[...nextauth]/route";
import "./globals.css";
import { Provider } from "./provider";

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: { default: "장사의 신", template: "장사의 신 | %s" },
  description: "장사의 신에 오신 것을 환영합니다.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en" className="bg-black">
      <body className={notoSansKR.className}>
        <AuthContext>
          <Provider>
            {session && <Header />}
            <Content>{children}</Content>
            {session && <BottomNavigate />}
          </Provider>
        </AuthContext>
        <div id="portal" />
      </body>
    </html>
  );
}
