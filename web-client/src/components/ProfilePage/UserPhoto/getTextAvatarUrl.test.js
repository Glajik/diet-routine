import getTextAvatarUrl from './getTextAvatarUrl'

test('Should work', () => {
  // Normal usage
  expect(getTextAvatarUrl('John Doe')).toContain('?name=John+Doe')
  expect(getTextAvatarUrl('John')).toContain('?name=John&length=1')
  // Should work too
  expect(getTextAvatarUrl('  John   Doe  MD')).toContain('?name=John+Doe')
  expect(getTextAvatarUrl('      John    ')).toContain('?name=John&length=1')
  // Should work even with empty value
  expect(getTextAvatarUrl('')).toContain('?background=random')
  expect(getTextAvatarUrl()).toContain('?background=random')
})
