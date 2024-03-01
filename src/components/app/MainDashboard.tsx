import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AirplaneTicketIcon from "@mui/icons-material/AirplaneTicket";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CurrencyRubleIcon from "@mui/icons-material/CurrencyRuble";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import DomainAddRoundedIcon from "@mui/icons-material/DomainAddRounded";
import FolderSharedIcon from "@mui/icons-material/FolderShared";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import { Container, Grid, Paper, Typography } from "@mui/material";

export default function MainDashboard() {
  return (
    <Container fixed>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: 3,
          "& > :not(style)": {
            m: 2,
            width: 150,
            height: 150,
          },
        }}
      >
        <Paper
          elevation={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <DomainAddRoundedIcon
            sx={{
              display: "block",
              fontSize: "3rem",
              color: "#839898",
            }}
          />
          <Typography
            variant="body1"
            color="#344955"
            fontWeight="550"
            textAlign="center"
          >
            Company Profile
          </Typography>
        </Paper>
        <Paper
          elevation={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <AccountCircleIcon
            sx={{
              display: "block",
              fontSize: "3rem",
              color: "#0080ff",
            }}
          />
          <Typography
            variant="body1"
            color="#344955"
            fontWeight="550"
            textAlign="center"
          >
            My Profile
          </Typography>
        </Paper>
        <Paper
          elevation={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <Diversity3Icon
            sx={{
              display: "block",
              fontSize: "3rem",
              color: "#B5B86B",
            }}
          />
          <Typography
            variant="body1"
            color="#344955"
            fontWeight="550"
            textAlign="center"
          >
            Directory
          </Typography>
        </Paper>
        <Paper
          elevation={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <FolderSharedIcon
            sx={{
              display: "block",
              fontSize: "3rem",
              color: "Purple",
            }}
          />
          <Typography
            variant="body1"
            color="#344955"
            fontWeight="550"
            textAlign="center"
          >
            Attendance
          </Typography>
        </Paper>
      </Grid>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          "& > :not(style)": {
            m: 2,
            width: 150,
            height: 150,
          },
        }}
      >
        <Paper
          elevation={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <CalendarMonthIcon
            sx={{
              display: "block",
              fontSize: "3rem",
              color: "#ff8000",
            }}
          />
          <Typography
            variant="body1"
            color="#344955"
            fontWeight="550"
            textAlign="center"
          >
            Calender
          </Typography>
        </Paper>
        <Paper
          elevation={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <AirplaneTicketIcon
            sx={{
              display: "block",
              fontSize: "3rem",
              color: "green",
            }}
          />
          <Typography
            variant="body1"
            color="#344955"
            fontWeight="550"
            textAlign="center"
          >
            Leave
          </Typography>
        </Paper>
        <Paper
          elevation={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <CurrencyRubleIcon
            sx={{
              display: "block",
              fontSize: "3rem",
              color: "#211C6A",
            }}
          />
          <Typography
            variant="body1"
            color="#344955"
            fontWeight="550"
            textAlign="center"
          >
            Payroll
          </Typography>
        </Paper>

        <Paper
          elevation={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <PersonSearchIcon
            sx={{
              display: "block",
              fontSize: "3rem",
              color: "#561C24",
            }}
          />
          <Typography
            variant="body1"
            color="#344955"
            fontWeight="550"
            textAlign="center"
          >
            Recruitment
          </Typography>
        </Paper>
      </Grid>
    </Container>
  );
}
