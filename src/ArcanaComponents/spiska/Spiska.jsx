import React from 'react'
import './spiska.css'

export default function Spiska() {
    return (
        <>
        <div className="list-head"   >
        <h1> Database</h1>
        <hr /> <br />
        </div>
        <div id="spiska">
            <div>   {/* bu tablitsa niki */}
               
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>INN</th>
                        <th>ID</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Sardor</td>
                        <td>Dadaboyev</td>
                        <td>123456789</td>
                        <td>a0wdwdasdwdwdw01</td>
                    </tr>
                    <tr>
                        <td>JS</td>
                        <td>Reactov</td>
                        <td>987654321</td>
                        <td>002sdsdsdwadsddwdwdsd</td>
                    </tr>
                </tbody>
            </table>

            </div>
        </div>
    </>)
}
