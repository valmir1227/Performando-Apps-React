import {List, ListRowRenderer} from "react-virtualized"
import { ProductItem } from "./ProductItem";

interface SearchResultsProps {
  totalPrice: number;
  results: Array<{
    id: number;
    price: number;
    title: string;
    priceFormated: string;
  }>;
  onAddToWishList: (id: number) => void;
}

export default function SearchResults({ totalPrice, results, onAddToWishList
}: SearchResultsProps) {
  const rowRenderer: ListRowRenderer = ({index, key, style}) => {
  return (
<div key={key} style={style}>
    <ProductItem
      product={results[index]}
      onAddToWishList={onAddToWishList}
    />
</div>
  );
}

return (
  <div>
    <h2>{totalPrice}</h2>

    <List
      height={300}
      rowHeight={25}
      width={900}
      overscanRowCount={5}
      rowCount={results.length}
      rowRenderer={rowRenderer}
    />
  </div>
)
}