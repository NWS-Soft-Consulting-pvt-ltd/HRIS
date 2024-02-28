import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BusinessIcon from "@mui/icons-material/Business";
import BarChartIcon from "@mui/icons-material/BarChart";
import PersonIcon from "@mui/icons-material/Person";
import AssignmentIcon from "@mui/icons-material/Assignment";
import BackpackIcon from "@mui/icons-material/Backpack";
import PaymentsIcon from "@mui/icons-material/Payments";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Collapse, List } from "@mui/material";

// export const mainListItems = (
//   <React.Fragment>
//     <ListItemButton>
//       <ListItemIcon>
//         <DashboardIcon />
//       </ListItemIcon>
//       <ListItemText primary="Dashboard" />
//     </ListItemButton>
//     {/* <ListItemButton>
//       <ListItemIcon>
//         <BusinessIcon />
//       </ListItemIcon>
//       <ListItemText primary="Company Profile" />
//     </ListItemButton> */}

//     <ListItemButton onClick={()=>console.log("gjgj")}>
//       <ListItemIcon>
//         <BusinessIcon />
//       </ListItemIcon>
//       <ListItemText primary="Company Profile" />
//       {open.companyProfile ? <ExpandLess /> : <ExpandMore />}
//     </ListItemButton>
//     <Collapse in={open.companyProfile} timeout="auto" unmountOnExit>
//       <List component="div" disablePadding>
//         {/* {Dropdown.Reports.map((text2) => ( */}
//           <ListItemButton>
//             <ListItemIcon></ListItemIcon>
//             <ListItemText/>
//           </ListItemButton>
//         {/* ))} */}
//       </List>
//     </Collapse>

//     <ListItemButton>
//       <ListItemIcon>
//         <PersonIcon />
//       </ListItemIcon>
//       <ListItemText primary="My Profile" />
//     </ListItemButton>
//     <ListItemButton>
//       <ListItemIcon>
//         <BarChartIcon />
//       </ListItemIcon>
//       <ListItemText primary="Directory" />
//     </ListItemButton>
//     <ListItemButton>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Attendance" />
//     </ListItemButton>
//     <ListItemButton>
//       <ListItemIcon>
//         <BackpackIcon />
//       </ListItemIcon>
//       <ListItemText primary="Leave" />
//     </ListItemButton>
//     <ListItemButton>
//       <ListItemIcon>
//         <PaymentsIcon />
//       </ListItemIcon>
//       <ListItemText primary="Payroll" />
//     </ListItemButton>
//     <ListItemButton>
//       <ListItemIcon>
//         <PersonSearchIcon />
//       </ListItemIcon>
//       <ListItemText primary="Recuritment" />
//     </ListItemButton>
//   </React.Fragment>
// );

export const MainListItems = () => {
  const [open, setOpen] = React.useState<Record<string, boolean>>({
    companyProfile: false,
  });

  return (
    <React.Fragment>
      <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
      {/* <ListItemButton>
        <ListItemIcon>
          <BusinessIcon />
        </ListItemIcon>
        <ListItemText primary="Company Profile" />
      </ListItemButton> */}

      <ListItemButton
        onClick={() =>
          setOpen((previousOpen) => ({
            ...previousOpen,
            companyProfile: true,
          }))
        }
      >
        <ListItemIcon>
          <BusinessIcon />
        </ListItemIcon>
        <ListItemText primary="Company Profile" />
        {open.companyProfile ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open.companyProfile} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {/* {Dropdown.Reports.map((text2) => ( */}
          <ListItemButton>
            <ListItemIcon></ListItemIcon>
            <ListItemText primary="Address"/>
          </ListItemButton>
          {/* ))} */}
        </List>
      </Collapse>

      <ListItemButton>
        <ListItemIcon>
          <PersonIcon />
        </ListItemIcon>
        <ListItemText primary="My Profile" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Directory" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Attendance" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <BackpackIcon />
        </ListItemIcon>
        <ListItemText primary="Leave" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <PaymentsIcon />
        </ListItemIcon>
        <ListItemText primary="Payroll" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <PersonSearchIcon />
        </ListItemIcon>
        <ListItemText primary="Recuritment" />
      </ListItemButton>
    </React.Fragment>
  );
};
// // export const secondaryListItems = (
// //   <React.Fragment>
// //     <ListSubheader component="div" inset>
// //       Saved reports
// //     </ListSubheader>
// //     <ListItemButton>
// //       <ListItemIcon>
// //         <AssignmentIcon />
// //       </ListItemIcon>
// //       <ListItemText primary="Current month" />
// //     </ListItemButton>
// //     <ListItemButton>
// //       <ListItemIcon>
// //         <AssignmentIcon />
// //       </ListItemIcon>
// //       <ListItemText primary="Last quarter" />
// //     </ListItemButton>
// //     <ListItemButton>
// //       <ListItemIcon>
// //         <AssignmentIcon />
// //       </ListItemIcon>
// //       <ListItemText primary="Year-end sale" />
// //     </ListItemButton>
// //   </React.Fragment>
// // );

