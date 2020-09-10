import React, { useState } from 'react'
import { connect } from 'react-redux'
import { withHandlers } from 'recompose'
import {
  useFirestoreConnect,
  isLoaded,
  isEmpty,
  withFirestore,
} from 'react-redux-firebase'
import { compose } from 'redux'
import p from 'prop-types'
import { path } from 'ramda'
import styles from './Counter.module.css'
import { signOut } from '../../redux/actions/authActions'


const collection = 'counters'
const document = 'first'
const firestoreDocPath = `${collection}/${document}`

const Loading = () => <div>Loading...</div>
const Empty = () => <div>No data</div>

function Counter({ value, increment, decrement, loading, empty, signOut }) {
  useFirestoreConnect([collection])

  const [incrementAmount, setIncrementAmount] = useState('2')


  if (loading) return <Loading />
  if (empty) return <Empty />

    return (
      <div>
        <div className={styles.row}>
          <button
            type="button"
            className={styles.button}
            aria-label="Increment value"
            onClick={() => increment()}>
            +
        </button>
          <span className={styles.value}>{value}</span>
          <button
            type="button"
            className={styles.button}
            aria-label="Decrement value"
            onClick={() => decrement()}>
            -
        </button>
        </div>
        <div className={styles.row}>
          <input
            className={styles.textbox}
            aria-label="Set increment amount"
            value={incrementAmount}
            onChange={e => setIncrementAmount(e.target.value)}
          />
          <button
            type="button"
            className={styles.button}
            onClick={() => increment(Number(incrementAmount) || 0)}>
            Add Amount
        </button>
          <button
            type="button"
            className={styles.asyncButton}
            onClick={() => increment(Number(incrementAmount) || 0)}>
            Add Async
        </button>
        </div>
        <div className={styles.row}>
          <button
            type="button"
            className={styles.button}
            aria-label="Decrement value"
            onClick={signOut}>
            Log Out
        </button>
        </div>
      </div>
    )
  //}
}

Counter.propTypes = {
  value: p.number,
  increment: p.func.isRequired,
  decrement: p.func.isRequired,
  loading: p.bool,
  empty: p.bool,
}

Counter.defaultProps = {
  value: 0,
  loading: false,
  empty: true,
}

const firestoreDataSelector = state => state.firestore.data

const mapStateToProps = state => {
  const data = firestoreDataSelector(state)
  const selectValue = path([collection, document, 'value'])
  return {
    loading: !isLoaded(data),
    empty: isEmpty(data),
    value: selectValue(data)
  }
}

const updateCounterValue = ({ firestore, value }, delta) =>
  firestore.update(firestoreDocPath, { value: value + delta })

// Order is important
const enhance = compose(
  withFirestore,
  connect(mapStateToProps),
  withHandlers({
    increment: props => (delta = 1) => updateCounterValue(props, delta),
    decrement: props => (delta = -1) => updateCounterValue(props, delta),
  })
)

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(enhance(Counter))
