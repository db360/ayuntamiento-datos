import { useCallback, useState } from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import moment from 'moment';
import data from "../public/datos_prueba.json";

function sortData({ tableData, sortKey, reverse }) {
  if (!sortKey) return tableData;

  const sortedData = data.sort((a, b) => {
    return a[sortKey] > b[sortKey] ? 1 : -1;
  });

  if (reverse) {
    return sortedData.reverse();
  }

  return sortedData;
}

function SortButton({ sortOrder, columnKey, sortKey, onClick }) {
  return (<button onClick={onClick} className={`${sortKey === columnKey && sortOrder === 'desc' ? 'sort-button sort-reverse' : 'sort-button'}`}>🔼</button>)
}

function DataTable({ data }) {
  const [sortKey, setSortKey] = useState("name");
  const [sortOrder, setSortOrder] = useState("desc");

  const headers = [
    { key: "name", label: "Name" },
    { key: "tipo", label: "Tipo" },
    { key: "objetivo_contrato", label: "Objetivo Contrato" },
    { key: "status", label: "Status" },
    { key: "importe", label: "Importe" },
    { key: "fecha", label: "Fecha" },
  ];

  const sortedData = useCallback(
    () => sortData({ tableData: data, sortKey, reverse: sortOrder === "desc" }),
    [data, sortKey, sortOrder]
  );

  // console.log(sortedData())

  function changeSort(key) {
    setSortOrder(sortOrder === 'ascn' ? 'desc' : 'ascn')
    setSortKey(key);
  };

  const formattedData = sortedData().map((data) => {

    const fechaFormat = moment(data.fecha, "DD/MM/YYYY", true).format("DD/MM/YYYY");
    const importe = parseFloat(data.importe.replace(",", ""));

    return {
      importe,
      fechaFormat,
      name: data.name,
      contrato: data.objetivo_contrato,
      status: data.status,
      tipo: data.tipo
    };

  });

  console.log({formattedData});

  return (
    <div>
      <Table className="">
        <Thead>
          <Tr className="">
            {headers.map((row) => {
              return (
                <Td
                  className="text-cyan-800 font-bold text-center"
                  key={row.key}
                >
                  {row.label}
                  <SortButton
                    columnKey={row.key}
                    onClick={() => changeSort(row.key)}
                    {...{
                      sortOrder,
                      sortKey
                    }}
                  />
                </Td>
              );
            })}
          </Tr>
        </Thead>
        <Tbody>
          { formattedData.map(data =>
            <Tr className="hover:bg-gray-100 md:h-28" key={data.name}>
              <Td className="text-cyan-700 font-bold text-center"> {data.name}</Td>
              <Td className="text-center">{data.tipo}</Td>
              <Td className="text-left">{data.contrato}</Td>
              <Td className="text-center">{data.status}</Td>
              <Td className="text-center">{data.importe}€</Td>
              <Td className="text-center">{data.fechaFormat}</Td>
            </Tr>)}
        </Tbody>
      </Table>
    </div>
  );
}

export default DataTable;
