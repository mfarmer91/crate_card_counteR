class EmployeeList extends React.Component {
  state = {
    employees: [],
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
      />
    ));
    return (
      <div className='ui unstackable items'>
        {employeeComponents}
      </div>
    );
  }
}

class Employee extends React.Component {
  handleUpVote = () => (
    this.props.onVote(this.props.id)
  );

  render() {
    return (
      <div className='item'>
        <div className='middle aligned content'>
          <div className='header'>
            <a onClick={this.handleUpVote}>
              <i className='large caret up icon' />
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

ReactDOM.render(
  <EmployeeList />,
  document.getElementById('content')
);