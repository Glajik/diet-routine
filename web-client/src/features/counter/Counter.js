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
import { path } from 'ramda'
import styles from './Counter.module.css'

const collection = 'counters'
const document = 'first'
const firestoreDocPath = `${collection}/${document}`

function Counter({ current, increment, decrement, data }) {
  useFirestoreConnect([collection])

  const [incrementAmount, setIncrementAmount] = useState('2')

  if (!isLoaded(data)) {
    return <div>Loading...</div>
  }

  if (isEmpty(data)) {
    return <div>No data</div>
  }

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
        <span className={styles.value}>{current}</span>
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
    </div>
  )
}

const firestoreDataSelector = state => state.firestore.data

const mapStateToProps = state => {
  const data = firestoreDataSelector(state)
  const selectValue = path([collection, document, 'value'])
  return {
    data,
    current: selectValue(data),
    isLoading: !isLoaded(data),
    noData: isEmpty(data),
  }
}

const updateCounterValue = ({ firestore, current }, delta) =>
  firestore.update(firestoreDocPath, { value: current + delta })

// Order is important
const enhance = compose(
  withHandlers({
    increment: props => (value = 1) => updateCounterValue(props, value),
    decrement: props => (value = -1) => updateCounterValue(props, value),
  }),
  connect(mapStateToProps),
  withFirestore
)

export default enhance(Counter)
