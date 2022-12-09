//! ■ OTHER ALTERANTIVE
  //! you can also write down the line 5 like this: 'const PropsManagement = (props) => {'
  //! and modify the line 10 to: '<p> → The value a sent from the App.js is: {props.valueSent} </p>'

const PropsManagement = ({valueSent}) => {

  return (
    <>
      <h3>■ Props Management: from Parent to Child</h3>
      <p> → The value a sent from the App.js is: {valueSent} </p>
    </>
  )
}

export default PropsManagement