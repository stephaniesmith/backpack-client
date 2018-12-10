import { connect } from 'react-redux';
import { getGear } from '../../services/gear';
import GearList from '../../components/gear/GearList';


const mapStateToProps = state => ({
  list: [{
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
  }]
});

const mapDispatchToProps = dispatch => ({
  fetch: () => dispatch(getGear())
});

export default connect(mapStateToProps, mapDispatchToProps)(GearList);

