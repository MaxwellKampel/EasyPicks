import { Link } from 'react-router-dom';

const MatchTable = (props) => {
    return (
        <div>
            <h3>{props.tableName}</h3>
            <table>
                <thead>
                    <tr>
                        <th>{props.head1}</th>
                        <th>Match</th>
                    </tr>
                </thead>
                <tbody>
                    {props.data.map((match, idx) => {
                        return <tr key = {idx}>
                            <td>{match.time}</td>
                            <td><Link to={`/baseball/${match.id}`} > {match.teams.away.name} <br></br> @ {match.teams.home.name} </Link></td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default MatchTable