"use client";
import React, { useState } from "react";
import { Button, Container, Typography } from "@mui/material";
import InfoDialog from "@/components/InfoDialog";

const ShowDialog: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Material-UI Dialog Example
      </Typography>
      <Button variant="outlined" onClick={() => setOpen(true)}>
        Open Dialog
      </Button>

      <InfoDialog open={open} onClose={() => setOpen(false)} />
    </Container>
  );
};

export default ShowDialog;
