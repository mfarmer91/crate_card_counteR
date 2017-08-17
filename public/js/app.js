
class EmployeeList extends React.Component {
  render() {
      
// const employees = Seed.products.sort((a, b) => (
//      b.votes - a.votes
// ));
 const employeeComponents = Seed.employees.map((employee) => (
      <Employee
        key={'employee-' + employee.id}
        id={employee.id}
        name={employee.name}
        votes={employee.votes}
      />
    ));
      return(
        <div className='ui unstackable items'> 
            {employeeComponents}
        </div>
      );
  }
}

class Employee extends React.Component {
  render() {
    return (
      <div className='item'>
        <div className='middle aligned content'>
          <div className='header'>
            <a>
              <i className='large caret up icon' />
            </a>
            {this.props.votes}
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

