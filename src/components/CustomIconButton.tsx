interface Props {
  onClick?: () => void;
  children: React.ReactNode;
}

export default function CustomIconButton({ onClick, children }: Props) {
  return (
    <button onClick={onClick} className={`bg-gray-100 rounded-md mr-1`}>
      {children}
    </button>
  );
}
