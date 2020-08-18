import React, { useState } from 'react'
import { useSelector } from 'react-redux'

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

function Counter(props) {
  const { firestore } = props
  useFirestoreConnect([collection])

  const select = path([collection, document, 'value'])
  const data = useSelector(state => state.firestore.data)
  const count = select(data)

  const updateOn = delta =>
    firestore.update(`${collection}/${document}`, { value: count + delta })

  const increment = (value = 1) => updateOn(value)
  const decrement = (value = -1) => updateOn(value)

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
        <span className={styles.value}>{count}</span>
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

export default compose(withFirestore)(Counter)
