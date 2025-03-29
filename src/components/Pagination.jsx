import React from 'react';

const Pagination = ({ page, setPage, totalPages }) => {
  return (
    <div className="pagination">
      <div className="pagination-buttons">
        {/* ✅ Prev Button ko tabhi dikhayenge jab page > 1 ho */}
        {page > 1 && (
          <button onClick={() => setPage(page - 1)}>
            Prev
          </button>
        )}

        {/* ✅ Next Button ko tabhi dikhayenge jab page < totalPages ho */}
        {page < totalPages && (
          <button onClick={() => setPage(page + 1)}>
            Next
          </button>
        )}
      </div>

      {/* ✅ Page X of Y ko neeche show kiya */}
      <div className="pagination-info">
        <span>
          Page {page} of {totalPages}
        </span>
      </div>
    </div>
  );
};

export default Pagination;



