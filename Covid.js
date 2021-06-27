import React, { useEffect, useState } from 'react';
import './index.css'
const Covid = () => {
    const [olddata, newData] = useState([]);
    const covidDATA = async () => {
        try {
            const resp = await fetch('https://api.covid19india.org/data.json');
            const realdata = await resp.json();
            newData(realdata.statewise);
        } catch (error) {
            console.log('Error');
        }
    }
    useEffect(() => {
        covidDATA();
    }, []);
    return (
        <>
            <div className="container-fluid mt-5">
                <div className="main-heading">
                    <h1 className="heading"><span className="font-weight-bold">India</span>Covid-19 Dashboard</h1>
                </div>
                <div className="table-responsive">
                    <table className="table table-hover">
                        <thead className="thead-dark">
                            <th>State</th>
                            <td>Confirmed</td>
                            <td>Recovered</td>
                            <td>Deaths</td>
                            <td>Active</td>
                            <td>Last Update</td>
                        </thead>
                        <tbody>
                            {
                                olddata.map((cur, ind) => {
                                    return (
                                        <tr key={ind}>
                                            <th>{cur.state}</th>
                                            <td>{cur.confirmed}</td>
                                            <td>{cur.recovered}</td>
                                            <td>{cur.deaths}</td>
                                            <td>{cur.active}</td>
                                            <td>{cur.lastupdatedtime}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
};
export default Covid;