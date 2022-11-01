import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import styles from './index.module.scss'
import Side from './svg'
import { useMediaQuery } from 'react-responsive'

function Items({ currentItems, setPage, page }) {
   return (
      <>
         {currentItems &&
            currentItems.map((item) => {
               const style = page == item ? styles.container__item_active : styles.container__item
               return (
                  <div key={item} onClick={() => setPage(item)} className={style}>
                     <h3>{item}</h3>
                  </div>
               )
            }
            )}
      </>
   );
}

function PaginatedItems({ items, page, setPage, ...args }) {
   // We start with an empty list of items.
   const [pageCount, setPageCount] = useState(0)
   const [itemsPerPage, setItemsPerPage] = useState(10)
   const isMobile = useMediaQuery({ query: '(max-width: 540px)' })
   useEffect(() => {
      if (isMobile) {
         setItemsPerPage(6)
      }
      if (!isMobile) {
         setItemsPerPage(10)
      }
   }, [isMobile])
   const [currentItems, setCurrentItems] = useState(null)
   // Here we use item offsets; we could also use page offsets
   // following the API or data you're working with.
   const [itemOffset, setItemOffset] = useState(0);

   useEffect(() => {
      // Fetch items from another resources.
      const endOffset = itemOffset + itemsPerPage;
      setCurrentItems(items.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(items.length / itemsPerPage));
   }, [itemOffset, itemsPerPage, items]);

   // Invoke when user click to request another page.
   const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % items.length;
      setItemOffset(newOffset);
   };

   return (
      <div {...args} className={styles.container}>
         <div className={styles.container__block}><Items page={page} setPage={setPage} currentItems={currentItems} /></div>
         <ReactPaginate
            breakClassName={styles.breakMe}
            containerClassName={styles.pagination}
            subContainerClassName={styles.pagination__pages}
            activeClassName={styles.active}
            pageClassName={styles.pages}
            previousClassName={styles.left}
            nextClassName={styles.right}
            breakLabel="..."
            nextLabel={<Side isLeft={false} />}
            previousLabel={<Side isLeft={true} />}
            onPageChange={handlePageClick}
            pageRangeDisplayed={9}
            pageCount={pageCount}
            renderOnZeroPageCount={null}
         />
      </div>
   );
}

export default PaginatedItems
// <PaginatedItems itemsPerPage={4} />


