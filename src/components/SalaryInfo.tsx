import React from 'react'
import EmployeeInfoSidebar from './EmployeeInfoSidebar'
import { Box, Button, Container, Grid, MenuItem, Pagination, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import Nav from './Nav'

// interface TableData {
//     code: Number;
//     description: String;
//     amount: Number;
//     currency: String;
// }

const tableData = [
    {
        code: 1,
        description: 'Basic',
        amount: 1700.00,
        currency: 'AED'
    }
]


export default function SalaryInfo() {
    return (
        <Container>
            <Box component='header'>
                <Typography variant='h4'>Salary Information:</Typography>
                <Nav />
            </Box>
            <Box component='section' sx={{ backgroundColor: '#ddd', padding: '20px' }}>
                <Box sx={{ backgroundColor: '#fff', padding: '10px', borderRadius: '10px', display: 'flex', gap: '20px' }}>
                    <EmployeeInfoSidebar />
                    <Box sx={{ border: '1px solid #ccc', borderRadius: '5px', width: '75%', height: '100%' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ccc', padding: '10px' }}>
                            <Typography variant='h6' fontWeight='bold'>Employee Information</Typography>
                            <Button variant="contained" sx={{ bgcolor: '#b2960b' }}>Back</Button>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ccc', padding: '10px' }}>
                            <Typography fontWeight='bold'>Salary Details</Typography>
                            <Box sx={{ display: 'flex', gap: '10px' }}>
                                <Typography fontWeight='bold'>Records Found : 1</Typography>
                                <Typography fontWeight='bold'>Page Size</Typography>
                                <Select value="common" size='small' sx={{ width: '50%' }}>
                                    <MenuItem value="common">Common</MenuItem>
                                </Select>
                            </Box>
                        </Box>
                        <Box sx={{ margin: '20px 0' }}>
                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Code</TableCell>
                                            <TableCell align="right">Description</TableCell>
                                            <TableCell align="right">Amount</TableCell>
                                            <TableCell align="right">Currency</TableCell>
                                            <TableCell align="right"></TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {tableData.map((row, index) => (
                                            <TableRow
                                                key={index}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell component="th" scope="row">{row.code}</TableCell>
                                                <TableCell align="right">{row.description}</TableCell>
                                                <TableCell align="right">{row.amount}</TableCell><TableCell align="right">{row.currency}</TableCell>
                                                <TableCell align="right">
                                                    <Button variant="contained" sx={{ bgcolor: '#b2960b' }}>History</Button>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <Pagination count={3} variant="outlined" shape="rounded" sx={{
                                padding: '5px', margin: '0', bgcolor: '#eee', '& .Mui-selected': {
                                    color: '#fff', bgcolor: '#b2960b'
                                }
                            }} />
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #ccc', borderBottom: '1px solid #ccc', padding: '10px' }}>
                            <Typography variant='h6' fontWeight='bold'>Financial Information</Typography>
                        </Box>
                        <Box sx={{ padding: '10px' }}>
                            <Grid container spacing={2}>
                                <Grid item xs={8} sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <Grid item xs={9} sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        <Typography width='40%' textAlign='right'>Employee Eligible For Tax Refund:</Typography>
                                        <Select value="DUB SHI" size='small' sx={{ width: '50%' }}>
                                            <MenuItem value="DUB SHI">No</MenuItem>
                                        </Select>
                                    </Grid>
                                </Grid>
                                <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <Typography width='40%' textAlign='right'>Bank Name:</Typography>
                                    <Typography sx={{ width: '50%' }}>Cash Payment</Typography>
                                </Grid>
                                <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <Typography width='40%' textAlign='right'>Account Number:</Typography>
                                    <Typography>1111</Typography>
                                </Grid>
                                <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <Typography width='40%' textAlign='right'>Original Reporting Unit:</Typography>
                                    <Typography>56</Typography>
                                </Grid>
                                <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <Typography width='40%' textAlign='right'>Original Employee No:</Typography>
                                    <Typography>4</Typography>
                                </Grid>
                                <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <Typography width='40%' textAlign='right'>Last Salary Period:</Typography>
                                    <Typography>0</Typography>
                                </Grid>
                                <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <Typography width='40%' textAlign='right'>Last Leave Passage:</Typography>
                                    <Typography>0</Typography>
                                </Grid>
                                <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <Typography width='40%' textAlign='right'>Gratuity Eligibility:</Typography>
                                    <Select value="DUB SHI" size='small' sx={{ width: '50%' }}>
                                        <MenuItem value="DUB SHI">-- Select --</MenuItem>
                                    </Select>
                                </Grid>
                                <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <Typography width='40%' textAlign='right'>Pension Eligibility:</Typography>
                                    <Select value="DUB SHI" size='small' sx={{ width: '50%' }}>
                                        <MenuItem value="DUB SHI">-- Select --</MenuItem>
                                    </Select>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'end', gap: '10px', borderTop: '1px solid #ccc', padding: '10px' }}>
                            <Button variant="contained" sx={{ bgcolor: '#b2960b' }}>Save</Button>
                            <Button variant="contained" sx={{ bgcolor: '#b2960b' }}>Clear</Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}
