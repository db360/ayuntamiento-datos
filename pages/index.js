import { useContext } from "react";

import Hero from "../components/Hero";
import DataTable from "../components/DataTable";
import Chart from "../components/Chart";

import { DataContext } from "../context/dataContext";

export default function Home() {
  const { formattedData } = useContext(DataContext);

  // console.log(formattedData);

  return (
    <>
      <Hero />
      <Chart />
      <DataTable />
    </>
  );
}
