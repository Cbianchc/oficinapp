import React, { useState } from 'react';
import { Container,TextField, Box, Button, Typography, List, InputAdornment, ListItemText, Card, CardContent, CardActions, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const Info = [
  {
    titulo: "clave netflix",
    clave: "123456",
    url: "www.netflix.com"
  },
  {
    titulo: "wifi",
    clave: "123456",
    url: ""
  },
  {
    titulo: "otra clave",
    clave: "123456",
    url: "www.login.com"
  }
];

const Claves = () => {
  const [visibleIndexes, setVisibleIndexes] = useState([]);

  const handleToggleVisibility = (index) => {
    setVisibleIndexes((prevVisibleIndexes) =>
      prevVisibleIndexes.includes(index)
        ? prevVisibleIndexes.filter((i) => i !== index)
        : [...prevVisibleIndexes, index]
    );
  };

  return (
    <Container>
      <Box display="flex" justifyContent="space-between" alignItems="center" my={2}>
        <Typography variant="h4">Lista de Claves</Typography>
        <Button variant="contained" color="primary" startIcon={<AddIcon />}>
          Add Nuevo
        </Button>
      </Box>

      <List>
        {Info.map((item, index) => (
          <Card key={index} sx={{ mb: 2, boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h6">{item.titulo}</Typography>
              <TextField
                type={visibleIndexes.includes(index) ? 'text' : 'password'}
                value={item.clave}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => handleToggleVisibility(index)}>
                        {visibleIndexes.includes(index) ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
                fullWidth
                variant="standard"
                readOnly
              />
              {item.url && (
                <Typography variant="body2">URL: <a href={item.url} target="_blank" rel="noopener noreferrer">{item.url}</a></Typography>
              )}
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">Editar</Button>
            </CardActions>
          </Card>
        ))}
      </List>
    </Container>
  );
};

export default Claves;

