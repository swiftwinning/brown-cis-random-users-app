/*
 * Jeffrey Winning
 * swiftwinning @ gmail . com
 * 617 595 8972
 * 
 * Brown CIS - Random User API Parser Application
 * 
 * This is a one-page React.js application for fetching and dynamically displaying
 * the data of random users from the randomuser.me API.
 *
 * It retrieves an Array of 20 users from U.S. and Canada, taking only the data
 * needed for our data model: gender, name, location, and dob.
 *
 * It includes the Bonus Feature of dynamic re-sorting of the user Array by writing
 * a custom compareFunction for the Array.prototype.sort() method,
 * and it uses the libraries bootstrap and react-moment to format the table and the dates.
 *
 */

import React from 'react';
import ReactDOM from 'react-dom';
import Moment from 'react-moment';
import 'bootstrap/dist/css/bootstrap.min.css';

//  Constructor class creates a sortable list of random users
class UserList extends React.Component {

    constructor(props) {
        super(props);
        this.sortByFirst = this.sortByFirst.bind(this);
        this.sortByLast = this.sortByLast.bind(this);
        this.state = {
            results: [{
				dob: {date: 0},
				gender: "",
				location: {country: ""},
				name: {first: "", last: ""},
	        }],
	        sortedByFirst: false,
	        sortedByLast: false
	    };
    }
  
    componentDidMount(){
	    //  API request requirements: get 20 random users from United States or Canada,
	    //  limit request to needed data: gender, name, location, date of birth
	    const URL =
		    'https://randomuser.me/api/?results=20&nat=us,ca&inc=gender,name,location,dob';
	    fetch(URL)
		    .then(res => res.json())
		    .then(res => {
		        this.setState({results: res.results});
		        console.log("fetch(URL) Results:");
		        console.log(this.state.results);
	        });
	}
	
	//  render function for UserList component
	//  clickable table headers are included here instead of in separate component
	//  so they can have direct access to set state of UserList 
	render() {
	    return (
	        <table className=
	            "table table-striped table-bordered table-hover table-sm" >
	            <thead className="thead-dark" >
					<tr>
						<th scope="col" >Gender</th>
						<th scope="col" onClick={this.sortByFirst} >
						    First Name &uarr; &darr;
						</th>
						<th scope="col" onClick={this.sortByLast} >
						    Last Name &uarr; &darr;
						</th>
						<th scope="col" >Country</th>
						<th scope="col" >Date of Birth</th>
						<th scope="col" >Birthday</th>
					</tr>
	            </thead>
	            <tbody>
					{
					    this.state.results.map(
							user => {
								return (<UserRow 
								    user={user} 
								    //  A perfect key is guaranteed to be unique.
								    //  This is imperfect because randomization might lead 
								    //  to duplicates and create console warnings.
								    key={user.name.last + user.dob.date} 
								/>);
							}
						)
					}
				</tbody>
	        </table>
	    )
	}
	
	//  Function called by clicking First Name table header
	//  Customized compareFunction accesses first name from data structure of user array
	//  It uses ascending or descending version depending on sortedByFirst boolean marker
	sortByFirst() {
	    var sortedResults;
	    if (!this.state.sortedByFirst) {
			sortedResults = this.state.results.sort(function(a, b) {
					const name1 = a.name.first.toLowerCase();
					const name2 = b.name.first.toLowerCase();
					if (name1 < name2) {
						return -1;
					} else if (name1 > name2) {
						return 1;
					} else {
						return 0;
					}
			});
		} else {
		    sortedResults = this.state.results.sort(function(a, b) {
					const name1 = a.name.first.toLowerCase();
					const name2 = b.name.first.toLowerCase();
					if (name1 < name2) {
						return 1;
					} else if (name1 > name2) {
						return -1;
					} else {
						return 0;
					}
			});
		}
		this.setState({
            results: sortedResults,
	        sortedByFirst: !this.state.sortedByFirst,
	        sortedByLast: false
	    });
	}
	
	//  Function called by clicking Last Name table header
	//  Customized compareFunction accesses last name from data structure of user array
	//  It uses ascending or descending version depending on sortedByLast boolean marker
	sortByLast() {
	    var sortedResults;
	    if (!this.state.sortedByLast) {
			sortedResults = this.state.results.sort(function(a, b) {
					const name1 = a.name.last.toLowerCase();
					const name2 = b.name.last.toLowerCase();
					if (name1 < name2) {
						return -1;
					} else if (name1 > name2) {
						return 1;
					} else {
						return 0;
					}
			});
		} else {
		    sortedResults = this.state.results.sort(function(a, b) {
					const name1 = a.name.last.toLowerCase();
					const name2 = b.name.last.toLowerCase();
					if (name1 < name2) {
						return 1;
					} else if (name1 > name2) {
						return -1;
					} else {
						return 0;
					}
			});
		}
		this.setState({
            results: sortedResults,
	        sortedByFirst: false,
	        sortedByLast: !this.state.sortedByLast
	    });
	}
}

//  Class creates a row of all the required data fields for one user in our data model:
//  gender, first name, last name, country, date of birth, and birthday message
class UserRow extends React.Component {
	render() {
	    return (
	        <tr>
	            <UserDataCell data={this.props.user.gender} />
	            <UserDataCell data={this.props.user.name.first} />
	            <UserDataCell data={this.props.user.name.last} />
	            <UserDataCell data={this.props.user.location.country} />
	            <DateOfBirthCell dob={this.props.user.dob} />
	            <BirthdayCell dob={this.props.user.dob} />
	        </tr>
	    )
	}
}

//  Component class creates a general use table cell for storing various user data
class UserDataCell extends React.Component {
  render() {
	    return (
	        <td>{this.props.data}</td>
	    );
	}
}

//  Component class for date of birth table cell
//  Provides special formatting of date using Moment from react-moment
class DateOfBirthCell extends React.Component {
    render() {
        return (
            <td>
                <Moment format="MMM D, YYYY">{this.props.dob.date}</Moment>
            </td>
        );
    }
}

//  Component class for Birthday table cell
//  Dynamically creates message by comparing date of birth to today's date
class BirthdayCell extends React.Component {
    render() {
        let message;
        const dobDate = new Date(this.props.dob.date);
        const todayDate = new Date();
        
        //  First check if user's birth month is earlier or later than today's month
        //  Then check if user's birth date is earlier or later than today's date
        if (dobDate.getMonth() < todayDate.getMonth()) {
		    message = "already happened";
		} else if (dobDate.getMonth() > todayDate.getMonth()){
		    message = "has yet to occur";
		} else if (dobDate.getDate() < todayDate.getDate()){
		    message = "already happened";
		} else if (dobDate.getDate() > todayDate.getDate()){
		    message = "has yet to occur";
		} else {
		    message = "is today!";
		}
		return <td>{message}</td>;
    }
}

//  Renders the UserList app in the DOM
ReactDOM.render(
    <div>
        <h1>20 Random Users from U.S. & Canada</h1>
        <p>Sort by clicking First Name and Last Name</p>
        <UserList />
    </div>,
    document.getElementById('root')
);