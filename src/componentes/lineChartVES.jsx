import { Card, Title, LineChart } from "@tremor/react";
import React, { useEffect, useState } from "react";
import jsonData from "../data/datosVES.json"; // Ajusta la ruta según la ubicación de tu archivo

const valueFormatter = (number) =>
  `${new Intl.NumberFormat("us").format(number).toString()}`;

export default () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    // Lógica para cargar datos desde el archivo JSON
    // Puedes hacer una solicitud HTTP, pero como es un archivo local, puedes importarlo directamente
    setChartData(jsonData.data);
  }, []); // Agrega un arreglo de dependencias vacío para que el efecto se ejecute solo una vez
  /*
  useEffect(() => {
    // Efecto para imprimir el estado actual de chartData
    console.log('Datos excel:', datosExcel);
  }, [datosExcel]);
  */
  return (
    <Card className="mx-auto mb-2 " >
      <Title>Precio del Dolar VZLA</Title>
      <LineChart
        className="mt-6"
        data={chartData}
        index="Fecha_formateada"
        categories={["Precio VES"]}
        colors={["emerald", "gray"]}
        valueFormatter={valueFormatter}
        yAxisWidth={30}
        autoMinValue={true}
        style={{
          //marginLeft: "-1em", // Ajusta la distancia a la izquierda
        }}
      />
    </Card>
  );
};
