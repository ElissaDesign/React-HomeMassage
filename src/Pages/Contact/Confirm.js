import React, { Component } from 'react';
import { List, ListItem, ListItemText } from '@mui/material';
import Button from '@mui/material/Button';
import NavBar from '../../components/NavBar/NavBar'



export class Confirm extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
//Email sending 





  render() {
    const {
      values: { fullName, phoneNumber, email, serviceName, time, gender, addition }
    } = this.props;
    const {values} = this.props;

    return (
      <>
      <NavBar/>
      <div className='w-[90%] md:w-[50%] mx-auto my-4 h-screen'>
        <h1></h1>
        <div>
          <form action="">
          <List>
              <ListItem>
                <ListItemText primary="Full Name" secondary={fullName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Phone Number" secondary={phoneNumber} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Email" secondary={email} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Service Name" secondary={serviceName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Time" secondary={time} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Gender" secondary={gender} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Other" secondary={addition} />
              </ListItem>
            </List>
            <br />

            <Button
              color="secondary"
              variant="contained"
              onClick={this.back}
            >Back</Button>

            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Confirm & Continue</Button>
          </form>
        </div>
      </div>
      </>
    );
  }
}

export default Confirm;
