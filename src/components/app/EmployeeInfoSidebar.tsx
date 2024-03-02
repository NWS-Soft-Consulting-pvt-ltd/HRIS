import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

interface Menu {
  title: string;
  link: string;
}

const menus: Menu[] = [
  {
    title: "Salary",
    link: "/",
  },
  {
    title: "Education",
    link: "/education",
  },
  {
    title: "Eligible",
    link: "/eligible",
  },
  {
    title: "Warning",
    link: "/warning",
  },
];

export default function EmployeeInfoSidebar() {
  const navTo = useNavigate();

  return (
    <Box
      className="sidebar"
      sx={{
        width: "25%",
        height: "100%",
        border: "1px solid #ccc",
        borderRadius: "5px",
        overflow: "hidden",
      }}
    >
      <Typography
        variant="h5"
        sx={{ backgroundColor: "#b2960b", color: "#fff", padding: "5px" }}
      >
        Sylvia Nabukenya
      </Typography>
      <Typography
        variant="h6"
        sx={{ backgroundColor: "#ccc", fontWeight: "bold", padding: "5px" }}
      >
        (Cashier)
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          gap: "40px",
          padding: "10px",
        }}
      >
        <img src="./user_icon.png" alt="" style={{ width: "100px" }} />
        <Box sx={{ width: "50%" }}>
          <Typography variant="h6">Grade: 04</Typography>
          <Typography variant="h6">Level: **</Typography>
        </Box>
      </Box>
      <Typography
        variant="h6"
        sx={{ backgroundColor: "#ccc", fontWeight: "bold", padding: "5px" }}
      >
        Emp No: 4
      </Typography>
      <Grid container sx={{ padding: "5px", backgroundColor: "#eee" }}>
        <Grid item display="flex" gap="5px" width="100%">
          <Typography
            sx={{ width: "50%", fontSize: "12px", fontWeight: "500" }}
          >
            Status Code:
          </Typography>
          <Typography
            sx={{ width: "50%", fontSize: "12px", fontWeight: "bold" }}
          >
            Full Time
          </Typography>
        </Grid>
        <Grid item display="flex" gap="5px" width="100%">
          <Typography
            sx={{ width: "50%", fontSize: "12px", fontWeight: "500" }}
          >
            Department:
          </Typography>
          <Typography
            sx={{ width: "50%", fontSize: "12px", fontWeight: "bold" }}
          >
            99:Shared Cost
          </Typography>
        </Grid>
        <Grid item display="flex" gap="5px" width="100%">
          <Typography
            sx={{ width: "50%", fontSize: "12px", fontWeight: "500" }}
          >
            Section:
          </Typography>
          <Typography
            sx={{ width: "50%", fontSize: "12px", fontWeight: "bold" }}
          >
            CCO - Cashiers
          </Typography>
        </Grid>
        <Grid item display="flex" gap="5px" width="100%">
          <Typography
            sx={{ width: "50%", fontSize: "12px", fontWeight: "500" }}
          >
            Business Unit Code / JDE Code:
          </Typography>
          <Typography
            sx={{ width: "50%", fontSize: "12px", fontWeight: "bold" }}
          >
            56/00009
          </Typography>
        </Grid>
        <Grid item display="flex" gap="5px" width="100%">
          <Typography
            sx={{ width: "50%", fontSize: "12px", fontWeight: "500" }}
          >
            Business Unit:
          </Typography>
          <Typography
            sx={{ width: "50%", fontSize: "12px", fontWeight: "bold" }}
          >
            HM AE DUB Shindag
          </Typography>
        </Grid>
        <Grid item display="flex" gap="5px" width="100%">
          <Typography
            sx={{ width: "50%", fontSize: "12px", fontWeight: "500" }}
          >
            Reporting To:
          </Typography>
          <Typography
            sx={{ width: "50%", fontSize: "12px", fontWeight: "bold" }}
          >
            Amr Moham
          </Typography>
        </Grid>
        <Grid item display="flex" gap="5px" width="100%">
          <Typography
            sx={{ width: "50%", fontSize: "12px", fontWeight: "500" }}
          >
            Head Of Department:
          </Typography>
          <Typography
            sx={{ width: "50%", fontSize: "12px", fontWeight: "bold" }}
          >
            Ines Godinho
          </Typography>
        </Grid>
      </Grid>
      <List>
        {menus.map((menu, index) => {
          return (
            <ListItem
              key={index}
              onClick={() => navTo(menu.link)}
              sx={{
                padding: "0 10px",
                cursor: "pointer",
                ":hover": { backgroundColor: "#7e2239", color: "#fff" },
              }}
            >
              <ListItemText>{menu.title}</ListItemText>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
}
