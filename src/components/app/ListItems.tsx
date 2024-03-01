import { ExpandLess, ExpandMore } from "@mui/icons-material";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AutoModeIcon from "@mui/icons-material/AutoMode";
import BackpackIcon from "@mui/icons-material/Backpack";
import BarChartIcon from "@mui/icons-material/BarChart";
import BusinessIcon from "@mui/icons-material/Business";
import CurrencyExchangeSharpIcon from "@mui/icons-material/CurrencyExchangeSharp";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import FolderIcon from "@mui/icons-material/Folder";
import GroupsIcon from "@mui/icons-material/Groups";
import LoginIcon from "@mui/icons-material/Login";
import PaymentsIcon from "@mui/icons-material/Payments";
import PersonIcon from "@mui/icons-material/Person";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import ReceiptSharpIcon from "@mui/icons-material/ReceiptSharp";
import RuleIcon from "@mui/icons-material/Rule";
import SchoolIcon from "@mui/icons-material/School";
import SubtitlesIcon from "@mui/icons-material/Subtitles";
import TabIcon from "@mui/icons-material/Tab";
import WorkIcon from "@mui/icons-material/Work";
import { Collapse, List } from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { FC, Fragment, useState } from "react";
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
    name: "Company Profile",
    subItem: true,
    icon: <BusinessIcon />,
  },
  { id: "myProfile", name: "My Profile", subItem: true, icon: <PersonIcon /> },
  {
    id: "directory",
    name: "Directory",
    subItem: false,
    icon: <BarChartIcon />,
  },
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
    subItem: false,
    icon: <PersonSearchIcon />,
  },
];

const subList: SidebarSubItem[] = [
  {
    id: "companyProfile",
    list: [
      { id: "address", name: "Address", subItem: false, icon: <WorkIcon /> },
      {
        id: "policies",
        name: "Policies",
        subItem: false,
        icon: <GroupsIcon />,
      },
    ],
  },
  {
    id: "myProfile",
    list: [
      { id: "work", name: "Work", subItem: false, icon: <WorkIcon /> },
      { id: "team", name: "Team", subItem: false, icon: <GroupsIcon /> },
      {
        id: "education",
        name: "Education",
        subItem: false,
        icon: <SchoolIcon />,
      },
      {
        id: "family",
        name: "Family",
        subItem: false,
        icon: <Diversity1Icon />,
      },
      { id: "documents", name: "Documents", subItem: false, icon: <TabIcon /> },
      {
        id: "fileManager",
        name: "File Manger",
        subItem: false,
        icon: <FolderIcon />,
      },
    ],
  },
  {
    id: "attendance",
    list: [
      { id: "log", name: "Log", subItem: false, icon: <LoginIcon /> },
      {
        id: "automationLog",
        name: "Automation Log",
        subItem: false,
        icon: <AutoModeIcon />,
      },
      { id: "rules", name: "Rules", subItem: false, icon: <RuleIcon /> },
    ],
  },
  {
    id: "leave",
    list: [
      {
        id: "applyLeave",
        name: "Apply Leave",
        subItem: false,
        icon: <ExitToAppIcon />,
      },
      { id: "logs", name: "Logs", subItem: false, icon: <AutoModeIcon /> },
      { id: "rules", name: "Rules", subItem: false, icon: <RuleIcon /> },
    ],
  },
  {
    id: "payroll",
    list: [
      {
        id: "paySlip",
        name: "Pay Slip",
        subItem: false,
        icon: <ReceiptSharpIcon />,
      },
      {
        id: "salaryStructure",
        name: "Salary Structure",
        subItem: false,
        icon: <CurrencyExchangeSharpIcon />,
      },
      {
        id: "declaration",
        name: "Declaration",
        subItem: false,
        icon: <SubtitlesIcon />,
      },
      {
        id: "bankAccount",
        name: "Bank Account",
        subItem: false,
        icon: <AccountBalanceIcon />,
      },
    ],
  },
];

export const MainListItems: FC = () => {
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
