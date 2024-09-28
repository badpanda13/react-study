import './app-filter.css';

const AppFilter = ({filter, onUpdateFilter}) => {

    const buttonData = [
        {name:'', label:'Все сотрудники'},
        {name:'rise', label:'На повышение'},
        {name:'moreThan1000', label:'З/п больше $1000'}
    ]

    const buttons = buttonData.map(({name,label})=> { 
        const className = name===filter ? "btn btn-light" : "btn btn-outline-light";
        return (
            <button
                className={className}
                onClick={()=>{onUpdateFilter(name)}}
                key={name}
                type="button">
                    {label}
            </button>   
    )})
    return (
        <div className="btn-group">
            {buttons}
        </div>
    )
}

export default AppFilter;