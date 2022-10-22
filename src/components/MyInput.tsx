import React from "react";

type MyInputProps = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

// const MyInput = (props: MyInputProps) => {
//   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     console.log(event);
//   };
//   return (
//     <div>
//       {/* <input type="text" value={props.value} onChange={props.handleChange} /> */}
//       <input type="text" value={props.value} onChange={handleInputChange} />
//     </div>
//   );
// };

const MyInput = ({ value, handleChange }: MyInputProps) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };
  return (
    <div>
      {/* <input type="text" value={props.value} onChange={props.handleChange} /> */}
      <input type="text" value={value} onChange={handleInputChange} />
    </div>
  );
};

export default MyInput;
