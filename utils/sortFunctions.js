import data from "../public/datos_prueba.json";


export function sortData({ tableData, sortKey, reverse }) {
    if (!sortKey) return tableData;

    const sortedData = data.sort((a, b) => {
      return a[sortKey] > b[sortKey] ? 1 : -1;
    });

    if (reverse) {
      return sortedData.reverse();
    }

    return sortedData;
  }

  export function SortButton({ sortOrder, columnKey, sortKey, onClick }) {
    return (
      <button
        onClick={onClick}
        className={`${
          sortKey === columnKey && sortOrder === "desc"
            ? "sort-button sort-reverse"
            : "sort-button"
        }`}
      >
        ▲
      </button>
    );
  }



