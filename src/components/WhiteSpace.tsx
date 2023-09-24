interface Props {
  height?: string;
}

const WhiteSpace: React.FC<Props> = ({ height }) => {
  return <div style={{ height: `${height || "10px"}` }} />;
};

export default WhiteSpace;
