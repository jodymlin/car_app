import React, {Component} from 'react';
import ScrollPicker from 'react-native-wheel-scroll-picker';

export default class HourPicker extends Component {
 
    render() {
        return(
             <ScrollPicker
                  dataSource={[
                       '0',
                       '1',
                       '2',
                       '3',
                       '4',
                       '5',
                       '6',
                       '7',
                       '8',
                       '9',
                       '10',
                       '11',
                       '12',
                       '13',
                       '14',
                       '15',
                       '16',
                       '17',
                       '18',
                       '19',
                       '20',
                       '21',
                       '22',
                       '23',
                       '24',
                       '25',
                       '26',
                       '27',
                       '28',
                       '29',
                       '30',
                       '31',
                       '32',
                       '33',
                       '34',
                       '35',
                       '36',
                       '37',
                       '38',
                       '39',
                       '40',
                       '41',
                       '42',
                       '43',
                       '44',
                       '45',
                       '46',
                       '47',
                       '48',
                       '49',
                       '50',
                       '51',
                       '52',
                       '53',
                       '54',
                       '55',
                       '56',
                       '57',
                       '58',
                       '59',
                       '60',
                  ]}
                  selectedIndex={0}
                  renderItem={(data, index, isSelected) => {
                      //
                  }}
                  onValueChange={(data, selectedIndex) => {
                      this.props.onValueChange(data, selectedIndex);
                  }}
                  wrapperHeight={100}
                  wrapperWidth={70}
                  wrapperBackground={'#FFFFFF'}
                  itemHeight={60}
                  highlightColor={'#d8d8d8'}
                  highlightBorderWidth={2}
                  activeItemColor={'#222121'}
                  itemColor={'#B4B4B4'}
                />
        )
    }
}