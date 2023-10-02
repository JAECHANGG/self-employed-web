import { FireIcon } from "@/components/image/FireIcon";

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
        <div className="w-11/12 flex flex-col items-start">
          <span className="text-sm">
            '개발하는 사람들'에 읽지 않은 새 메시지가 있습니다. 일주일 동안 어떤
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
        <div className="w-11/12 flex flex-col items-start">
          <span className="text-sm">
            '개발하는 사람들'에 읽지 않은 새 메시지가 있습니다. 일주일 동안 어떤
            대화가 오갔는지 확인해 보세요.'개발하는 사람들'에 읽지 않은 새
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
        <div className="w-11/12 flex flex-col items-start">
          <span className="text-sm">
            '개발하는 사람들'에 읽지 않은 새 메시지가 있습니다. 일주일 동안 어떤
            대화가 오갔는지 확인해 보세요.
          </span>
          <span className="text-xs opacity-70">10개월 전</span>
        </div>
      </div>
    </>
  );
}
