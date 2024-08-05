import { Link } from 'react-router-dom';

const GameTable = (props) => {
    return (
        <div>
            <h3>{props.tableName}</h3>
            <table className='gameTable'>
                <thead>
                    <tr>
                        <th></th>
                        <th>1</th>
                        <th>2</th>
                        <th>3</th>
                        <th>4</th>
                        <th>5</th>
                        <th>6</th>
                        <th>7</th>
                        <th>8</th>
                        <th>9</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                        <td>Away</td>
                        <td>{props.data.away.innings[1]}</td>
                        <td>{props.data.away.innings[2]}</td>
                        <td>{props.data.away.innings[3]}</td>
                        <td>{props.data.away.innings[4]}</td>
                        <td>{props.data.away.innings[5]}</td>
                        <td>{props.data.away.innings[6]}</td>
                        <td>{props.data.away.innings[7]}</td>
                        <td>{props.data.away.innings[8]}</td>
                        <td>{props.data.away.innings[9]}</td>
                    </tr>
                    <tr>
                        <td>Home</td>
                        <td>{props.data.home.innings[1]}</td>
                        <td>{props.data.home.innings[2]}</td>
                        <td>{props.data.home.innings[3]}</td>
                        <td>{props.data.home.innings[4]}</td>
                        <td>{props.data.home.innings[5]}</td>
                        <td>{props.data.home.innings[6]}</td>
                        <td>{props.data.home.innings[7]}</td>
                        <td>{props.data.home.innings[8]}</td>
                        <td>{props.data.home.innings[9] ? props.data.home.innings[9] : "-"}</td>
                    </tr>

                </tbody>
            </table>
        </div>
    )
}

export default GameTable