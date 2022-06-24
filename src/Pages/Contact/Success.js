import React, { Component } from 'react';

export class Success extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    return (
      <div className='w-[90%] md:w-[50%] mx-auto my-4 h-screen  '>
        <>
            <h1>Success</h1>
            <h1>Thank You For Your Submission</h1>
            <p>You will get an email with further instructions.</p>
          
        </>
      </div>
    );
  }
}

export default Success;
