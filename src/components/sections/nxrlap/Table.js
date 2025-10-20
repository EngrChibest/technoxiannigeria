import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

function createData(name, option1, option2) {
  return { name, option1, option2 };
}

const rows = [
  createData('Instrumentation Section', <CheckCircleIcon sx={{color: '#00A859'}}/>, <CheckCircleIcon sx={{color: '#00A859'}}/>),
  createData('Mechanical Section', <CheckCircleIcon sx={{color: '#00A859'}}/>, <CheckCircleIcon sx={{color: '#00A859'}}/>),
  createData('Robotics Section', <CheckCircleIcon sx={{color: '#00A859'}}/>, <CheckCircleIcon sx={{color: '#00A859'}}/>),
  createData('Software Section', <CheckCircleIcon sx={{color: '#00A859'}}/>, <CheckCircleIcon sx={{color: '#00A859'}}/>),
  createData('UAV Section', <CheckCircleIcon sx={{color: '#00A859'}}/>, <CheckCircleIcon sx={{color: '#00A859'}}/>),
  createData('3D Printing Section', <CheckCircleIcon sx={{color: '#00A859'}}/>, <CheckCircleIcon sx={{color: '#00A859'}}/>),
  createData('Project Based Curriculum', <CheckCircleIcon sx={{color: '#00A859'}}/>, <CancelIcon sx={{color: 'red'}} />),
  createData('Individual Kits', <CheckCircleIcon sx={{color: '#00A859'}}/>, <CancelIcon sx={{color: 'red'}} />),
  createData('In-house Training', <CheckCircleIcon sx={{color: '#00A859'}}/>, <CheckCircleIcon sx={{color: '#00A859'}}/>),
  createData('Certification ', <CheckCircleIcon sx={{color: '#00A859'}}/>, <CheckCircleIcon sx={{color: '#00A859'}}/>),
  createData('Competition Focused Projects', <CheckCircleIcon sx={{color: '#00A859'}}/>, <CheckCircleIcon sx={{color: '#00A859'}}/>),
  createData('Train The Trainer Option (TTT) ', <CheckCircleIcon sx={{color: '#00A859'}}/>, <CancelIcon sx={{color: 'red'}} />),
];

export default function BasicTable() {
  return (
    <div className='container-sm' style={{py: '6%'}} data-aos="fade-up">
        <h3 className='partner-header' data-aos="fade-up">Choose the freedom you need.</h3>
    <TableContainer component={Paper} className='table-container-two' data-aos="fade-up">
      <Table sx={{ maxWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Categories</TableCell>
            <TableCell align="right">Zero Inception</TableCell>
            <TableCell align="right">Institute Membership</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.option1}</TableCell>
              <TableCell align="right">{row.option2}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
