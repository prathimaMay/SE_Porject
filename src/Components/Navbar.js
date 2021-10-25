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
    
    
        return (
            <div class="topnav">
                <a class="active" href="">Movies</a>
                <a href="#news">TV Shows</a>
                <a href="#contact">People</a>
                <div className="topnav-right">
                    <Space direction="vertical">
                    <Search placeholder="Search for a movie, tv show, person..." onSearch={onSearch} enterButton />  
                    </Space>
                </div>
            </div>
        )
    }
}

export default Navbar;