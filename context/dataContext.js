import moment from "moment";
import { createContext, useCallback, useState } from "react";
import data from "../public/datos_prueba.json";
import { sortData } from "../utils/sortFunctions";

export const DataContext = createContext();

// const importe = parseFloat(data.importe.replace(",", ""))

export const DataProvider = ({ children }) => {
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

  function changeSort(key) {
    setSortOrder(sortOrder === "ascn" ? "desc" : "ascn");
    setSortKey(key);
  }

  const sortedData = useCallback(
    () => sortData({ tableData: data, sortKey, reverse: sortOrder === "desc" }),
    [data, sortKey, sortOrder]
  );

  const formattedData = sortedData().map((data) => {
    const fechaFormat = moment(data.fecha, "DD/MM/YYYY", true).format(
      "DD/MM/YYYY"
    );
    const importe = parseFloat(data.importe.replace(",", ""));

    return {
      importe,
      fechaFormat,
      name: data.name,
      contrato: data.objetivo_contrato,
      status: data.status,
      tipo: data.tipo,
    };
  });

  return (
    <DataContext.Provider
      value={{ formattedData, changeSort, sortOrder, sortKey, headers }}
    >
      {children}
    </DataContext.Provider>
  );
};
