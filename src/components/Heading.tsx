type HeadingProps = {
  children: string;
};
const Heading = (props: HeadingProps) => {
  return (
    <div>
      <div>{props.children}</div>
    </div>
  );
};

export default Heading;
