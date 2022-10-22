import { Name } from "./Person.types";
type PersonListProps = {
  names: Name[];
};

// type PersonListProps = {
//   names: {
//     first: string;
//     last: string;
//   }[];
// };

const PersonList = (props: PersonListProps) => {
  return (
    <div>
      <h1>PersonList.tsx</h1>
      {props.names.map((name) => {
        return <div key={name.first}>{`${name.first} ${name.last}`}</div>;
      })}
    </div>
  );
};

export default PersonList;
