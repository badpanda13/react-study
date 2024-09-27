import './app-info.css';

const AppInfo = (props) => {
    const {allEmpls, increaseEmpls} = props;
    return (
        <div className="app-info">
            <h1>Учёт сотрудников в компании</h1>
            <h2>Общее число сотрудников: {allEmpls}</h2>
            <h2>Премию получат: {increaseEmpls}</h2>
        </div>
    )
}

export default AppInfo;