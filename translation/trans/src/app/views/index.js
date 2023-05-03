import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

const LIMIT = 5;
const TOTAL = 30;

const api = {
  fetchItems: async ({ limit = LIMIT, offset = 0 } = {}) => ({
    data: Array.from({ length: limit }, (_, i) => `Item-${offset + i}`),
    total: TOTAL,
  }),
};

function Index() {
  const [items, setItems] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const startPage = searchParams;
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState();
  if (startPage) {
    setPage(startPage);
  }
  console.log(startPage);

  const prev = (e) => {
    e.preventDefault();
    setPage((page) => page - 1);

    // setSearchParams({ greeting: "bonjour" });
    setSearchParams({ pageno: page, limit: LIMIT });
  };
  //console.log(seachparams);

  const next = () => {
    setPage((page) => page + 1);
    // setSearchParams({ pageno: page, limit: LIMIT });
  };

  useEffect(() => {
    api.fetchItems({ offset: (page - 1) * LIMIT }).then(({ data, total }) => {
      setItems(data);
      setTotal(total);
    });
  }, [page]);
  //console.log("item<<", items);
  return (
    <>
      <p>Total Items : {total}</p> <p>Page : {page}</p>
      {items.map((i) => (
        <p key={i}>{i}</p>
      ))}
      <button onClick={prev} disabled={page === 1}>
        Previous
      </button>
      <button onClick={next} disabled={page * LIMIT >= total}>
        Next
      </button>
    </>
  );
}

export default Index;
