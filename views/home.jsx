const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
<main>
    <h1>'Rest-Rant'</h1>
    <div>
    <img src="/images/images.jpeg5.jpeg " alt="" />
    </div>
    


                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = home






