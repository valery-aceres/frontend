

import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function PaymentForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="Name on the Card"
            fullWidth
            autoComplete="given-name"
          />
           <TextField
            required
            id="firstName"
            name="firstName"
            label="Card Number"
            fullWidth
            autoComplete="given-name"
          />
           <TextField
            required
            id="firstName"
            name="firstName"
            label="Expiration Date mm/yy"
            fullWidth
            autoComplete="given-name"
          />
           <TextField
            required
            id="firstName"
            name="firstName"
            label="CVV"
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}