import { useState } from "react";
import { Menu, MenuItem, ProSidebar } from "react-pro-sidebar";
import 'react-pro-sidebar/dist/css/styles.css';
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import  HomeOutLinedIcon  from '@mui/icons-material/HomeOutlined';
import  PeopleOutLinedIcon  from '@mui/icons-material/PeopleOutlined';
import  ContactsOutLinedIcon  from '@mui/icons-material/ContactsOutlined';
import  ReceiptOutLinedIcon  from '@mui/icons-material/ReceiptOutlined';
import  PersonOutLinedIcon  from '@mui/icons-material/PersonOutlined';
import  CalendarTodayLinedIcon  from '@mui/icons-material/CalendarTodayOutlined';
import  HelpOutlineOutlinedIcon  from '@mui/icons-material/HelpOutlineOutlined';
import  BarChartOutLinedIcon  from '@mui/icons-material/BarChartOutlined';
import  PieChartOutlineOutlinedIcon  from '@mui/icons-material/PieChartOutlineOutlined';
import  TimelineOutLinedIcon  from '@mui/icons-material/TimelineOutlined';
import  MenuOutLinedIcon  from '@mui/icons-material/MenuOutlined';
import  MapOutLinedIcon  from '@mui/icons-material/MapOutlined';


const Item = ({title, to, icon, selected, setSelected }) =>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <MenuItem
        active={selected === title}
        style={{
            color: colors.gray[100]
        }}
        onClick={() => setSelected(title)}
        icon={icon}
        >
            <Typography>
                {title}
            </Typography>
            <Link to={to} />
        </MenuItem>
    );
};

export const Sidebar = () =>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Dashboard")
    return (
        <Box
        sx={{
            "& .pro-sidebar-inner":{
                background: `${colors.primary[400]} !important`
            },
            "& .pro-icon-wrapper":{
                backgroundColor:`transparent !important`
            },
            "& .pro-inner-item":{
                padding: "5px 35px 5px 20px !important"
            },
            "& .pro-inner-item:hover":{
                color: "#868dfb !important"
            },
            "& .pro-menu-item.active":{
                color: "#6870fa !important"
            }
            }}>
                <ProSidebar collapsed={isCollapsed}>
                    <Menu iconShape="square">
                        <MenuItem
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        icon={isCollapsed ? <MapOutLinedIcon /> : undefined}
                        style={{
                            margin: "10px 0 20px 0",
                            color: colors.gray[100],
                        }}
                        >
                            {isCollapsed && (
                                <Box
                                display="flex"
                                justifyContent="space-between"
                                alignItems="center"
                                ml="15px"
                                >
                                    <Typography variant="h3" color={colors.gray[100]}>
                                        ADMINS
                                    </Typography>
                                    <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                                        <MenuOutLinedIcon />
                                    </IconButton>
                                </Box>
                            )}
                        </MenuItem>
                        {!isCollapsed && (
                            <Box mb="25px">
                                <Box display="flex"
                                justifyContent="center"
                                alignItems="center"
                                >
                                    <img
                                    alt="profile-user"
                                    width="100px"
                                    height="100px"
                                    src={`../../assets/userProfile.jpg`}
                                    style={{cursor: "pointer", borderRadius:"50%"}}
                                    />
                                </Box>
                                <Box textAlign="center">
                                    <Typography
                                    variant="h2"
                                    color={colors.gray[100]}
                                    fontWeight="bold"
                                    sx={{m: "10px 0 0 0"}}
                                    >
                                        Ricky
                                    </Typography>
                                    <Typography variant="h5" color={colors.greenAccent[500]}>
                                        VP admin
                                    </Typography>
                                </Box>
                            </Box>
                        )}
                        <Box>
                            <Item 
                            title="Dashboard"
                            to="/"
                            icon={<HomeOutLinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                            />
                            <Typography
                            variant="h6"
                            color={colors.gray[300]}
                            sx={{ m: "15px 0 5px 20px" }}
                            >
                                Data
                            </Typography>
                            <Item
                            title="Manage Team"
                            to="/team"
                            icon={<PeopleOutLinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                            />
                            <Item 
                            title="Contacts Information"
                            to="/contacts"
                            icon={<ContactsOutLinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                            />
                            <Item 
                            title="Invoices Balences"
                            to="/invoices"
                            icon={<ReceiptOutLinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                            />
                            <Typography
                            variant="h6"
                            color={colors.gray[300]}
                            sx={{m: "15px 0 5px 20px"}}
                            >
                                Pages
                            </Typography>
                            <Item
                            title="Profile Form"
                            to="/form"
                            icon={<PersonOutLinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                            />
                            <Item 
                            title="Calendar"
                            to="/calendar"
                            icon={<CalendarTodayLinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                            />
                            <Item 
                            title="FAQ Page"
                            to="/faq"
                            icon={<HelpOutlineOutlinedIcon />}
                            />
                            <Typography
                            variant="h6"
                            color={colors.gray[300]}
                            sx={{m: "15px 0 5px 20px"}}
                            >
                                Charts
                            </Typography>
                            <Item 
                            title="Bar Chart"
                            to="/bar"
                            icon={<BarChartOutLinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                            />
                            <Item
                            title="Pie Chart"
                            to="/Pie"
                            icon={<PieChartOutlineOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                            />
                            <Item
                            title="Line Chart"
                            to="/line"
                            icon={<TimelineOutLinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                            />
                            <Item 
                            title="Geography Chart"
                            to="/geography"
                            icon={<MapOutLinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                            />
                        </Box>
                    </Menu>
                </ProSidebar>
        </Box>
    );
};
