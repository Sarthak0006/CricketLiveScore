import React, { useEffect, useState } from 'react';
import { Container, Typography, Card, CardContent, CircularProgress, Grid, Box, Button } from '@mui/material';
// import axios from 'axios';
import './style.css'; 

const Dashboard: React.FC = () => {
  const [liveMatches, setLiveMatches] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Replace this URL with your API endpoint
    const fetchLiveMatches = async () => {
      try {
        // const response = await axios.get('https://api.example.com/live-cricket-matches'); // Replace with your API URL
        const response = [
            {
              team1: 'India',
              team2: 'Australia',
              status: 'In Progress',
              score: '150/3 (20.0)',
            },
            {
              team1: 'England',
              team2: 'South Africa',
              status: 'Completed',
              score: '180/4 (25.0)',
            },
            {
              team1: 'Pakistan',
              team2: 'New Zealand',
              status: 'Upcoming',
              score: 'N/A',
            },
            {
              team1: 'Sri Lanka',
              team2: 'West Indies',
              status: 'In Progress',
              score: '120/2 (15.0)',
            },
            {
              team1: 'Bangladesh',
              team2: 'Zimbabwe',
              status: 'Completed',
              score: '160/5 (30.0)',
            },
          ];
        // setLiveMatches(response.data.matches);
        setLiveMatches(response);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch live cricket data');
        setLoading(false);
      }
    };

    fetchLiveMatches();
  }, []);

  if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Live Cricket Updates
      </Typography>
      <Box mb={2}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => window.location.reload()} // Refresh button for manual data update
        >
          Refresh
        </Button>
      </Box>
      <Grid container spacing={3}>
        {liveMatches.length > 0 ? (
          liveMatches.map((match, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardContent>
                  <Typography variant="h6">
                    {match.team1} vs {match.team2}
                  </Typography>
                  <Typography color="textSecondary">
                    {match.status}
                  </Typography>
                  <Typography variant="body2">
                    Score: {match.score}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography>No live matches available at the moment.</Typography>
        )}
      </Grid>
    </Container>
  );
};

export default Dashboard;
