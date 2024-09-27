import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import './app.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            data : [
                {name: 'John L', salary: 800, increase: true, id:1},
                {name: 'Lisa T', salary: 1000, increase: false, id:2},
                {name: 'Melody W', salary: 1400, increase:true, id:3}
            ]
        }
        this.idMax = 4;
    }

    deleteItem =(id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !==id)  
            }
        })
    }

    addItem = (name, salary) => {
        const newItem = {name:name, salary:salary,increase: false, id:this.idMax++};
        this.setState(({data}) => {
            const arr = [...data, newItem];
            return {
                data: arr  
            }
        });

    }
    

    render() {
        return (
            <div className="app">
                <AppInfo/>
                <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
                </div>
                <EmployeesList 
                data={this.state.data}
                onDelete={this.deleteItem}/>
                <EmployeesAddForm
                onAdd={this.addItem}/>
            
            </div>
        );
    }
}

export default App;