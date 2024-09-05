import React, { useEffect, useState } from 'react';
import { Container, Typography, Card, CardContent, CircularProgress, Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import './style.css'; 

const Dashboard: React.FC = () => {
  const [liveMatch, setLiveMatch] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLiveMatch = async () => {
      try {
        const response = {
          team1: 'India',
          team2: 'Australia',
          status: 'In Progress',
          score: '150/3 (20.0)',
          overs: '20.0',
          venue: 'Wankhede Stadium, Mumbai',
          date: 'September 5, 2024',
          keyPlayers: {
            topScorer: 'Virat Kohli - 75* (50)',
            topBowler: 'Mitchell Starc - 2/30 (4)',
          },
        };
        setLiveMatch(response);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch live cricket data');
        setLoading(false);
      }
    };

    fetchLiveMatch();
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'In Progress':
        return '#ff9800'; // Orange for in progress
      case 'Completed':
        return '#4caf50'; // Green for completed
      case 'Upcoming':
        return '#2196f3'; // Blue for upcoming
      default:
        return '#000'; // Default black
    }
  };

  if (loading) return <Box textAlign="center" mt={4}><CircularProgress /></Box>;
  if (error) return <Typography color="error" textAlign="center">{error}</Typography>;

  return (
    <Container>
      <Typography variant="h4" gutterBottom textAlign="center" className="dashboard-title">
        Live Cricket Match
      </Typography>
      <Box mb={3} textAlign="center">
        <Button
          variant="contained"
          color="primary"
          onClick={() => window.location.reload()} 
          style={{ borderRadius: '20px', padding: '10px 30px' }}
        >
          Refresh
        </Button>
      </Box>
      {liveMatch ? (
        <>
          <Box display="flex" justifyContent="center" mb={3}>
            <Card className="match-card" style={{ borderLeft: `5px solid ${getStatusColor(liveMatch.status)}`, maxWidth: '600px' }}>
              <CardContent>
                <Typography variant="h5" className="match-title">
                  {liveMatch.team1} <span className="vs">vs</span> {liveMatch.team2}
                </Typography>
                <Typography color="textSecondary" className="match-status" style={{ fontWeight: 600 }}>
                  {liveMatch.status}
                </Typography>
                <Typography variant="body1" className="match-score" style={{ marginTop: '10px' }}>
                  <strong>Score:</strong> {liveMatch.score}
                </Typography>
                <Typography variant="body1" className="match-overs" style={{ marginTop: '8px' }}>
                  <strong>Overs:</strong> {liveMatch.overs}
                </Typography>
                <Typography variant="body1" className="match-venue" style={{ marginTop: '8px' }}>
                  <strong>Venue:</strong> {liveMatch.venue}
                </Typography>
                <Typography variant="body1" className="match-date" style={{ marginTop: '8px' }}>
                  <strong>Date:</strong> {liveMatch.date}
                </Typography>
                <Typography variant="h6" className="match-key-players-title" style={{ marginTop: '16px' }}>
                  Key Players
                </Typography>
                <Typography variant="body2" className="match-key-players" style={{ marginTop: '6px' }}>
                  <strong>Top Scorer:</strong> {liveMatch.keyPlayers.topScorer}
                </Typography>
                <Typography variant="body2" className="match-key-players" style={{ marginTop: '4px' }}>
                  <strong>Top Bowler:</strong> {liveMatch.keyPlayers.topBowler}
                </Typography>
              </CardContent>
            </Card>
          </Box>

          {/* Table for match details */}
          <Box>
            <TableContainer component={Paper} className="match-table" style={{ marginTop: '20px', borderRadius: '10px', overflow: 'hidden' }}>
              <Table>
                <TableHead>
                  <TableRow style={{ backgroundColor: '#f5f5f5' }}>
                    <TableCell style={{ fontWeight: 'bold', fontSize: '16px' }}>Detail</TableCell>
                    <TableCell align="center" style={{ fontWeight: 'bold', fontSize: '16px' }}>Information</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell component="th" scope="row">Score</TableCell>
                    <TableCell align="center">{liveMatch.score}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">Overs</TableCell>
                    <TableCell align="center">{liveMatch.overs}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">Venue</TableCell>
                    <TableCell align="center">{liveMatch.venue}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">Date</TableCell>
                    <TableCell align="center">{liveMatch.date}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">Top Scorer</TableCell>
                    <TableCell align="center">{liveMatch.keyPlayers.topScorer}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">Top Bowler</TableCell>
                    <TableCell align="center">{liveMatch.keyPlayers.topBowler}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </>
      ) : (
        <Typography color="textSecondary" textAlign="center">No live match data available.</Typography>
      )}
    </Container>
  );
};

export default Dashboard;

