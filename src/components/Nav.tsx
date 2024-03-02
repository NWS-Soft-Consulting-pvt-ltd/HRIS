import React from 'react'
import { Box, FormControl, List, ListItem, ListItemText, MenuItem, Select } from '@mui/material'

interface NavMenu {
    title: string;
}

export default function Nav() {
    const navMenus: NavMenu[] = [{
        title: 'Admin Master',
    },
    {
        title: 'Work Flow',
    },
    {
        title: 'Employee',
    },
    {
        title: 'System Maintenance',
    }]

    return (
        <Box component='nav' sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <List sx={{ display: 'flex', gap: '20px' }}>
                {navMenus.map((menu, index) => {
                    return (
                        <ListItem key={index} sx={{
                            width: 'auto', padding: '0 10px', cursor: 'pointer'
                        }}>
                            <ListItemText>{menu.title}</ListItemText>
                        </ListItem>
                    )
                })
                }
            </List>
            <FormControl sx={{ width: '200px' }}>
                <Select size='small' value='common'>
                    <MenuItem value='common'>Common</MenuItem>
                </Select>
            </FormControl>
        </Box>
    )
}
