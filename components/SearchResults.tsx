import { ProductItem } from "./ProductItem";

interface SearchResultsProps {
  results: Array<{
    id: number;
    price: number;
    title: string;
  }>;
  onAddToWishList: (id: number) => void;
}

export default function SearchResults({
  results,
  onAddToWishList,
}: SearchResultsProps) {
  return (
    <div>
      {results.map((product) => {
        return (
          <ProductItem
            key={product.id}
            onAddToWishList={onAddToWishList}
            product={product}
          />
        );
      })}
    </div>
  );
}
