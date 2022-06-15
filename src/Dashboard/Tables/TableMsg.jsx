import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const TableMsg = () => {

    const rows = [
        {
          id: 1143155,
          service: "Couple Massage",
          img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
          customer: "John Smith",
          date: "1 March",
          dayTime: "Morning",
          amount: 785,
          therapist: "Cash on Delivery",
          DurationService: "30 min",
          email:"abc@gmail.com",
          clientStatus: "Return",
          phoneNumber: "078181815"
        },
        {
          id: 2235235,
          service: "Playstation 5",
          img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
          customer: "Michael Doe",
          date: "1 March",
          dayTime: "Morning",
          amount: 900,
          therapist: "Online Payment",
          DurationService: "30 min",
          email:"abc@gmail.com",
          clientStatus: "Return",
          phoneNumber: "078181815"
        },
        {
          id: 2342353,
          service: "Redragon S101",
          img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
          customer: "John Smith",
          date: "1 March",
          dayTime: "Morning",
          amount: 35,
          therapist: "Cash on Delivery",
          DurationService: "30 min",
          email:"abc@gmail.com",
          clientStatus: "Return",
          phoneNumber: "078181815"
        },
        {
          id: 2357741,
          service: "Razer Blade 15",
          img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
          customer: "Jane Smith",
          date: "1 March",
          dayTime: "Morning",
          amount: 920,
          therapist: "Online",
          DurationService: "30 min",
          email:"abc@gmail.com",
          clientStatus: "Return",
          phoneNumber: "078181815"
        },
        {
          id: 2342355,
          service: "ASUS ROG Strix",
          img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
          customer: "Harold Carol",
          date: "1 March",
          dayTime: "Morning",
          amount: 2000,
          therapist: "Online",
          DurationService: "30 min",
          email:"abc@gmail.com",
          clientStatus: "Return",
          phoneNumber: "078181815"
        },
      ];
    return ( 
        <TableContainer component={Paper} className=''>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell className="tableCell">Name</TableCell>
          <TableCell className="tableCell">Email</TableCell>
          <TableCell className="tableCell">Phone</TableCell>
            <TableCell className="tableCell">Service</TableCell>
            <TableCell className="tableCell">Duration</TableCell>
            <TableCell className="tableCell">Therapist</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">DayTime</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.customer}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.phoneNumber}</TableCell>
              <TableCell>{row.service}</TableCell>
              <TableCell>{row.DurationService}</TableCell>
              <TableCell>{row.therapist}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.dayTime}</TableCell>
              <TableCell>{row.amount}</TableCell>
              <TableCell>{row.clientStatus}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
     );
}
 
export default TableMsg;