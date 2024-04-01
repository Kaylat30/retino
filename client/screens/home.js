import React from 'react';
import { View, Text, Image,ScrollView } from 'react-native';
import { LineChart, BarChart, PieChart, ProgressChart, ContributionGraph, StackedBarChart } from 'react-native-chart-kit';

const sampleData = [
  { date: '2024-01-01', glucoseLevel: 120, insulinDose: 5 },
  { date: '2024-01-02', glucoseLevel: 130, insulinDose: 6 },
  { date: '2024-01-03', glucoseLevel: 125, insulinDose: 4 },
  // { date: '2024-01-04', glucoseLevel: 120, insulinDose: 5 },
  // { date: '2024-01-05', glucoseLevel: 130, insulinDose: 1 },
  // { date: '2024-01-06', glucoseLevel: 125, insulinDose: 4 },
  // { date: '2024-01-07', glucoseLevel: 120, insulinDose: 7 },
  // { date: '2024-01-08', glucoseLevel: 130, insulinDose: 3 },
  // { date: '2024-01-09', glucoseLevel: 125, insulinDose: 4 },
  // { date: '2024-01-10', glucoseLevel: 120, insulinDose: 2 },
  // { date: '2024-01-11', glucoseLevel: 130, insulinDose: 6 },
  // { date: '2024-01-12', glucoseLevel: 125, insulinDose: 4 },
  
];

export default function Home() {

  const FoodCat = ({name,ImageUri,calories})=>{
    return(
      <View style={{ height: 120, width: 180, marginLeft: 20, borderWidth: 0.5, borderColor: '#ddddd', position: 'relative' }}>
      <Image source={ImageUri} style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }} />
      <View style={{ position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: 'rgba(0,0,0,0.5)', padding: 5, flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ color: '#ffffff', fontWeight: 'bold' }}>{name}</Text>
        <Text style={{ color: '#ffffff', fontWeight: 'bold' }}>{calories} Calories</Text>
      </View>
    </View>
    )
  }
  const glucoseLevels = sampleData ? sampleData.map(item => item.glucoseLevel) : [];
  const dates = sampleData ? sampleData.map(item => item.date) : [];
  const insulinDoses = sampleData ? sampleData.map(item => item.insulinDose) : []; 
  
  const targetCalories = 2000; // Example target calorie goal
  const currentCalories = 1500; // Example current calorie intake

  const progress = (currentCalories / targetCalories) * 100;

  const ProgressChartdata = {
    labels: ['Progress'],
    data: [progress / 100], // Convert progress to a value between 0 and 1
  };
//   console.log("Glucose Levels:", glucoseLevels);
// console.log("Dates:", dates);
// console.log("Insulin Doses:", insulinDoses);

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={{ alignItems: 'center' }}>
        {/* Line Chart */}
        <Text style={{ fontSize: 18, marginBottom: 10 }}>Glucose Levels Trend</Text>
        <LineChart
          data={{
            labels: dates,
            datasets: [{ data: glucoseLevels }]
          }}
          width={300}
          height={200}
          yAxisSuffix=" mg/dL"
          yAxisInterval={1}
          chartConfig={{
            backgroundColor: '#e26a00',
            backgroundGradientFrom: '#fb8c00',
            backgroundGradientTo: '#ffa726',
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16
            }
          }}
          style={{ marginBottom: 20 }}
        />

        {/* Bar Chart */}
        <Text style={{ fontSize: 18, marginBottom: 10 }}>Glucose Levels Over Time</Text>
        <BarChart
          data={{
            labels: dates,
            datasets: [{ data: glucoseLevels }]
          }}
          width={300}
          height={200}
          yAxisSuffix=" mg/dL"
          yAxisInterval={1}
          chartConfig={{
            backgroundColor: '#e26a00',
            backgroundGradientFrom: '#fb8c00',
            backgroundGradientTo: '#ffa726',
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16
            }
          }}
          style={{ marginBottom: 20 }}
        />

        <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
          <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
            Nutrition For You
          </Text>
          <View style={{ height: 130, marginTop: 20 }}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <FoodCat ImageUri={require("../assets/splash.png")} name="Fish" calories={22}/>
              <FoodCat ImageUri={require("../assets/splash.png")} name="Eggs" calories={22}/>
              <FoodCat ImageUri={require("../assets/splash.png")} name="Milk" calories={22}/>
              <FoodCat ImageUri={require("../assets/splash.png")} name="Juice" calories={22} />
            </ScrollView>
          </View>
        </View>

        {/* Pie Chart */}
        <Text style={{ fontSize: 18, marginBottom: 10 }}>Insulin Doses Distribution</Text>
        <PieChart
          data={insulinDoses.map((value, index) => ({ name: `Day ${index + 1}`, value }))}
          width={300}
          height={200}
          chartConfig={{
            backgroundColor: '#e26a00',
            backgroundGradientFrom: '#fb8c00',
            backgroundGradientTo: '#ffa726',
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16
            }
          }}
          accessor="value"
          backgroundColor="transparent"
          paddingLeft="15"
        />

        {/* Progress Chart */}       
        <Text style={{ fontSize: 18, marginBottom: 10 }}>Progress Chart</Text>
        <ProgressChart
          data={ProgressChartdata}
          width={350}
          height={200}
          chartConfig={{
            backgroundColor: '#e26a00',
            backgroundGradientFrom: '#fb8c00',
            backgroundGradientTo: '#ffa726',
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16
            }
          }}
        />
          

        {/* Contribution Graph */}
        <Text style={{ fontSize: 18, marginBottom: 10 }}>Contribution Graph</Text>
        <ContributionGraph
          values={insulinDoses.map((value, index) => ({ date: new Date(dates[index]), count: value }))}
          endDate={new Date()}
          numDays={90}
          width={300}
          height={200}
          chartConfig={{
            backgroundColor: '#e26a00',
            backgroundGradientFrom: '#fb8c00',
            backgroundGradientTo: '#ffa726',
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16
            }
          }}
          style={{ marginBottom: 20 }}
        />

        {/* Stacked Bar Chart */}
        <Text style={{ fontSize: 18, marginBottom: 10 }}>Stacked Bar Chart</Text>
        <StackedBarChart
          data={{
            labels: dates,
            legend: ['Dose 1', 'Dose 2'],
            data: [
              insulinDoses
              
            ],
            barColors: ["#dfe4ea", "#ced6e0", "#a4b0be"]
          }}
          width={300}
          height={200}
          chartConfig={{
            backgroundColor: '#e26a00',
            backgroundGradientFrom: '#fb8c00',
            backgroundGradientTo: '#ffa726',
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16
            }
          }}
          style={{ marginBottom: 20 }}
        />


      </View>
    </ScrollView>
  );
}




