#!/bin/bash

# Note about sed regex
# \( ... \) means ( ... )
# \0 mean all input string and \1 means first substring
# .* means any symbol

echo "Comment import/export instructions:"

for FILE in $(find -L src/ -type f -name '*.js')
do
  echo "Comment file $FILE"
  sed -i 's:^import :// import :' $FILE
  sed -i '/^export default/! s:^export :/* export */ :' $FILE
  sed -i 's:^export default :// export default :' $FILE
done
