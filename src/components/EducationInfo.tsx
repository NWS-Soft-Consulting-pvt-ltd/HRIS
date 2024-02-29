import React from 'react'
import { Box, Button, Container, Grid, MenuItem, Select, Stack, TextField, Typography } from '@mui/material'
import EmployeeInfoSidebar from './EmployeeInfoSidebar'
import Nav from './Nav'

export default function EducationInfo() {
  return (
    <Container>
      <Box component='header'>
        <Typography variant='h4'>Education Information:</Typography>
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
              <Typography fontWeight='bold'>Employee Educational Details</Typography>
            </Box>
            <Box sx={{ padding: '10px' }}>
              <Typography fontWeight='bold'>Add Employee Educational Details</Typography>
              <Box sx={{ padding: '10px' }}>
                <Grid container spacing={2}>
                  <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Typography width='40%' textAlign='right'>Qualification Type:</Typography>
                    <Select value="select" size='small' sx={{ width: '50%' }}>
                      <MenuItem value="select">-- Select --</MenuItem>
                    </Select>
                  </Grid>
                  <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Typography width='40%' textAlign='right'>Specialization:</Typography>
                    <Select value="select" size='small' sx={{ width: '50%' }}>
                      <MenuItem value="select">-- Select --</MenuItem>
                    </Select>
                  </Grid>
                  <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Typography width='40%' textAlign='right'>Year:</Typography>
                    <TextField type='date' size='small' ></TextField>
                  </Grid>
                  <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Typography width='40%' textAlign='right'>Institute:</Typography>
                    <TextField size='small'></TextField>
                  </Grid>
                  <Grid item xs={8} sx={{ display: 'flex', gap: '10px' }}>
                    <Typography width='40%' textAlign='right'>Upload:</Typography>
                    <Stack direction='column'>
                      <Button variant='contained' sx={{ bgcolor: '#b2960b', width: '80px' }}>Select</Button>
                      <Typography fontWeight='bold'>Note:</Typography>
                      <Typography>Valid Extension Include : jpeg, bmp, gif, png, jpg, txt, doc, docx, pdf, xls, xlsx</Typography>
                      <Typography>Max File Size: 2 MB</Typography>
                    </Stack>
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
      </Box>
    </Container>
  )
}