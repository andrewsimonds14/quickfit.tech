import types from './types';
import initialState from './initialState';

// eslint-disable-next-line
export default (state = initialState, { type, payload }) => {
	switch (type) {
		case types.UPDATE_BUDDY_INFO: {
			//const { user } = payload;
			return {
				...state,
				buddies: {
					...state.buddies,
				},
			};
		}
		// Default
		default: {
			return state;
		}
	}
};
