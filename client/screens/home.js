
import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { LineChart, BarChart, PieChart, ProgressChart, ContributionGraph, StackedBarChart } from 'react-native-chart-kit';
import { getAllEyeScreenings, getAllCheckups } from '../api';

// FoodCat component to display recommended foods
const FoodCat = ({ name, ImageUri, calories }) => {
  return (
    <View style={{ height: 120, width: 180, marginLeft: 20, borderWidth: 0.5, borderColor: '#ddddd', position: 'relative' }}>
      <Image source={ImageUri} style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }} />
      <View style={{ position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: 'rgba(0,0,0,0.5)', padding: 5, flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ color: '#ffffff', fontWeight: 'bold' }}>{name}</Text>
        <Text style={{ color: '#ffffff', fontWeight: 'bold' }}>{calories} Calories</Text>
      </View>
    </View>
  );
};

export default function Home() {
  const [eyeScreenings, setEyeScreenings] = useState([]);
  const [checkups, setCheckups] = useState([]);

  useEffect(() => {
    // Fetch eye screenings data
    const fetchEyeScreenings = async () => {
      try {
        const data = await getAllEyeScreenings();
        console.log("Fetching eye",data)
        setEyeScreenings(data);
      } catch (error) {
        console.error('Error fetching eye screenings:', error.message);
      }
    };

    // Fetch checkups data
    const fetchCheckups = async () => {
      try {
        const data = await getAllCheckups();
        console.log("Fetching checkups",data)
        setCheckups(data);
      } catch (error) {
        console.error('Error fetching checkups:', error.message);
      }
    };

    fetchEyeScreenings();
    fetchCheckups();
  }, []);

  const eyeScreeningsData = eyeScreenings.map(item => ({
    date: new Date(item.date),
    intraocular: item.intraocular,
    risk: item.risk,
    serum: item.serum
  }));

  // Filter checkups data to extract date and glucose
  const checkupsData =  checkups.map(item => ({
    date: new Date(item.date),
    urinalysis: item.urinalysis,
    hemoglobin: item.hemoglobin,
    glucose: item.glucose
  }));


  // Calculate the average of the last 5 glucose levels
  const last5GlucoseLevels = checkupsData.slice(-5).map(item => item.glucose);
  const averageGlucose = last5GlucoseLevels.reduce((acc, curr) => acc + curr, 0) / last5GlucoseLevels.length;

  // Function to recommend nutrition based on glucose levels
  const recommendNutrition = (glucoseLevel) => {
    if (glucoseLevel < 70) {
      return [
        { name: 'Fish', ImageUri: require('../assets/splash.png'), calories: 200 },
        { name: 'Eggs', ImageUri: require('../assets/splash.png'), calories: 150 },
        { name: 'Milk', ImageUri: require('../assets/splash.png'), calories: 100 },
        { name: 'Juice', ImageUri: require('../assets/splash.png'), calories: 120 }
      ];
    } else if (glucoseLevel >= 70 && glucoseLevel <= 140) {
      return [
        { name: 'Vegetables', ImageUri: require('../assets/splash.png'), calories: 80 },
        { name: 'Chicken', ImageUri: require('../assets/splash.png'), calories: 250 },
        { name: 'Salad', ImageUri: require('../assets/splash.png'), calories: 150 },
        { name: 'Yogurt', ImageUri: require('../assets/splash.png'), calories: 120 }
      ];
    } else {
      return [
        { name: 'Nuts', ImageUri: require('../assets/splash.png'), calories: 180 },
        { name: 'Whole Grain Bread', ImageUri: require('../assets/splash.png'), calories: 160 },
        { name: 'Avocado', ImageUri: require('../assets/splash.png'), calories: 200 },
        { name: 'Quinoa', ImageUri: require('../assets/splash.png'), calories: 220 }
      ];
    }
  };

  // Function to generate data for Pie Chart
  // const generatePieChartData = () => {
  //   const lastCheckup = checkupsData[checkupsData.length - 1];
  //   return [
  //     { name: 'Urinalysis', value: lastCheckup.urinalysis, color: '#FF6347' }, // Red color
  //     { name: 'Hemoglobin', value: lastCheckup.hemoglobin, color: '#00FFFF' }, // Cyan color
  //     { name: 'Glucose', value: lastCheckup.glucose, color: '#FFD700' } // Gold color
  //   ];
  // };
  

  // const pieChartConfig = {
  //   backgroundColor: '#e26a00',
  //   backgroundGradientFrom: '#fb8c00',
  //   backgroundGradientTo: '#ffa726',
  //   color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  //   style: {
  //     borderRadius: 16
  //   },
  //   propsForLabels: {
  //     fontSize: 12
  //   },
  //   propsForDots: {
  //     r: "6",
  //     strokeWidth: "2",
  //     stroke: "#ffa726"
  //   }
  // };

  // // Function to generate data for Progress Chart
  // const generateProgressChartData = () => {
  //   return {
  //     labels: ['Urinalysis', 'Hemoglobin', 'Glucose'],
  //     data: [20, 5, 100]
  //   };
  // };

  // // Function to generate data for Contribution Graph
  // const generateContributionGraphData = () => {
  //   const eyeScreeningDataPoints = eyeScreeningsData.map(item => ({
  //     date: item.date,
  //     count: 1, // Plot each eye screening date with 10 dots
  //     color: '#00FF00' // Green color for eye screenings
  //   }));
  
  //   const checkupDataPoints = checkupsData.map(item => ({
  //     date: item.date,
  //     count: 1, // Plot each checkup date with 10 dots
  //     color: '#FF0000' // Red color for checkups
  //   }));
  
  //   // Merge eye screening and checkup data points
  //   const allDataPoints = [...eyeScreeningDataPoints, ...checkupDataPoints];
  //   console.log(allDataPoints)
  
  //   return allDataPoints;
  // };
  
  

  // // Function to generate data for Stacked Bar Chart
  // const generateStackedBarChartData = () => {
  //   return {
  //     labels: checkupsData.map(item => item.date.toDateString()),
  //     legend: ['Dose 1', 'Dose 2'],
  //     data: [
  //       checkupsData.map(item => item.urinalysis),
  //       checkupsData.map(item => item.hemoglobin),
  //       checkupsData.map(item => item.glucose)
  //     ],
  //     barColors: ["#dfe4ea", "#ced6e0", "#a4b0be"]
  //   };
  // };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center', paddingBottom: 90 }}>
      <View style={{ alignItems: 'center' }}>
        {/* Line Chart */}
        <Text style={{ fontSize: 18, marginBottom: 10 }}>Glucose Levels Over Time</Text>
        <LineChart
          data={{
            labels: checkupsData.map(item => item.date.toDateString()),
            datasets: [{ data: checkupsData.map(item => item.glucose) }]
          }}
          width={300}
          height={450}
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
          verticalLabelRotation={45}
        />

        {/* Bar chart */}
        <Text style={{ fontSize: 18, marginBottom: 10 }}>Risk Levels Trend</Text>
        <BarChart
          data={{
            labels: eyeScreeningsData.map(item => item.date.toDateString()),
            datasets: [{ data: eyeScreeningsData.map(item => item.risk) }]
          }}
          width={300}
          height={600}
          yAxisSuffix="%"
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
          verticalLabelRotation={90}
        />

        <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
          <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
            Nutrition For You
          </Text>
          <View style={{ height: 130, marginTop: 20 }}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              {recommendNutrition(averageGlucose).map((food, index) => (
                <FoodCat key={index} name={food.name} ImageUri={food.ImageUri} calories={food.calories} />
              ))}
            </ScrollView>
          </View>
        </View>

        {/* Pie Chart }
        <Text style={{ fontSize: 18, marginBottom: 10 }}>Latest Checkup Details</Text>
        <PieChart
          data={generatePieChartData()}
          width={300}
          height={200}
          chartConfig={pieChartConfig}
          accessor="value"
          backgroundColor="transparent"
          paddingLeft="15"
        />

        {/* Progress Chart }
        <Text style={{ fontSize: 18, marginBottom: 10 }}>Progress Chart</Text>
        <ProgressChart
          data={generateProgressChartData()}
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

        {/* Contribution Graph }
        <Text style={{ fontSize: 18, marginBottom: 10 }}>Contribution Graph</Text>
        <ContributionGraph
          values={generateContributionGraphData()}
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

        {/* Stacked Bar Chart }
        <Text style={{ fontSize: 18, marginBottom: 10 }}>Stacked Bar Chart</Text>
        <StackedBarChart
          data={generateStackedBarChartData()}
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
        />*/}

      </View>
    </ScrollView>
  );
}
