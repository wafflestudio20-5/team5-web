import { useCallback, useEffect, useRef, useState } from "react";
import { fetchShopProducts } from "../../api/shop";
import Header from "../../components/header";
import ShopProduct from "../../components/shop-product";
import { shopProduct } from "../../types/shopProduct";
import { ProductWrapper } from "./shop-page.styled";

const ShopPage = () => {
  const [products, setProducts] = useState<shopProduct[]>([]);
  const [page, setPage] = useState(1);
  const [hasNextPage, setNextPage] = useState(true);
  const [isFetching, setFetching] = useState(false);

  const getProducts = useCallback(async () => {
    const res = await fetchShopProducts(page);
    setPage((prev) => prev + 1);
    setProducts((prev) => [...prev, ...res?.data.results]);
    setNextPage(res?.data.next ? true : false);
    setFetching(false);
  }, [page]);

  useEffect(() => {
    if (isFetching && hasNextPage) {
      getProducts();
    } else if (!hasNextPage) {
      setFetching(false);
    }
  }, [isFetching]);
  //   if (products.length === 0) {
  //     return (
  //       <>
  //         <Header />
  //       </>
  //     );
  //   }

  console.log(products);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <Header />
      <ProductWrapper>
        {products?.map((product) => (
          <div key={product.id}>
            <ShopProduct product={product} />
          </div>
        ))}
      </ProductWrapper>
    </>
  );
};

export default ShopPage;
