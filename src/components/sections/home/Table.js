import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Link } from 'react-router-dom';
import PrimaryButton from '../../elements/PrimaryButton';
import CancelIcon from '@mui/icons-material/Cancel';

function createData(name, checks1, checks2, checks3, checks4) {
  return { name, checks1, checks2, checks3, checks4 };
}

const rows = [
  createData('Login Panel Access', <CheckCircleIcon sx={{color: '#00A859'}}/>, <CheckCircleIcon sx={{color: '#00A859'}}/>, <CheckCircleIcon sx={{color: '#00A859'}}/>, <CheckCircleIcon sx={{color: '#00A859'}}/>),
  createData('Live Virtual Training to make Bots for Competitions', <CheckCircleIcon sx={{color: '#00A859'}}/>, <CancelIcon sx={{color: 'red'}} />, <CheckCircleIcon sx={{color: '#00A859'}}/>, <CheckCircleIcon sx={{color: '#00A859'}}/>),
  createData('RoboClub member interaction platform', <CancelIcon sx={{color: 'red'}} />, <CancelIcon sx={{color: 'red'}} />, <CheckCircleIcon sx={{color: '#00A859'}}/>, <CheckCircleIcon sx={{color: '#00A859'}}/>),
  createData('Opportunity to participate in District/Regional/International Competition', <CancelIcon sx={{color: 'red'}} />, <CancelIcon sx={{color: 'red'}} />, <CheckCircleIcon sx={{color: '#00A859'}}/>, <CheckCircleIcon sx={{color: '#00A859'}}/>),
  createData('Free Membership Kit (T-Shirt/TX Brand Gifts)', <CancelIcon sx={{color: 'red'}} />, <CheckCircleIcon sx={{color: '#00A859'}}/>, <CancelIcon sx={{color: 'red'}} />, <CheckCircleIcon sx={{color: '#00A859'}}/>),
  createData('RoboClub International Ranking', <CancelIcon sx={{color: 'red'}} />, <CancelIcon sx={{color: 'red'}} />, <CheckCircleIcon sx={{color: '#00A859'}}/>, <CheckCircleIcon sx={{color: '#00A859'}}/>),
  createData('Free Visitor Pass to all Competition', <CheckCircleIcon sx={{color: '#00A859'}}/>, <CheckCircleIcon sx={{color: '#00A859'}}/>, <CheckCircleIcon sx={{color: '#00A859'}}/>, <CheckCircleIcon sx={{color: '#00A859'}}/>),
  createData('Technical Support (Online)', <CheckCircleIcon sx={{color: '#00A859'}}/>, <CheckCircleIcon sx={{color: '#00A859'}}/>, <CheckCircleIcon sx={{color: '#00A859'}}/>, <CheckCircleIcon sx={{color: '#00A859'}}/>),
  createData('Membership and Competition Certificates from various Govt Depts.', <CheckCircleIcon sx={{color: '#00A859'}}/>, <CheckCircleIcon sx={{color: '#00A859'}}/>, <CheckCircleIcon sx={{color: '#00A859'}}/>, <CheckCircleIcon sx={{color: '#00A859'}}/>),
  createData('', <Link to='/robotics-club'><PrimaryButton bgColor={'#00A859'} text={'Register'} /></Link>, <Link to='/robotics-club'><PrimaryButton bgColor={'#00A859'} text={'Register'} /></Link>, <Link to='/robotics-club'><PrimaryButton bgColor={'#00A859'} text={'Register'} /></Link>, <Link to='/corporate-club'><PrimaryButton bgColor={'#00A859'} text={'Register'} /></Link>),
];

export default function BasicTable() {
  return (
    <div className='container-sm' style={{marginTop: '5%'}}>
        <h3 className='partner-header' data-aos="fade-up">Choose the freedom you need.</h3>
    <TableContainer component={Paper} className='table-container' data-aos="fade-up">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Membership Benefits</TableCell>
            <TableCell align="center">Basic Membership Plan</TableCell>
            <TableCell align="center">Premium Membership Plan</TableCell>
            <TableCell align="center">RoboClub (Institution)</TableCell>
            <TableCell align="center">RoboClub (Corporate)</TableCell>
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
              <TableCell align="center">{row.checks1}</TableCell>
              <TableCell align="center">{row.checks2}</TableCell>
              <TableCell align="center">{row.checks3}</TableCell>
              <TableCell align="center">{row.checks4}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
