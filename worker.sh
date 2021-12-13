OUT_DIR=$1
CORE=$2
MODE=$3

export MODE=$MODE
export CORE=$CORE
 
EXEC="tsc && node $OUT_DIR/$CORE $MODE"
NODEMON_ARGS="--watch "app" --ext "ts,json" --exec $EXEC"
rimraf ./$1

nodemon $NODEMON_ARGS
