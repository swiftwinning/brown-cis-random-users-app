import React from 'react';
import ReactDOM from 'react-dom';
import Moment from 'react-moment';
import 'bootstrap/dist/css/bootstrap.min.css';

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
	  
	    const URL =
		    'https://randomuser.me/api/?results=20&nat=us,ca&inc=gender,name,location,dob';
	  
	    fetch(URL)
		    .then(res => res.json())
		    .then(res => {
		        this.setState({results: res.results});
		        console.log("fetch(URL) Results:");
		        console.log(this.state.results);
	    })	  
	}
	
	render() {
	    return (
	        <table className=
	            "table table-striped table-bordered table-hover table-sm table-responsive" >
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
								    key={user.name.last + user.dob.date} 
								/>);
							}
						)
					}
				</tbody>
	        </table>
	    )
	}
	
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
                <Moment format="MMM D, YYYY">{this.props.dob.date}</Moment>
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