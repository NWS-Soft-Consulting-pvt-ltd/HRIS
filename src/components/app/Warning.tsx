import {
  Box,
  Button,
  Container,
  Grid,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import EmployeeInfoSidebar from "./EmployeeInfoSidebar";
import Nav from "./Nav";

export default function Warning() {
  return (
    <Container>
      <Box component="header">
        <Typography variant="h4">Warning Letter Information:</Typography>
        <Nav />
      </Box>
      <Box sx={{ backgroundColor: "#ddd", padding: "20px" }}>
        <Grid container xs={12}>
          <Grid item xs={12} sm={12}>
            <Box
              sx={{
                backgroundColor: "#fff",
                padding: "10px",
                borderRadius: "10px",
                display: "flex",
                gap: "20px",
              }}
            >
              <EmployeeInfoSidebar />
              <Box
                sx={{
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  width: "75%",
                  height: "100%",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderBottom: "1px solid #ccc",
                    padding: "10px",
                  }}
                >
                  <Typography variant="h5">Employee Information</Typography>
                  <Button variant="contained" sx={{ bgcolor: "#b2960b" }}>
                    Back
                  </Button>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderBottom: "1px solid #ccc",
                    padding: "10px",
                  }}
                >
                  <Typography variant="h5">Warning Letter(s)</Typography>
                  <Button variant="contained" sx={{ bgcolor: "#b2960b" }}>
                    {" "}
                    Add Warning Letter
                  </Button>
                </Box>
                <Box sx={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
                  No Record Found
                </Box>
                <Typography
                  variant="h6"
                  sx={{
                    border: "1px solid #ccc",
                    marginTop: "20px",
                    padding: "10px",
                  }}
                >
                  Warning Letter Details
                </Typography>

                <Box sx={{ padding: "10px" }}>
                  <Grid container spacing={2}>
                    <Grid
                      item
                      xs={6}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <Typography width="40%" textAlign="right">
                        Issue Date:
                      </Typography>
                      <TextField
                        type="date"
                        size="small"
                        sx={{ width: "50%" }}
                      />
                    </Grid>
                    <Grid
                      item
                      xs={6}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <Typography width="40%" textAlign="right">
                        Business Unit:
                      </Typography>
                      <Select
                        value="DUB SHI"
                        size="small"
                        sx={{ width: "50%" }}
                      >
                        <MenuItem value="DUB SHI">DUB SHI</MenuItem>
                      </Select>
                    </Grid>
                    <Grid
                      item
                      xs={6}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <Typography width="40%" textAlign="right">
                        Current Department:
                      </Typography>
                      <Select
                        value="DUB SHI"
                        size="small"
                        sx={{ width: "50%" }}
                      >
                        <MenuItem value="DUB SHI">Shar Cost</MenuItem>
                      </Select>
                    </Grid>
                    <Grid
                      item
                      xs={6}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <Typography width="40%" textAlign="right">
                        Current Section:
                      </Typography>
                      <Select
                        value="DUB SHI"
                        size="small"
                        sx={{ width: "50%" }}
                      >
                        <MenuItem value="DUB SHI">Cashiers</MenuItem>
                      </Select>
                    </Grid>
                    <Grid
                      item
                      xs={6}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <Typography width="40%" textAlign="right">
                        Warning Category:
                      </Typography>
                      <Select
                        value="DUB SHI"
                        size="small"
                        sx={{ width: "50%" }}
                      >
                        <MenuItem value="DUB SHI">-- Select --</MenuItem>
                      </Select>
                    </Grid>
                    <Grid
                      item
                      xs={6}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <Typography width="40%" textAlign="right">
                        Requested By:
                      </Typography>
                      <Select
                        value="DUB SHI"
                        size="small"
                        sx={{ width: "50%" }}
                      >
                        <MenuItem value="DUB SHI">-- Select --</MenuItem>
                      </Select>
                    </Grid>
                    <Grid
                      item
                      xs={6}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <Typography width="40%" textAlign="right">
                        Reason:
                      </Typography>
                      <Select
                        value="DUB SHI"
                        size="small"
                        sx={{ width: "50%" }}
                      >
                        <MenuItem value="DUB SHI">-- Select --</MenuItem>
                      </Select>
                    </Grid>
                    <Grid
                      item
                      xs={6}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <Typography width="40%" textAlign="right">
                        Remark:
                      </Typography>
                      <Select
                        value="DUB SHI"
                        size="small"
                        sx={{ width: "50%" }}
                      >
                        <MenuItem value="DUB SHI">-- Select --</MenuItem>
                      </Select>
                    </Grid>
                    <Grid item xs={8} sx={{ display: "flex", gap: "10px" }}>
                      <Typography width="40%" textAlign="right">
                        Warning Letter:
                      </Typography>
                      <Stack direction="column">
                        <Button
                          variant="contained"
                          sx={{ bgcolor: "#b2960b", width: "80px" }}
                        >
                          Select
                        </Button>
                        <Typography fontWeight="bold">Note:</Typography>
                        <Typography>
                          Valid Extension Include : jpeg, bmp, gif, png, jpg,
                          txt, doc, docx, pdf, xls, xlsx
                        </Typography>
                        <Typography>Max File Size: 2 MB</Typography>
                      </Stack>
                    </Grid>
                  </Grid>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "end",
                    gap: "10px",
                    borderTop: "1px solid #ccc",
                    padding: "10px",
                  }}
                >
                  <Button variant="contained" sx={{ bgcolor: "#b2960b" }}>
                    Save
                  </Button>
                  <Button variant="contained" sx={{ bgcolor: "#b2960b" }}>
                    Clear
                  </Button>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
