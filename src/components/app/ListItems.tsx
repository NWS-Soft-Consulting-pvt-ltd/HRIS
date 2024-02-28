import { ExpandLess, ExpandMore } from "@mui/icons-material";
import AssignmentIcon from "@mui/icons-material/Assignment";
import BackpackIcon from "@mui/icons-material/Backpack";
import BarChartIcon from "@mui/icons-material/BarChart";
import BusinessIcon from "@mui/icons-material/Business";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupsIcon from "@mui/icons-material/Groups";
import PaymentsIcon from "@mui/icons-material/Payments";
import PersonIcon from "@mui/icons-material/Person";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import WorkIcon from "@mui/icons-material/Work";
import { Collapse, List } from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Fragment, useState } from "react";
import { SidebarItem, SidebarSubItem } from "../interfaces/Interfaces";

const mainList: SidebarItem[] = [
  {
    id: "dashboard",
    name: "Dashboard",
    subItem: false,
    icon: <DashboardIcon />,
  },
  {
    id: "companyProfile",
    name: "Company",
    subItem: false,
    icon: <BusinessIcon />,
  },
  { id: "myProfile", name: "My Profile", subItem: true, icon: <PersonIcon /> },
  { id: "directory", name: "Directory", subItem: true, icon: <BarChartIcon /> },
  {
    id: "attendance",
    name: "Attendance",
    subItem: true,
    icon: <AssignmentIcon />,
  },
  { id: "leave", name: "Leave", subItem: true, icon: <BackpackIcon /> },
  { id: "payroll", name: "Payroll", subItem: true, icon: <PaymentsIcon /> },
  {
    id: "recruitment",
    name: "Recruitment",
    subItem: true,
    icon: <PersonSearchIcon />,
  },
];

const subList: SidebarSubItem[] = [
  {
    id: "myProfile",
    list: [
      { id: "work", name: "Work", subItem: false, icon: <WorkIcon /> },
      { id: "team", name: "Team", subItem: false, icon: <GroupsIcon /> },
    ],
  },
];

export const MainListItems = () => {
  const [openCollapse, setOpenCollapse] = useState<string | null>(null);

  const handleItemClick = (itemId: string, isSubList: boolean) => {
    if (isSubList)
      setOpenCollapse((prevItem) => (prevItem === itemId ? null : itemId));
    else console.log("your logic for clicking on this button");
  };

  const handleSubItemButtonClick = () => {
    console.log("your logic for clicking on this button");
  };

  return (
    <Fragment>
      <List component="nav">
        {mainList.map((listItem: SidebarItem) => (
          <Fragment key={listItem.id}>
            <ListItemButton
              onClick={() => handleItemClick(listItem.id, listItem.subItem)}
            >
              <ListItemIcon>{listItem.icon}</ListItemIcon>
              <ListItemText primary={listItem.name} />
              {listItem.subItem &&
                (openCollapse === listItem.id ? (
                  <ExpandLess />
                ) : (
                  <ExpandMore />
                ))}
            </ListItemButton>
            {listItem.subItem && (
              <Collapse
                in={openCollapse === listItem.id}
                timeout="auto"
                unmountOnExit
              >
                <List component="div" disablePadding>
                  {subList
                    .find(
                      (subListObject: SidebarSubItem) =>
                        listItem.id === subListObject.id
                    )
                    ?.list.map((itemObject: SidebarItem) => (
                      <ListItemButton
                        key={itemObject.id}
                        onClick={handleSubItemButtonClick}
                      >
                        <ListItemIcon>{itemObject.icon}</ListItemIcon>
                        <ListItemText primary={itemObject.name} />
                      </ListItemButton>
                    ))}
                </List>
              </Collapse>
            )}
          </Fragment>
        ))}
      </List>
    </Fragment>
  );
};
