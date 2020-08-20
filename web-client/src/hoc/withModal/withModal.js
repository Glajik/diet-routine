import React from 'react'
import {connect} from 'react-redux'
import Backdrop from '../../components/UI/Backdrop'
import Modal from '../../components/UI/Modal'
import {hideModal} from '../../redux/actions/modalAction'

const withModal = (Cmp) => {
  const wrappedComponent = (props) => {
    return (
      <>
        <Backdrop
          show={props.isModal}
          clicked={props.hideModal}/>
        <Modal
          message={props.message}
          show={props.isModal}
          clicked={props.hideModal}/>
        <Cmp {...props}/>
      </>
    )
  }

  const mapStateToProps = (state) => {
    return {
      isModal: state.modal.isModal,
      message: state.modal.message
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      hideModal: () => dispatch(hideModal())
    }
  }

  return connect(mapStateToProps, mapDispatchToProps)(wrappedComponent)
}

export default withModal