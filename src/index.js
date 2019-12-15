import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {results: [{
		    dob: {age: 0},
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
	            <tr>
	                <th>Gender</th>
	                <th>First Name</th>
	                <th>Last Name</th>
	                <th>Country</th>
	                <th>Birthday</th>
	            </tr>
	            {
					this.state.results.map(
					 user =>
							<UserRow user={user} />
					)
				}
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
	            <UserDataCell data={this.props.user.dob.age} />
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

ReactDOM.render(
  <UserList />,
  document.getElementById('root')
);