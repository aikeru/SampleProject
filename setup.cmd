pushd evaluator
call npm install
popd

pushd generator
call npm install
popd

call npm install

.\node_modules\.bin\gulp babel