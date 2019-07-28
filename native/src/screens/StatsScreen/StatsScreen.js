import React from 'react';
import { ScrollView, StatusBar, Dimensions, Text, View } from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
} from 'react-native-chart-kit';
import {
  data,
  contributionData,
  pieChartData,
  progressChartData,
} from './data';

export class StatsScreen extends React.Component {
  static navigationOptions = {
    title: 'Статистика',
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, backgroundColor: 'powderblue' }}>
          <Text>Пройденное расстояние, (км)</Text>
          <LineChart
            data={{
              labels: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь'],
              datasets: [
                {
                  data: [
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                  ],
                },
              ],
            }}
            width={Dimensions.get('window').width} // from react-native
            height={220}
            chartConfig={{
              backgroundColor: '#e26a00',
              backgroundGradientFrom: '#fb8c00',
              backgroundGradientTo: '#ffa726',
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16,
              },
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
          />
        </View>
        {/* <View style={{ flex: 1, backgroundColor: 'skyblue' }} />
        <View style={{ flex: 1, backgroundColor: 'steelblue' }} /> */}
      </View>
    );
  }
}
