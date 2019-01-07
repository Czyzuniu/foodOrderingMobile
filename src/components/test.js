// import React, {Component} from 'react';
// import PropTypes from 'prop-types';
//
// class Test extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name:'Hashir',
//       age:20
//     }
//   }
//
//   edit() {
//     //submit to server or whatever
//   }
//
//
//   render() {
//
//     const noedit = (
//       return <p>You cannot edit this</p>
//     )
//
//     const edit = (
//     return <div>
//       <p>You can edit this</p>
//       <input onChange={() => {
//         this.setState({
//           name: e.target.value
//         })
//       }}
//       <input onChange={() => {
//         this.setState({
//           age: e.target.value
//         })
//       }}
//       <button onPress={this.edit}></button>
//     </div>
//     )
//
//     return (
//       <div>
//         {!this.props.edit ? noedit : edit}
//       </div>
//     );
//   }
// }
//
// Test.propTypes = {};
//
// export default Test;