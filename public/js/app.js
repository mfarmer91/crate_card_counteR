class EmployeeList extends React.Component {
  state = {
    employees: [],
    total: 0,
  };

  componentDidMount() {
    this.setState({ employees: Seed.employees });
  }

  handleEmployeeUpVote = (employeeId) => {
    const nextEmployees = this.state.employees.map((employee) => {
      if (employee.id === employeeId) {
        return Object.assign({}, employee, {
          cards: employee.cards + 1,  
        });
          
          
      } else {
        return employee;
      }
    });
    this.setState({
      employees: nextEmployees,
      total: this.state.total + 1,
    });
  }
  
   handleEmployeeDownVote = (employeeId) => {
    const nextEmployees = this.state.employees.map((employee) => {
      if (employee.id === employeeId) {
        return Object.assign({}, employee, {
          cards: employee.cards - 1, 
        });
      } else {
        return employee;
      }
    });
    this.setState({
      employees: nextEmployees,
      total: this.state.total - 1,
    });
  }
   

  render() {
    const employees = this.state.employees.sort((a, b) => (
      b.cards - a.cards
    ));
    const employeeComponents = employees.map((employee) => (
      <Employee
        key={'employee-' + employee.id}
        id={employee.id}
        name={employee.name}
        cards={employee.cards}
        onVote={this.handleEmployeeUpVote}
        onDownVote={this.handleEmployeeDownVote}
      />
    ));
    return (
      <div className='ui unstackable items'>
        <div className='ui container'>
                    <h2 className = 'ui tiny header'>Total Cards: {this.state.total}</h2>
                    {this.props.cards}
            </div>
        {employeeComponents}
      </div>
    );
  }
}

class Employee extends React.Component {
  handleUpVote = () => (
    this.props.onVote(this.props.id)
  );

 handleDownVote = () => (
    this.props.onDownVote(this.props.id)
  );

  render() {
    return (
      <div className='item'>
        <div className='middle aligned content'>
          <div className='header'>
            <a onClick={this.handleUpVote}>
              <i className='large caret up icon' />
            </a>
            <a onClick={this.handleDownVote}>
              <i className='large caret down icon' />
            </a>
            {this.props.cards}
          </div>
          <div className='description'>
            <p>
              {this.props.name}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

//class Counter extends React.Component {
//    state = {
//        total: 0,
//    };
//
//    totalCards = () => (
//        this.state.total++
//      );    
//    
//    render() {
//        return (
//            <div className='ui container'>
//                    <h2 className = 'ui tiny header'>{this.state.total}</h2>
//                    {this.props.cards}
//            </div>
//        );
//    }
//}

//class Goal extends React.Component {
//        render() {
//        return (
//            <div className='ui container'>
//                <h1 id='weekly_goal' className='ui small header'>Goal For Week: 12</h1>
//                    {this.props.total}
//            </div>
//        );
//    }
//}



ReactDOM.render(
  <EmployeeList />,
  document.getElementById('content')
);