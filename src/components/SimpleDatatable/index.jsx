import { Grid } from '@mui/material';
import React from 'react';
import MUIDataTable from 'mui-datatables';

const SimpleDatatable = () => {
    const title = "Table";
    const data = [
        ["Paola", "García", "Trujillo"],
        ["Julio", "López", "Chiclayo"],
        ["Jorge", "Gómez", "Cusco"],
        ["Maria", "Rogriguez", "Lima"],
        ["Mauricio 2", "Aguilar", "Pucalpa"],
        ["Paola 2", "García", "Trujillo"],
        ["Julio 2", "López", "Chiclayo"],
        ["Jorge 2", "Gómez", "Cusco"],
        ["Maria 2", "Rogriguez", "Lima"],
        ["Mauricio 3", "Aguilar", "Pucalpa"],
        ["Paola 3", "García", "Trujillo"],
        ["Julio 3", "López", "Chiclayo"],
        ["Jorge 3", "Gómez", "Cusco"],
        ["Maria 3", "Rogriguez", "Lima"],
        ["Mauricio 3", "Aguilar", "Pucalpa"],
    ];
    const columns = ["Nombre", "Apellido", "Cuidad"];
    const options = {};
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        My SimpleDatatable
      </Grid>
      <Grid item xs={12}>
        <MUIDataTable title={title} data={data} columns={columns} options={options} />
      </Grid>
    </Grid>
  );
}

export default SimpleDatatable;
