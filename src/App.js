import "./App.css";
import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import { Container } from "@mui/system";
import { Grid } from "@mui/material";
import SliderSelect from "./Components/SliderSelect";
import TenureSelect from "./Components/TenureSelect";
import Result from "./Components/Result";

function App() {
  const [data, setData] = useState({
    homeValue: 3000,
    downPayment: 3000 * 0.2,
    loanAmount: 3000 * 0.8,
    loanTerm: 5,
    interestRate: 5,
  });

  return (
    <React.Fragment>
      <div className="App">
        <Navbar />
        <Container maxWidth="x1" sx={{ marginTop: 4 }}>
          <Grid container spacing={5} alignItems="center">
            <SliderSelect data={data} setData={setData} />
            <TenureSelect />
          </Grid>
          <Grid item xs={12} md={6}>
            <Result />
          </Grid>
        </Container>
      </div>
    </React.Fragment>
  );
}

export default App;
