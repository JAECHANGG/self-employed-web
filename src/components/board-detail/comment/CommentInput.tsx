import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

export const CommentInput = () => {
  return (
    <div className="flex items-center">
      <input
        className="w-full py-2 px-4 bg-gray-100 mr-2 rounded-lg"
        type="text"
        placeholder="댓글을 입력해주세요"
      />
      <div className="flex items-center justify-center">
        <SendOutlinedIcon style={{ height: 30 }} />
      </div>
    </div>
  );
};
