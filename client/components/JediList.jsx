import React from 'react'

const jedis = [{
    name: 'Luke',
    force: 'light'
},
{
    name: 'Darth Vader',
    force: 'dark'
},
{
    name: 'Yoda',
    force: 'light'
}
]

function JediList({match}) {
    let {force} = match.params 
    return <div>
        <ul>
            {jedis.filter(jedi => jedi.force == force).map(jedi => <li>
                {jedi.name} :  {jedi.force}
            </li>)}
        </ul>
    </div>
}

export default JediList