// type ListProps = {
//   items: string[] | number[];
//   onClick: (value: string | number) => void;
// };

type ListProps<T> = {
  items: T[];
  onClick: (value: T) => void;
};
//Generic Props Video 19-https://www.youtube.com/watch?v=xFNk2nfDh4M&list=PLC3y8-rFHvwi1AXijGTKM0BKtHzVC-LSK&index=19
// type ListProps<T> = {
//   items: T[];
//   onClick: (value: T) => void;
// };
const List = <T extends { id: number }>({ items, onClick }: ListProps<T>) => {
  return (
    <div>
      <h2>List of items</h2>
      {items.map((item, index) => {
        return (
          <div key={index} onClick={() => onClick(item)}>
            {item.id}
          </div>
        );
      })}
    </div>
  );
};

export default List;
