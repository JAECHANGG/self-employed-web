import { googleSignInApi } from "@/api/sign-in/google-sign-in-api";
import { signIn } from "@/util/sign-in";
import { redirect } from "next/navigation";

interface Props {
  searchParams: {
    code: string;
  };
}

export default function GoogleRedirectHandler({ searchParams }: Props) {
  //   const searchParams = useSearchParams();
  //   const GOOGLE_CODE = searchParams?.get("code");
  const GOOGLE_CODE = searchParams.code;

  const getToken = async () => {
    try {
      if (!GOOGLE_CODE) {
        return;
      }
      const { data } = await googleSignInApi.getToken(GOOGLE_CODE);
      console.log("google getToken", data.access_token);
      getUserInfo(data.access_token);
    } catch (e) {
      console.log("error", e);
    }
  };

  const getUserInfo = async (accessToken: string) => {
    try {
      const { data } = await googleSignInApi.getUserInfo(accessToken);
      const params = {
        id: data.sub,
        email: data.email,
        nickname: data.name,
      };
      const profile = await signIn(params);
      console.log(profile);
      // setProfile(profile);
      console.log("google getUserInfo", data);
      redirect("/fuck");
    } catch (e) {
      console.log(e);
    }
  };

  getToken();

  //   useEffect(() => {
  //     // 백엔드로 값을 넘겨주는 로직
  //     getToken();
  //   }, []);

  return <div>코드 작동이 완료되면 다시 홈으로 이동합니다.</div>;
}
