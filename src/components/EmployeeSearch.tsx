import React, { useState } from "react";
import "../App.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { Tabs, Tab, Grid } from "@mui/material";

function createData(
  BU: string,
  EmpNo: number,
  Name: string,
  Dept: string,
  Sect: string,
  Desig: string,
  Grade: string,
  Level: string,
  Nationality: string,
  Type: string
) {
  return {
    BU,
    EmpNo,
    Name,
    Dept,
    Sect,
    Desig,
    Grade,
    Level,
    Nationality,
    Type,
  };
}

const rows = [
  createData(
    "DUB SHI",
    4,
    "Sylvia Nabukenya",
    "Shar Cost",
    "Cashiers",
    "Cashier",
    "4",
    "**",
    "Ugenda",
    "Exp"
  ),
  createData(
    "VLEB_269",
    57,
    "Wadin Karam",
    "R2002c_047",
    "D307c_032",
    "",
    "14",
    "",
    "Lebanese",
    "Local"
  ),
  createData(
    "VLEB_269",
    106,
    "Inas Inas Kleit",
    "R2002c_047",
    "",
    "D207C_031",
    "14",
    "",
    "Lebanese",
    "Local"
  ),
  createData(
    "VLEB_269",
    112,
    "Ali Ali Ahmed",
    "R2002C_047",
    "D207C_031",
    "",
    "14",
    "**",
    "Lebanese",
    "Local"
  ),
  createData(
    "P_P78",
    1005,
    "Mohmad Salem",
    "D42",
    "D42",
    "",
    "12",
    "**",
    "Egyptian",
    "Local"
  ),
  createData(
    "P_P87",
    1058,
    "Riham Ibrahim",
    "D01",
    "D01",
    "",
    "6",
    "**",
    "Egyptian",
    "Expert"
  ),
  createData(
    "LEGP_282",
    1073,
    "Osama Hassanein",
    "R1022L_087",
    "D307L_050",
    "Payroll Associate",
    "14",
    "**",
    "Egyptian",
    "Local"
  ),
];

