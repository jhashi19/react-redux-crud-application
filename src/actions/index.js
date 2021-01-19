// actionとはjavascriptのobject{type: value}
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

// actionを返す関数(action creator)
export const increment = () => ({
    type: INCREMENT
});

export const decrement = () => ({
    type: DECREMENT
});
