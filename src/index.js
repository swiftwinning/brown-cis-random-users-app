import React from 'react';
import ReactDOM from 'react-dom';
import Moment from 'react-moment';
import './index.css';

class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {results: [{
		    dob: {date: ""},
			gender: "",
			location: {country: ""},
			name: {first: "", last: ""}
	    }] };
    }
  
  componentDidMount(){
	  
	  const URL =
		  'https://randomuser.me/api/?results=20&nat=us,ca&inc=gender,name,location,dob';
	  
	  fetch(URL)
		  .then(res => res.json())
		  .then(res => {
		      this.setState({results: res.results});
		      console.log("Fetch Results...");
		      console.log(this.state.results);
		   })	  
	}
	
	render() {
	    return (
	        <table>
	            <thead>
					<tr>
						<th>Gender</th>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Country</th>
						<th>Date of Birth</th>
						<th>Birthday</th>
					</tr>
	            </thead>
	            <tbody>
					{
					    this.state.results.map(
							user => {
								return <UserRow 
								    user={user} 
								    key={user.name.last + user.dob.date} 
								/>;
							}
						)
					}
				</tbody>
	        </table>
	    )
	}
}

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

class UserDataCell extends React.Component {
  render() {
	    return (
	        <td>{this.props.data}</td>
	    )
	}
}

class DateOfBirthCell extends React.Component {
    render() {
        return (
            <td>
                <Moment format="D MMM YYYY">{this.props.dob.date}</Moment>
            </td>
        )
    }
}

class BirthdayCell extends React.Component {
    render() {
        let message;
        const dobDate = new Date(this.props.dob.date);
        const todayDate = new Date();
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
		return <td>{message}</td>
    }
}

ReactDOM.render(
  <UserList />,
  document.getElementById('root')
);