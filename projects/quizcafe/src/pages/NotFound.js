import React from 'react'

function NotFound() {
  return (
    <div className='container not-found'>
        <center>
            <div style={{marginTop:'10%'}}>
                <h1 style={{fontSize:'7em'}} className='normal'>404</h1>
                <h3 style={{marginTop:'-4em',letterSpacing:'2px',fontSize:'1.3rem'}} className='normal'>Page not found.</h3>
                <br/>
                <a href='/'>
                    <button className='button-base btn-push'>
                        <span className='normal'>Go Back to home</span>
                    </button>
                </a>
            </div>
        </center>
    </div>
  )
}

export default NotFound