export default function EmployeeSearch() {
  const [open, setOpen] = React.useState(false);

  // const handleChange = (event) => {
  //   setEmployeeFilter(event.target.value);
  // };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    // [`&.${tableCellClasses.head}`]: {
    //   backgroundColor: theme.palette.common.black,
    //   color: theme.palette.common.white,
    // },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
      border: "1px solid   #eee",
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {},
  }));
  const [select, setSelect] = React.useState("");

  const handleChange = (event: any) => {
    setSelect(event.target.value);
  };

  return (
    <Box sx={{ mx: 5 }}>
      <Typography variant="h4">Employee Search</Typography>

      <Box sx={{ display: "flex" }}>
        <Tabs>
          <Tab label="Admin Master" />
          <Tab label="Work Flow" />
          <Tab label={<Link to="/eligible">Employee</Link>} />
          <Tab label="System Maintenance" />
        </Tabs>
        <FormControl>
          <Select>
            <MenuItem>Common</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box className="filter">
        <Typography variant="h4">Search Employees</Typography>
      </Box>

      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          // aria-controls="panel3-content"
          // id="panel3-header"
          style={{ border: "1px solid grey" }}
        >
          Employee Filter
        </AccordionSummary>
        <AccordionDetails>
          <Grid container direction="row" sx={{ display: "flex" }} spacing="40">
            <Grid item direction="column">
              <Grid item>
                <Stack direction="row">
                  <Typography
                    sx={{ width: "50%", textAlign: "right", mx: "10px" }}
                  >
                    Company Name :
                  </Typography>
                  <FormControl>
                    <Select
                      id="demo-simple-select"
                      value={10}
                      onChange={handleChange}
                      sx={{ width: "250px", height: "20px" }}
                    >
                      <MenuItem value={10}>HRIS</MenuItem>
                      <MenuItem value={20}>NWS</MenuItem>
                      <MenuItem value={30}>--VIT--</MenuItem>
                    </Select>
                  </FormControl>
                </Stack>
              </Grid>
              <Grid item>
                <Stack direction="row">
                  <Typography
                    sx={{ width: "50%", textAlign: "right", mx: "10px" }}
                  >
                    Department :
                  </Typography>
                  <FormControl>
                    <Select
                      id="demo-simple-select"
                      value={10}
                      onChange={handleChange}
                      sx={{ width: "250px", height: "20px" }}
                    >
                      <MenuItem value={10}>IT</MenuItem>
                      <MenuItem value={20}>HR</MenuItem>
                      <MenuItem value={30}>Non Technical</MenuItem>
                    </Select>
                  </FormControl>
                </Stack>
              </Grid>
              <Grid item>
                <Stack direction="row">
                  <Typography
                    sx={{ width: "50%", textAlign: "right", mx: "10px" }}
                  >
                    Designation :
                  </Typography>
                  <FormControl>
                    <Select
                      id="demo-simple-select"
                      value={1}
                      onChange={handleChange}
                      sx={{ width: "250px", height: "20px" }}
                    >
                      <MenuItem value={1}>Software Engineer</MenuItem>
                      <MenuItem value={2}>Associate Engineer</MenuItem>
                      <MenuItem value={13}> Engineer</MenuItem>
                    </Select>
                  </FormControl>
                </Stack>
              </Grid>
              <Grid item>
                <Stack direction="row">
                  <Typography
                    sx={{ width: "50%", textAlign: "right", mx: "10px" }}
                  >
                    Grade :{" "}
                  </Typography>
                  <FormControl>
                    <Select sx={{ width: "250px", height: "20px" }}>
                      <MenuItem>--Select--</MenuItem>
                    </Select>
                  </FormControl>
                </Stack>
              </Grid>
              <Grid item>
                <Stack direction="row">
                  <Typography
                    sx={{ width: "50%", textAlign: "right", mx: "10px" }}
                  >
                    Employee Status :
                  </Typography>
                  <FormControl>
                    <Select sx={{ width: "250px", height: "20px" }}>
                      <MenuItem>--Select--</MenuItem>
                    </Select>
                  </FormControl>
                </Stack>
              </Grid>
              <Grid item>
                <Stack direction="row">
                  <Typography
                    sx={{
                      width: "50%",
                      textAlign: "right",
                      mx: "10px",
                    }}
                  >
                    Name :
                  </Typography>
                  <FormControl>
                    <TextField sx={{ width: "250px" }} />
                  </FormControl>
                </Stack>
              </Grid>
            </Grid>
            <Grid item direction="column">
              <Grid item>
                <Stack direction="row">
                  <Typography
                    sx={{ width: "50%", textAlign: "right", mx: "10px" }}
                  >
                    Business Unit :{" "}
                  </Typography>
                  <FormControl>
                    <Select sx={{ width: "250px", height: "20px" }}>
                      <MenuItem>--Select--</MenuItem>
                    </Select>
                  </FormControl>
                </Stack>
              </Grid>
              <Grid item>
                <Stack direction="row">
                  <Typography
                    sx={{ width: "50%", textAlign: "right", mx: "10px" }}
                  >
                    Section :{" "}
                  </Typography>
                  <FormControl>
                    <Select sx={{ width: "250px", height: "20px" }}>
                      <MenuItem>--Select--</MenuItem>
                    </Select>
                  </FormControl>
                </Stack>
              </Grid>
              <Grid item>
                <Stack direction="row">
                  <Typography
                    sx={{ width: "50%", textAlign: "right", mx: "10px" }}
                  >
                    Nationality :{" "}
                  </Typography>
                  <FormControl>
                    <Select sx={{ width: "250px", height: "20px" }}>
                      <MenuItem>--Select--</MenuItem>
                    </Select>
                  </FormControl>
                </Stack>
              </Grid>
              <Grid item>
                <Stack direction="row">
                  <Typography
                    sx={{ width: "50%", textAlign: "right", mx: "10px" }}
                  >
                    Level :
                  </Typography>
                  <FormControl>
                    <Select sx={{ width: "250px", height: "20px" }}>
                      <MenuItem>--Select--</MenuItem>
                    </Select>
                  </FormControl>
                </Stack>
              </Grid>
              <Grid item>
                <Stack direction="row">
                  <Typography
                    sx={{ width: "50%", textAlign: "right", mx: "10px" }}
                  >
                    Employement Type :
                  </Typography>
                  <FormControl>
                    <Select sx={{ width: "250px", height: "20px" }}>
                      <MenuItem>--Select--</MenuItem>
                    </Select>
                  </FormControl>
                </Stack>
              </Grid>
              <Grid item>
                <Stack direction="row">
                  <Typography
                    sx={{ width: "50%", textAlign: "right", mx: "10px" }}
                  >
                    Employee No :
                  </Typography>
                  <FormControl>
                    <Select sx={{ width: "250px", height: "20px" }}>
                      <MenuItem>--Select--</MenuItem>
                    </Select>
                  </FormControl>
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </AccordionDetails>
        <AccordionActions>
          <Button className="btn1">Search</Button>
          <Button className="btn2">Advance Search</Button>
          <Button className="btn3">Clear</Button>
        </AccordionActions>
      </Accordion>

      <Box>
        <Box className="emp-details">
          <Typography variant="h6">Employee Details</Typography>
          <Box style={{ display: "flex", gap: "15px" }}>
            Records Found:97190
            <Typography>
              Page Size{" "}
              <select>
                <option>500</option>
              </select>
            </Typography>
          </Box>
        </Box>
        <TableContainer component={Paper}>
          <Table
            sx={{ minWidth: 700, border: "1px solid black" }}
            aria-label="customized table"
          >
            <TableHead>
              <TableRow style={{ border: "1px solid black" }}>
                <StyledTableCell>BU</StyledTableCell>
                <StyledTableCell align="right">EmpNo</StyledTableCell>
                <StyledTableCell align="right">Name</StyledTableCell>
                <StyledTableCell align="right">Dept</StyledTableCell>
                <StyledTableCell align="right">Sect</StyledTableCell>
                <StyledTableCell align="right">Desig</StyledTableCell>
                <StyledTableCell align="right">Grade</StyledTableCell>
                <StyledTableCell align="right">Level</StyledTableCell>
                <StyledTableCell align="right">Nationality</StyledTableCell>
                <StyledTableCell align="right">Type</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.BU}>
                  <StyledTableCell component="th" scope="row">
                    {row.BU}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.EmpNo}</StyledTableCell>
                  <StyledTableCell align="right">{row.Name}</StyledTableCell>
                  <StyledTableCell align="right">{row.Dept}</StyledTableCell>
                  <StyledTableCell align="right">{row.Sect}</StyledTableCell>
                  <StyledTableCell align="right">{row.Desig}</StyledTableCell>
                  <StyledTableCell align="right">{row.Grade}</StyledTableCell>
                  <StyledTableCell align="right">{row.Level}</StyledTableCell>
                  <StyledTableCell align="right">
                    {row.Nationality}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.Type}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <br></br>
      <Box className="pagination">
        <Stack spacing={2}>
          <Pagination count={10} variant="outlined" shape="rounded" />
        </Stack>
        <Box>97190 item in 195 pages</Box>
      </Box>
    </Box>
  );
}
