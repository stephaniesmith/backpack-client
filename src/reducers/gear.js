
const initialState = [{
  name: 'R1',
  brand: 'Patagonia',
  type: 'clothes',
  weight: 5
},
{
  name: 'Lone Peak 3.5',
  brand: 'Altras',
  type: 'shoes',
  weight: 4.5
}];

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    default:
      return state;
  }
}
