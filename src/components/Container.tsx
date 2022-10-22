type ContainerProps = {
  style: React.CSSProperties;
};
export const Container = (props: ContainerProps) => {
  return (
    <div>
      <div style={props.style}>Text content goes here</div>
      {/* <div style={{ border: "1px solid black", padding: "1rem" }}>
        Text content goes here
      </div> */}
    </div>
  );
};
