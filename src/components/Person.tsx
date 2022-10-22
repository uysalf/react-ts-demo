// type PersonProps = {
//   name: {
//     first: string;
//     last: string;
//   };
// };
import { PersonProps } from "./Person.types";
export const Person = (props: PersonProps) => {
  return (
    <div>
      <div>
        <h1>Person.tsx</h1>
      </div>
      {props.name.first} {props.name.last}
    </div>
  );
};
