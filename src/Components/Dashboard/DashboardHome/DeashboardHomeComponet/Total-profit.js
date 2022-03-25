import { Avatar, Box, Card, CardContent, Grid, Typography } from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

export const TotalProfit = (props) => (
    <Card
        sx={{ height: '100%' }}

    >
        <CardContent>
            <Grid
                container
                spacing={3}
                sx={{ justifyContent: 'space-between' }}
            >
                <Grid item>
                    <Typography
                        color="textSecondary"
                        gutterBottom
                        variant="overline"
                    >
                        Total Profit
                    </Typography>
                    <Typography
                        color="textPrimary"
                        variant="h4"
                    >
                        $00k
                    </Typography>
                </Grid>
                <Grid item>
                    <Avatar
                        sx={{
                            backgroundColor: 'rgba(0, 159, 255, 0.87)',
                            height: 56,
                            width: 56
                        }}
                    >
                        <AttachMoneyIcon />
                    </Avatar>
                </Grid>
            </Grid>
            <Box
                sx={{
                    pt: 2,
                    display: 'flex',
                    alignItems: 'center'
                }}
            >
              <Typography
                    color="error"
                    sx={{
                        mr: 1
                    }}
                    variant="body2"
                >

                </Typography>
                <Typography
                    color="textSecondary"
                    variant="caption"
                >

                </Typography>
            </Box>
        </CardContent>
    </Card>
);