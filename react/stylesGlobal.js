import global from './components/global.css';
import React,{useEffect} from 'react'
import { Helmet } from 'vtex.render-runtime'

const stylesGlobal = () => {

    return (
    <>
      <Helmet>
        <link rel="stylesheet" href="/files/stylesVtexIO.css"/>
        <meta name="google-site-verification" content="dW4dzTgjQW-inthkefdwZ-4iJqRotSGyIjCSwDUYuV0" />
      </Helmet>
        {/* <Helmet>
        <meta name="google-site-verification" content="YpJgKUa0n2F05qZx5BVraAKo90-yc7WufKDt1w4IVtk" />
        </Helmet> */}
    </>
    );
}

export default stylesGlobal
