## Bash

### Substrings
    foo="barfoobarfoobaroof"
    "${foo:0:3}" # bar
    "${foo:(-3):3}" # oof
