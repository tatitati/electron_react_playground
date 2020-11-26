import React from 'react';
import Navbar from '../components/Navbar';
import JoinedChats from '../components/JoinedChats';
import AvailableChats from '../components/AvailableChats';
import ViewTitle from '../components/shared/ViewTitle';

export default function Home(){
    return (
        <div className='content-wrapper'>
          <Navbar/>
          {/* ########## NAVBAR END ############ */}
          <div className="row no-gutters fh">
            <div className="col-3 fh">              
                <JoinedChats/>         
            </div>
            <div className="col-9 fh">
              {/* ########## CHAT NAME CONTAINER START ############ */}
              <ViewTitle/>
              {/* ########## CHAT NAME CONTAINER END ############ */}
              <div className="container-fluid">                
                <AvailableChats/>                   
              </div>
            </div>
          </div>
        </div>
      )
}