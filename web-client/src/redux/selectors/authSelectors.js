import { createSelector } from 'reselect'

export const getAuthError = createSelector(
  state => state.auth.authError,
  authError => authError
)
