const initialWagonState = {
    supplies: 100,
    distance: 0,
    days: 0
}

const reduce = (state = initialWagonState, action) => {
    switch (action.type) {

        case 'gather' : {
            return{
                ...state, 
                supplies: state.supplies + 15,
                distance: state.distance,
                days: state.days + 1
            }
        }

        case 'travel' : {
        
            let positive = {
                ...state,
                supplies: state.supplies - (20 * action.payload),
                distance: state.distance + (10 * action.payload),
                days: action.payload
            }

            let negative = {
                ...state,
                supplies: state.supplies,
                distance: state.distance,
                days: action.payload
            }

            if(action.payload < 0){
                return negative; 
            }
            else{
                return positive;
            }
        }

        case 'tippedWagon' : {
            return{
                ...state,
                supplies: state.supplies - 30,
                distance: state.distance,
                days: state.days + 1
            }
        }

        default: {
            return state;
        }
    }
}

const travelWag = {
    type: 'travel',
    payload: 1
  };

const stop = {
    type: 'gather', 
  };

  const spill = {
    type: 'tippedWagon',
  };

  const threeDay = {
    type: 'travel',
    payload: 3
  }

let wagon = reduce(undefined, {});
     wagon = reduce(wagon, travelWag);
     wagon = reduce(wagon, stop);
     wagon = reduce(wagon, spill);
     wagon = reduce(wagon, threeDay);


console.log(wagon);


