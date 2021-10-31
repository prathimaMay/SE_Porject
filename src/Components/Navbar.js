import React, { Component } from 'react'

import { Input, Space } from 'antd';

class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            search: ''

        }
    }
    render() {

    const { Search } = Input;
    const onSearch = value => console.log(value);
    
    const logout = () => {
        console.log();
            localStorage.clear();
            window.location.href = 'http://localhost:3000';
        }
    
    
        return (
            <div class="topnav">
                <div className="nav-left-items">
                <div class='nav-left'>
                    <a class="active" href="">Movies</a>
                    <a href="#news">TV Shows</a>
                    <a href="#contact">People</a>
                </div>
                <div className="topnav-right">
                    <Space direction="vertical">
                    <Search placeholder="Search for a movie, tv show, person..." onSearch={onSearch} enterButton />  
                    </Space>
                </div>
                </div>
            <div className="logout-btn">
                <a className='logout-btn' href="#Logout" onClick={logout}>Logout</a>
            </div>
                
            </div>
        )
    }
}

export default Navbar;