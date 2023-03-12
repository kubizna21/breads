const React = require('react')
const bread = require('../models/bread')
const Default = require('./layouts/Default')

function Index({breads}) {
    return (
        <Default>
            <h2>Index Page</h2>
            {/*<p>My favorite bread is {breads[1].name}</p>*/}

            <ul>
                {
                    bread.map((bread, index) => {
                        return (<li key={index}>
                            <a href={`/breads/${index}`}>{bread.name}</a>
                        </li>)

                    })
                }
            </ul>
        </Default>
    )
}

module.exports = Index