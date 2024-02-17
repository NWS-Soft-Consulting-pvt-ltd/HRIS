import { Box, Button, Container, Grid, Typography } from "@mui/material";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";
import HistoryToggleOffIcon from "@mui/icons-material/HistoryToggleOff";
import InsightsIcon from "@mui/icons-material/Insights";
import Person3Icon from "@mui/icons-material/Person3";

const sectionItems = [
  {
    id: 1,
    icon: <RequestQuoteIcon sx={{ my: 2, fontSize: 70, color: "#34495E" }} />,
    sentence:
      "Whether your workforce is local or global, we offer fast, easy and accurate payroll so you save time and money.",
    heading: "Payroll Services",
  },
  {
    id: 2,
    icon: (
      <HistoryToggleOffIcon sx={{ my: 2, fontSize: 70, color: "#34495E" }} />
    ),
    sentence:
      "Track hours worked, manage time-off requests and seamlessly integrate with payroll.",
    heading: "Time and Attendance",
  },
  {
    id: 3,
    icon: <InsightsIcon sx={{ my: 2, fontSize: 70, color: "#34495E" }} />,
    sentence: "Payroll and HR reports with access to employee master data.",
    heading: "HR Insights",
  },
  {
    id: 4,
    icon: <Person3Icon sx={{ my: 2, fontSize: 70, color: "#34495E" }} />,
    sentence:
      "Focus on what matters most, from outsourcing payroll to HR management.",
    heading: "HR Services",
  },
];

const Features = () => {
  return (
    <>
      <Box sx={{
          backgroundImage:
            "url(https://ik.imagekit.io/nwssoft/Payroll-portal/HRIS-Website/16351667_rm222batch5-kul-18.jpg?updatedAt=1708107623744)",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
        }}>
        <Container sx={{ py: 15 }}>
          <Box>
            <Typography
              variant="h4"
              fontWeight={700}
              textAlign="center"
              textTransform="uppercase"
              color="#34495E"
            >
              Payroll Services and HR solutions <br></br>that meet your industry
              needs
            </Typography>
            <Typography
              component="p"
              textAlign="center"
              textTransform="capitalize"
              mt="20px"
            >
              ADP has been helping businesses like yours with payroll
              outsourcing for over 70 years. Using our payroll software,
              <br></br> our experts integrate your payroll and HR information
              into a single unified platform, <br></br>saving you time to focus
              on your business. See what ADP services can do for you.
            </Typography>
            <Grid
              container
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: 5,
              }}
            >
              {sectionItems.map((item) => (
                <Grid
                  item
                  xs="auto"
                  md={4}
                  minHeight={200}
                  key={item.id}
                  sx={{
                    textAlign: "center",
                    padding: "10px",
                    width: "250px",
                    borderRadius: "10px",
                    margin: "10px",
                  }}
                >
                  {item.icon}
                  <Typography
                    variant="h6"
                    textAlign="center"
                    textTransform="capitalize"
                  >
                    {item.heading}
                  </Typography>
                  <Typography component="p" fontSize="14px" fontWeight="200">
                    {item.sentence}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Box>
          <Box
            marginTop={10}
            // sx={{
            //   backgroundImage : "url(https://ik.imagekit.io/nwssoft/Payroll-portal/rm222batch3-mind-01.jpg?updatedAt=1707475161136)",
            // }}
          >
            <Grid container spacing={1}>
              <Grid
                item
                xs={12}
                md={7}
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
              >
                <Typography
                  variant="h4"
                  fontWeight={600}
                  textAlign="center"
                  textTransform="uppercase"
                >
                  We help you to get up to speed
                </Typography>
                <Typography variant="body1" marginTop={5} textAlign="justify">
                  Tap into the payroll and HR expertise you need to get started
                  with ADP solutions, so you can focus your valuable time where
                  it's needed most.<br></br>
                  <br></br> <strong>Implementation:</strong> Get started quickly
                  with our payroll and HR solutions so you can focus your
                  valuable time where it's needed most. <br></br>
                  <br></br> <strong>Configuration:</strong> We can quickly
                  configure our payroll and HR solutions to work best for you.
                  We’ll share our knowledge and offer best practices to improve
                  your experience.
                  <br></br> <br></br>
                  <strong>Customisation:</strong> If you have special
                  requirements such as an application integration, we can offer
                  customisations of our payroll and HR solutions to streamline
                  the way you manage employees. <br></br> <br></br>
                  <strong>Training:</strong> Our training services will not only
                  help you to know how you want to use our software, but also
                  the processes and guidelines for HR management. We offer
                  training for groups, on-demand team training and virtual
                  training.
                </Typography>
              </Grid>
              <Grid item xs={12} md={5}>
                <img
                  src={
                    "https://ik.imagekit.io/nwssoft/Payroll-portal/3543932-removebg-preview.png?updatedAt=1707998581812"
                  }
                  alt="Man-Standing-Pencil"
                  width="100%"
                />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Features;
