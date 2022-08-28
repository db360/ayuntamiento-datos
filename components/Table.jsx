import { useCallback, useState } from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import data from "../public/datos_prueba.json";

function sortData({tableData, sortKey, reverse}) {
  if(!sortKey ) return tableData;

  const sortedData = data.sort((a, b) => {
    return a[sortKey] > b[sortKey] ? 1 : -1
  })

  if(reverse) {
    return sortedData.reverse()
  }

  return sortedData
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
  return (
    <div>
      <Table className="">
        <Thead>
          <Tr>
            {headers.map((row) => {
              return <Td className="text-cyan-800 font-bold text-xl text-center" key={row.key}>{row.label}</Td>;
            })}
          </Tr>
        </Thead>
        <Tbody>
          {sortedData().map((dato) => (
            <Tr className="hover:bg-gray-100 md:h-28" key={dato.name}>
              <Td className="text-cyan-700 font-bold text-center">
                {dato.name}
              </Td>
              <Td className="text-center">{dato.tipo}</Td>
              <Td className="text-left">{dato.objetivo_contrato}</Td>
              <Td className="text-center">{dato.status}</Td>
              <Td className="text-center">{dato.importe}€</Td>
              <Td className="text-center">{dato.fecha}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </div>
  );
}

export default DataTable;
