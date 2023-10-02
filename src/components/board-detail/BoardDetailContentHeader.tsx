import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export const BoardDetailContentHeader = () => {
  return (
    <div className="flex items-center">
      <div className="mr-6">
        <div className="w-12 h-12">
          <AccountCircleIcon style={{ height: "100%", width: "100%" }} />
        </div>
      </div>
      <div className="flex flex-col">
        <div className="font-bold">장사의 신중의 신</div>
        <div className="text-sm mt-1 opacity-70">07/19 17:50</div>
      </div>
    </div>
  );
};
