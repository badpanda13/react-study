import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import './app.css';

const data = [
    {name: 'John L', salary: 800, increase: true},
    {name: 'Lisa T', salary: 1000, increase: false},
    {name: 'Melody W', salary: 1400, increase:true}
]


function App() {
    return (
        <div className="app">
            <AppInfo/>
            <div className="search-panel">
            <SearchPanel/>
            <AppFilter/>
            </div>
            <EmployeesList data={data}/>
            <EmployeesAddForm/>
           
        </div>
    );
}

export default App;