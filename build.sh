set -e

elm make src/Main.elm --output build/demo.js

postcss stylesheets/index.css -o build/styles.css

cp index.html build/index.html

