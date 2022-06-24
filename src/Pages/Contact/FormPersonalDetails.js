import React, { Component } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import NavBar from '../../components/NavBar/NavBar'


export class FormPersonalDetails extends Component {

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
  
    const { values, handleChange } = this.props;
    return (
      <>
      <NavBar/>
      <div className='w-[90%] md:w-[50%] mx-auto my-4 h-screen'>
        <h1></h1>
        <div>
          <form action="">

          <TextField
              placeholder="Name of the service"
              label="Service Name"
              onChange={handleChange('serviceName')}
              defaultValue={values.serviceName}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="When do you want that service"
              label="Time"
              onChange={handleChange('time')}
              defaultValue={values.time}
              margin="normal"
              fullWidth
            />
            <br/>

            <TextField
              placeholder="by a woman or man"
              label="Gender"
              onChange={handleChange('gender')}
              defaultValue={values.gender}
              margin="normal"
              fullWidth
            />
            <br/>


            <TextField
              placeholder="Anything Else"
              label="Other"
              onChange={handleChange('addition')}
              defaultValue={values.addition}
              margin="normal"
              fullWidth
            />
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
            >Continue</Button>
          </form>
        </div>
      </div>
      </>
    );
  }
}

export default FormPersonalDetails;
