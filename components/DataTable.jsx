import { useContext } from "react";
import { Table, Thead, Tbody, Tr, Td } from "react-super-responsive-table";

import { DataContext } from '../context/dataContext';
import { SortButton } from "../utils/sortFunctions";

function DataTable() {

  const { formattedData, changeSort, sortOrder, sortKey, headers } = useContext(DataContext)

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
                      sortKey,
                    }}
                  />
                </Td>
              );
            })}
          </Tr>
        </Thead>
        <Tbody>
          {formattedData.map((fdata) => (
            <Tr className="hover:bg-gray-100 md:h-28" key={fdata.name}>
              <Td className="text-cyan-700 font-bold text-center">
                {" "}
                {fdata.name}
              </Td>
              <Td className="text-center">{fdata.tipo}</Td>
              <Td className="text-left">{fdata.contrato}</Td>
              <Td className="text-center">{fdata.status}</Td>
              <Td className="text-center">{fdata.importe}€</Td>
              <Td className="text-center">{fdata.fechaFormat}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </div>
  );
}

export default DataTable;
