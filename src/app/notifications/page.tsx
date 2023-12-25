import { FireIcon } from "@/components/image/FireIcon";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "알림페이지",
  description: "장사의 신에서 보낸 알림을 확인하실 수 있습니다.",
};

export default function NotificationsPage() {
  return (
    <>
      <div className="flex justify-between items-center px-5 my-3">
        <div className="w-8 h-8 bg-green-700 rounded-full flex items-center justify-center mr-5">
          <FireIcon
            style={{
              width: 20,
              height: 20,
            }}
          />
        </div>
        <div className="w-11/12 flex flex-col items-start text-white">
          <span className="text-sm">
            개발하는 사람들에 읽지 않은 새 메시지가 있습니다. 일주일 동안 어떤
            대화가 오갔는지 확인해 보세요.
          </span>
          <span className="text-xs opacity-70">10개월 전</span>
        </div>
      </div>
      <div className="flex justify-between items-center px-5 my-3">
        <div className="w-8 h-8 bg-green-700 rounded-full flex items-center justify-center mr-5">
          <FireIcon
            style={{
              width: 20,
              height: 20,
            }}
          />
        </div>
        <div className="w-11/12 flex flex-col items-start text-white">
          <span className="text-sm">
            개발하는 사람들에 읽지 않은 새 메시지가 있습니다. 일주일 동안 어떤
            대화가 오갔는지 확인해 보세요.개발하는 사람들에 읽지 않은 새
            메시지가 있습니다. 일주일 동안 어떤 대화가 오갔는지 확인해 보세요.
          </span>
          <span className="text-xs opacity-70">10개월 전</span>
        </div>
      </div>
      <div className="flex justify-between items-center px-5 my-3">
        <div className="w-8 h-8 bg-green-700 rounded-full flex items-center justify-center mr-5">
          <FireIcon
            style={{
              width: 20,
              height: 20,
            }}
          />
        </div>
        <div className="w-11/12 flex flex-col items-start text-white">
          <span className="text-sm">
            개발하는 사람들에 읽지 않은 새 메시지가 있습니다. 일주일 동안 어떤
            대화가 오갔는지 확인해 보세요.
          </span>
          <span className="text-xs opacity-70">10개월 전</span>
        </div>
      </div>
    </>
  );
}
