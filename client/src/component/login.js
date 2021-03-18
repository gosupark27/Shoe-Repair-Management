import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

const Login = () => {

    return (
        <Container maxWidth={'xs'}>
            <form>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField fullWidth size="small" name="email" label="Email Address" variant="outlined" />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField fullWidth size="small" name="password" label="Password" type="password" variant="outlined" />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Button color="secondary" fullWidth type="submit" variant="contained">
                            Log in
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
    )
}

export default Login;