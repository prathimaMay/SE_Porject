import React from 'react';
//import userService from './UserService';
//import AuthenticationLogin from './AuthenticationLogin';
import Popular from '../MovieCategories/Popular';
import Navbar from './Navbar.js';
import Trending from '../MovieCategories/Trending';
import TopRated from '../MovieCategories/TopRated';
import Upcoming from '../MovieCategories/Upcoming';
import NowPlaying from '../MovieCategories/NowPlaying';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
/*
        this.state = {
            currentUser: AuthenticationLogin.currentUserValue,
            users: null
        };
*/
    }
/*
    componentDidMount() {
        userService.getAll().then(users => this.setState({ users }));
    }
*/
    render() {
        //const { currentUser, users } = this.state;
        return (
        <div>
            <div className='navbar-style'>
        <Navbar />
            </div>
            <div>
                <p>You're logged into FilmKritik!!</p>           
            </div>
            <div>
                <h3>Popular Movies</h3>
                <Popular />
            </div>
            <div>
                <h3>Trending Movies</h3>
                <Trending />
            </div>
            <div>
                <h3>Top Rated Movies</h3>
                <TopRated />
            </div>
            <div>
                <h3>Upcoming Movies</h3>
                <Upcoming />
            </div>
            <div>
                <h3>Now Playing Movies</h3>
                <NowPlaying />
            </div>
        </div>
        );
    }
}

export default HomePage;