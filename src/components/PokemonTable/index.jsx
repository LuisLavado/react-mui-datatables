import React, { useState, useEffect } from "react";
import MUIDataTable from "mui-datatables";
import { Grid } from "@mui/material";

const PokemonTable = () => {
    const [data, setData] = useState([]);
    const API = 'https://pokeapi.co/api/v2/pokemon?limit=20';
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(API);
                const results = await response.json();
                // console.log(results);
                // console.log(results.results);
                // setData(results.results);
                const pokemonData = await Promise.all(results.results.map(async (result) => {
                    const pokemonResponse = await fetch(result.url);
                    const pokemonData = await pokemonResponse.json();
                    console.log(pokemonData);
                    return {
                        id: pokemonData.id,
                        name: pokemonData.name,
                        image: pokemonData.sprites.front_default
                    }
                }));
                setData(pokemonData);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    // const title = 'Pokemon Table';
    const columns = [
        {
            label: 'Id',
            name: 'id'
        },
        {
            name: 'name',
            label: 'Pokemon'
        },
        {
            label: 'Image',
            name: 'image',
            options: {
                customBodyRender: (value) => (
                    <img
                        src={value}
                        alt="pokemon"
                        style={{width: '50px', height: '50px'}}
                    />
                )
            }
        }
    ];
    const options = {};

    return (
        <Grid container spacing={2} sx={{ padding: '24px' }}>
            <Grid item xs={12}>
                Pokemon Table
            </Grid>
            <Grid item xs={12}>
                <MUIDataTable data={data} columns={columns} options={options} />
            </Grid>
        </Grid>
    );
};

export default PokemonTable;