// import * as React from 'react';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import DashboardIcon from '@mui/icons-material/Dashboard';
// import BusinessIcon from '@mui/icons-material/Business';
// import BarChartIcon from '@mui/icons-material/BarChart';
// import PersonIcon from '@mui/icons-material/Person';
// import AssignmentIcon from '@mui/icons-material/Assignment';
// import BackpackIcon from '@mui/icons-material/Backpack';
// import PaymentsIcon from '@mui/icons-material/Payments';
// import PersonSearchIcon from "@mui/icons-material/PersonSearch";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

// export const mainListItems = (
//   <React.Fragment>
//     <ListItemButton>
//       <ListItemIcon>
//         <DashboardIcon />
//       </ListItemIcon>
//       <ListItemText primary="Dashboard" />
//     </ListItemButton>
//     <ListItemButton>
//       <ListItemIcon>
//         <BusinessIcon />
//       </ListItemIcon>
//       <ListItemText primary="Company Profile" />
//     </ListItemButton>
//     <ListItemButton>
//       <ListItemIcon>
//         <PersonIcon />
//       </ListItemIcon>
//       <ListItemText primary="My Profile" />
//     </ListItemButton>
//     <MenuList /> {/* Add the MenuList here */}
//   </React.Fragment>
// );

// function MenuList() {
//   const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

//   const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleCloseMenu = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <React.Fragment>
//       <ListItemButton onClick={handleOpenMenu}>
//         <ListItemIcon>
//           <ArrowDropDownIcon />
//         </ListItemIcon>
//         <ListItemText primary="Directory" />
//       </ListItemButton>
//       <Menu
//         id="directory-menu"
//         anchorEl={anchorEl}
//         open={Boolean(anchorEl)}
//         onClose={handleCloseMenu}
//         anchorOrigin={{
//           vertical: 'bottom',
//           horizontal: 'left',
//         }}
//         transformOrigin={{
//           vertical: 'top',
//           horizontal: 'left',
//         }}
//         MenuListProps={{ 'aria-labelledby': 'directory-menu' }}
//       >
//         <MenuItem>
//           <ListItemIcon>
//             <AssignmentIcon />
//           </ListItemIcon>
//           <ListItemText primary="Attendance" />
//         </MenuItem>
//         <MenuItem>
//           <ListItemIcon>
//             <BackpackIcon />
//           </ListItemIcon>
//           <ListItemText primary="Leave" />
//         </MenuItem>
//         <MenuItem>
//           <ListItemIcon>
//             <PaymentsIcon />
//           </ListItemIcon>
//           <ListItemText primary="Payroll" />
//         </MenuItem>
//         <MenuItem>
//           <ListItemIcon>
//             <PersonSearchIcon />
//           </ListItemIcon>
//           <ListItemText primary="Recruitment" />
//         </MenuItem>
//       </Menu>
//     </React.Fragment>
//   );
// }
