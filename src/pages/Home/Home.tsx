import { AppBar, Container, Toolbar } from '@mui/material';
import Footer from './Footer';
import History from './History';
import Intro from './Intro';
import Navigation from './Navigation';
import RoadMap from './RoadMap';

const Home = () => {
    return (
        <Container maxWidth="md">
            <AppBar position="sticky">
                <Toolbar>
                    <Navigation />
                </Toolbar>
            </AppBar>
            <Intro />
            <RoadMap />
            <History />
            <Footer />
        </Container>
    );
};

export default Home;
