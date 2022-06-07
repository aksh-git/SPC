import React from 'react'

function NotFound() {
  return (
    <div className='container not-found'>
        <center>
            <div style={{marginTop:'10%'}}>
                <h1 className='normal'>Error 404</h1>
                <h3 className='normal'>Page not found</h3>
                <br/>
                <br/>
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