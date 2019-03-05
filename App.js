import React from 'react';
import Router from './src/components/Router'
import AppContext from './src/components/AppContext'



export default class App extends React.Component {
  render() {
    return (
      <AppProvider>
        <Router/>
      </AppProvider>
    );
  }
}



class AppProvider extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      profile: {
        name:'',
        cuisines:[],
        allergies:[],
        profileId:this.uniqid()
      },
      socket:null,
      table:null,
      setProfileName:(name) => {
        this.state.profile.name = name
      },
      setTable:(num) => {
        this.state.table = num
      },
      setProfileCuisines:(cuisines) => {
        this.state.profile.cuisines = cuisines
      },
      setProfileAllergies:(allergies) => {
        this.state.profile.allergies = allergies
      },
      setProfile: (profile) => {
        this.state.profile = profile
      },
      setSocket: (socket) => {
        this.state.socket = socket
      }
    }
  }

  uniqid = (a = "",b = false) => {
    var c = Date.now()/1000;
    var d = c.toString(16).split(".").join("");
    while(d.length < 14){
      d += "0";
    }
    var e = "";
    if(b){
      e = ".";
      var f = Math.round(Math.random()*100000000);
      e += f;
    }
    return a + d + e;
  }


  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    )
  }
}
