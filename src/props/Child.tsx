interface ChildProps {
  color: string;
}

const Child = ({ color }: ChildProps) => {
  return <div>{color}</div>;
};

export default Child;
