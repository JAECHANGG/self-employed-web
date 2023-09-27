import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

interface Props {
  boardPreviewTitle: string;
  items: BoardPreviewMockType[];
}

interface BoardPreviewMockType {
  title: string;
  isLike: number;
}

export const ExpandBoardPreviewPresenter: React.FC<Props> = ({
  boardPreviewTitle,
  items,
}) => {
  return (
    <div className="flex flex-col mt-20 border border-blue-200 p-4 rounded-lg">
      <span className="text-2xl font-semibold mb-4">{boardPreviewTitle}</span>
      <div>
        {items.map((item, index) => (
          <div key={index} className="flex justify-between items-center py-2">
            <div className="w-80">
              <span className="text-base overflow-ellipsis whitespace-nowrap overflow-hidden">
                {item.title}
              </span>
            </div>
            <div className="w-10 flex items-center text-red-500">
              <FavoriteBorderIcon style={{ height: 17 }} />
              <span>{item.isLike}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// const Wrap = styled.div`
//   display: flex;
//   flex-direction: column;
//   margin-top: 20px;
//   border: 3px solid #f6f7fe;
//   padding: 15px 20px;
//   border-radius: 10px;
// `;

// const TitleLabel = styled.span`
//   font-size: 20px;
//   font-weight: 600;
//   margin-bottom: 20px;
// `;

// const ContentWrap = styled.div``;

// const ContentItemWrap = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 10px 0;
// `;

// const LeftContentItemWrap = styled.div`
//   width: 80%;
// `;
// const ItemTitleLabel = styled.span`
//   display: block;
//   font-size: 16px;
//   white-space: nowrap;
//   text-overflow: ellipsis;
//   overflow: hidden;
// `;

// const RightContentItemWrap = styled.div`
//   display: flex;
//   justify-content: flex-end;
//   align-items: center;
//   width: 50px;
// `;
