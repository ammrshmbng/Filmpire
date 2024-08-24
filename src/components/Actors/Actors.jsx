import { useState } from 'react';
import { Box, Button, CircularProgress, Grid, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowBack } from '@mui/icons-material';

function Actors() {
  const { id } = useParams();

  return (
    <div>Actors {id}</div>
  );
}

export default Actors;
