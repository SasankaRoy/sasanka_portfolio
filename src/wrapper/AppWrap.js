import React from 'react';
import {NavigateDotes,SocialMedia} from '../components';

const AppWrap = (Component,idName,classNames) => function HOC() {
  return (
   <>
       <div id={idName} className={`app__container ${classNames}`}>
            <SocialMedia/>

            <div className="app__wrapper app__flex">
                <Component />

                <div className="copyright">
                    <p className="p-text">@2022 Sasanka</p>
                    <p className="p-text">copyright reserved.</p>
                </div>                
            </div>
            <NavigateDotes active={idName}/>
       </div>
   </>
  )
}

export default AppWrap;