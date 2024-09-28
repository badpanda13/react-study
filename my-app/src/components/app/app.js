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
                {name: 'John L', salary: 800, increase: true, rise: true, id:1},
                {name: 'Lisa T', salary: 1000, increase: false, rise: false, id:2},
                {name: 'Melody W', salary: 1400, increase:true, rise: false, id:3}
            ],
            term:''
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
        const newItem = {name:name, salary:salary,increase: false, rise: false, id:this.idMax++};
        this.setState(({data}) => {
            const arr = [...data, newItem];
            return {
                data: arr  
            }
        });

    }
    
    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if(item.id === id){
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))
    }

    searchEmp = (items, term) => {
        if(term.length === 0){
            return items;
        }
        return items.filter(item => {
            return item.name.indexOf(term) > -1;
        })
    }


    onUpdateSearch = (term) => {
        this.setState({term});
    }
    
    render() {
        const {data,term} = this.state;
        const increaseEmpls = this.state.data.filter(item => item.increase).length;
        const visibleData = this.searchEmp(data,term);
        return (
            <div className="app">
                <AppInfo
                allEmpls={this.state.data.length}
                increaseEmpls={increaseEmpls}
                />
                <div className="search-panel">
                <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                <AppFilter/>
                </div>
                <EmployeesList 
                data={visibleData}
                onToggleProp={this.onToggleProp}
                onDelete={this.deleteItem}/>
                <EmployeesAddForm
                onAdd={this.addItem}/>
            
            </div>
        );
    }
}

export default App;