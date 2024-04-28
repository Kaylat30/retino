import React from 'react';
import { View, Text ,TouchableOpacity, Image} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';


// Component for general information paragraph
const GeneralInfo = () => {
  return (
    <ScrollView style={{ flex: 1 ,padding:20}}>
      <Text style={{ fontSize: 20, }}>Types of Diabetics</Text>
      <Text style={{ fontSize: 20 }}>What is diabetes?</Text>
      <Text style={{ fontSize: 20 }}>
      Diabetes is a condition that happens when your blood sugar (glucose) is too high. It develops when your pancreas doesn’t make enough insulin or any at all, or when your body isn’t responding to the effects of insulin properly. Diabetes affects people of all ages. Most forms of diabetes are chronic (lifelong), and all forms are manageable with medications and/or lifestyle changes.
      Glucose (sugar) mainly comes from carbohydrates in your food and drinks. It’s your body’s go-to source of energy. Your blood carries glucose to all your body’s cells to use for energy.
      When glucose is in your bloodstream, it needs help — a “key” — to reach its final destination. This key is insulin (a hormone). If your pancreas isn’t making enough insulin or your body isn’t using it properly, glucose builds up in your bloodstream, causing high blood sugar (hyperglycemia).
      Over time, having consistently high blood glucose can cause health problems, such as heart disease, nerve damage and eye issues.
      The technical name for diabetes is diabetes mellitus. Another condition shares the term “diabetes” — diabetes insipidus — but they’re distinct. They share the name “diabetes” because they both cause increased thirst and frequent urination. Diabetes insipidus is much rarer than diabetes mellitus.

      </Text>
      <Text style={{ fontSize: 20 }}>What are the types of diabetes?</Text>
      <Text style={{ fontSize: 20 }}>There are several types of diabetes. The most common forms include:</Text>
      
      <FlatList
          data={[
            { key: 'Type 2 diabetes: With this type, your body doesn’t make enough insulin and/or your body’s cells don’t respond normally to the insulin (insulin resistance). This is the most common type of diabetes. It mainly affects adults, but children can have it as well.' },
            { key: 'Prediabetes: This type is the stage before Type 2 diabetes. Your blood glucose levels are higher than normal but not high enough to be officially diagnosed with Type 2 diabetes.' },
            { key: 'Type 1 diabetes: This type is an autoimmune disease in which your immune system attacks and destroys insulin-producing cells in your pancreas for unknown reasons. Up to 10% of people who have diabetes have Type 1. It’s usually diagnosed in children and young adults, but it can develop at any age.' },
            { key: 'Gestational diabetes: This type develops in some people during pregnancy. Gestational diabetes usually goes away after pregnancy. However, if you have gestational diabetes, you’re at a higher risk of developing Type 2 diabetes later in life.' },
          ]}
          renderItem={({ item }) => {
            return (
              <View style={{ marginBottom: 10 }}>
                <Text style={{ fontSize: 20 }}>{`\u2022 ${item.key}`}</Text>
              </View>
            );
          }}
        />
      <Text>Other types of diabetes include:</Text>
  
      <FlatList
          data={[
            { key: 'Type 3c diabetes: This form of diabetes happens when your pancreas experiences damage (other than autoimmune damage), which affects its ability to produce insulin. Pancreatitis, pancreatic cancer, cystic fibrosis and hemochromatosis can all lead to pancreas damage that causes diabetes. Having your pancreas removed (pancreatectomy) also results in Type 3c.' },
            { key: 'Latent autoimmune diabetes in adults (LADA): Like Type 1 diabetes, LADA also results from an autoimmune reaction, but it develops much more slowly than Type 1. People diagnosed with LADA are usually over the age of 30.' },
            { key: 'Maturity-onset diabetes of the young (MODY): MODY, also called monogenic diabetes, happens due to an inherited genetic mutation that affects how your body makes and uses insulin. There are currently over 10 different types of MODY. It affects up to 5% of people with diabetes and commonly runs in families.' },
            { key: 'Neonatal diabetes: This is a rare form of diabetes that occurs within the first six months of life. It’s also a form of monogenic diabetes. About 50% of babies with neonatal diabetes have the lifelong form called permanent neonatal diabetes mellitus. For the other half, the condition disappears within a few months from onset, but it can come back later in life. This is called transient neonatal diabetes mellitus.' },
            { key: 'Brittle diabetes: Brittle diabetes is a form of Type 1 diabetes that’s marked by frequent and severe episodes of high and low blood sugar levels. This instability often leads to hospitalization. In rare cases, a pancreas transplant may be necessary to permanently treat brittle diabetes.' },
          ]}
          renderItem={({ item }) => {
            return (
              <View style={{ marginBottom: 10 }}>
                <Text style={{ fontSize: 20 }}>{`\u2022 ${item.key}`}</Text>
              </View>
            );
          }}
        />
    </ScrollView>
  );
};

// Component for technology information paragraph
const TechnologyInfo = () => {
  return (
    <ScrollView style={{ flex: 1 ,padding:20}}>
      <Text style={{ fontSize: 20 }}>Management and Treatment.</Text>
      <Text style={{ fontSize: 20 }}>How is diabetes managed?</Text>
      <Text style={{ fontSize: 20 }}>Diabetes is a complex condition, so its management involves several strategies. In addition, diabetes affects everyone differently, so management plans are highly individualized.</Text>
      <Text style={{ fontSize: 20 }}>The four main aspects of managing diabetes include:</Text>        
      <FlatList
          data={[
            { key: 'Blood sugar monitoring: Monitoring your blood sugar (glucose) is key to determining how well your current treatment plan is working. It gives you information on how to manage your diabetes on a daily — and sometimes even hourly — basis. You can monitor your levels with frequent checks with a glucose meter and finger stick and/or with a continuous glucose monitor (CGM). You and your healthcare provider will determine the best blood sugar range for you.' },
            { key: 'Oral diabetes medications: Oral diabetes medications (taken by mouth) help manage blood sugar levels in people who have diabetes but still produce some insulin — mainly people with Type 2 diabetes and prediabetes. People with gestational diabetes may also need oral medication. There are several different types. Metformin is the most common.' },
            { key: 'Insulin: People with Type 1 diabetes need to inject synthetic insulin to live and manage diabetes. Some people with Type 2 diabetes also require insulin. There are several different types of synthetic insulin. They each start to work at different speeds and last in your body for different lengths of time. The four main ways you can take insulin include injectable insulin with a syringe (shot), insulin pens, insulin pumps and rapid-acting inhaled insulin.' },
            { key: 'Diet: Meal planning and choosing a healthy diet for you are key aspects of diabetes management, as food greatly impacts blood sugar. If you take insulin, counting carbs in the food and drinks you consume is a large part of management. The amount of carbs you eat determines how much insulin you need at meals. Healthy eating habits can also help you manage your weight and reduce your heart disease risk.' },
            { key: 'Exercise: Physical activity increases insulin sensitivity (and helps reduce insulin resistance), so regular exercise is an important part of management for all people with diabetes.' },
          ]}
          renderItem={({ item }) => {
            return (
              <View style={{ marginBottom: 10 }}>
                <Text style={{ fontSize: 20 }}>{`\u2022 ${item.key}`}</Text>
              </View>
            );
          }}
        />
        <Text style={{ fontSize: 20 }}>Due to the increased risk for heart disease, it’s also important to maintain a healthy:</Text>
        <FlatList
          data={[
            { key: 'Blood pressure' },
            { key: 'Blood pressure' },
            { key: 'Cholesterol' },

          ]}
          renderItem={({ item }) => {
            return (
              <View style={{ marginBottom: 10 }}>
                <Text style={{ fontSize: 20 }}>{`\u2022 ${item.key}`}</Text>
              </View>
            );
          }}
        />
    </ScrollView>
  );
};

// Component for health information paragraph
const HealthInfo = () => {
  return (
    <ScrollView style={{ flex: 1 ,padding:20 }}>
      <View >
      <Text style={{ fontSize: 20 }}>Symptoms and Causes</Text>
      <Text style={{ fontSize: 20 }}>What are the symptoms of diabetes?</Text>
      <FlatList
          data={[
            { key: 'Increased thirst (polydipsia) and dry mouth.' },
            { key: 'Frequent urination.' },
            { key: 'Fatigue.' },
            { key: 'Blurred vision' },
            { key: 'Unexplained weight loss.' },
            { key: 'Numbness or tingling in your hands or feet.' },
            { key: 'Slow-healing sores or cuts.' },
            { key: 'Frequent skin and/or vaginal yeast infections.' },
          ]}
          renderItem={({ item }) => {
            return (
              <View style={{ marginBottom: 10 }}>
                <Text style={{ fontSize: 20 }}>{`\u2022 ${item.key}`}</Text>
              </View>
            );
          }}
        />
      <Text style={{ fontSize: 20 }}>It’s important to talk to your healthcare provider if you or your child has these symptoms.</Text>
      <Text style={{ fontSize: 20 }}>Additional details about symptoms per type of diabetes include:</Text>
      <FlatList
          data={[
            { key: 'Type 1 diabetes: Symptoms of T1D can develop quickly — over a few weeks or months. You may develop additional symptoms that are signs of a severe complication called diabetes-related ketoacidosis (DKA). DKA is life-threatening and requires immediate medical treatment. DKA symptoms include vomiting, stomach pains, fruity-smelling breath and labored breathing.' },
            { key: 'Type 2 diabetes and prediabetes: You may not have any symptoms at all, or you may not notice them since they develop slowly. Routine bloodwork may show a high blood sugar level before you recognize symptoms. Another possible sign of prediabetes is darkened skin on certain parts of your body (acanthosis nigricans).' },
            { key: 'Gestational diabetes: You typically won’t notice symptoms of gestational diabetes. Your healthcare provider will test you for gestational diabetes between 24 and 28 weeks of pregnancy.' },

          ]}
          renderItem={({ item }) => {
            return (
              <View style={{ marginBottom: 10 }}>
                <Text style={{ fontSize: 20 }}>{`\u2022 ${item.key}`}</Text>
              </View>
            );
          }}
        />
        <Text style={{ fontSize: 20 }}>What causes diabetes?</Text>
        <Text style={{ fontSize: 20 }}>Too much glucose circulating in your bloodstream causes diabetes, regardless of the type. However, the reason why your blood glucose levels are high differs depending on the type of diabetes.
        Causes of diabetes include:
        </Text>
        <FlatList
          data={[
            { key: 'Insulin resistance: Type 2 diabetes mainly results from insulin resistance. Insulin resistance happens when cells in your muscles, fat and liver don’t respond as they should to insulin. Several factors and conditions contribute to varying degrees of insulin resistance, including obesity, lack of physical activity, diet, hormonal imbalances, genetics and certain medications.' },
            { key: 'Autoimmune disease: Type 1 diabetes and LADA happen when your immune system attacks the insulin-producing cells in your pancreas.' },
            { key: 'Hormonal imbalances: During pregnancy, the placenta releases hormones that cause insulin resistance. You may develop gestational diabetes if your pancreas can’t produce enough insulin to overcome the insulin resistance. Other hormone-related conditions like acromegaly and Cushing syndrome can also cause Type 2 diabetes.' },
            { key: 'Pancreatic damage: Physical damage to your pancreas — from a condition, surgery or injury — can impact its ability to make insulin, resulting in Type 3c diabetes.' },
            { key: 'Genetic mutations: Certain genetic mutations can cause MODY and neonatal diabetes.' },
          ]}
          renderItem={({ item }) => {
            return (
              <View style={{ marginBottom: 10 }}>
                <Text style={{ fontSize: 20 }}>{`\u2022 ${item.key}`}</Text>
              </View>
            );
          }}
        />
    </View>
    </ScrollView>
  );
};

// Component for education information paragraph
const EducationInfo = () => {
  return (
    <ScrollView style={{ flex: 1 ,padding:20 }}>
      <Text style={{ fontSize: 20 }}>Diabetes can lead to acute (sudden and severe) and long-term complications — mainly due to extreme or prolonged high blood sugar levels.</Text>
      <Text style={{ fontSize: 20 }}>Acute diabetes complications
      Acute diabetes complications that can be life-threatening include:
      </Text>
      <FlatList
          data={[
            { key: 'Hyperosmolar hyperglycemic state (HHS): This complication mainly affects people with Type 2 diabetes. It happens when your blood sugar levels are very high (over 600 milligrams per deciliter or mg/dL) for a long period, leading to severe dehydration and confusion. It requires immediate medical treatment' },
            { key: 'Diabetes-related ketoacidosis (DKA): This complication mainly affects people with Type 1 diabetes or undiagnosed T1D. It happens when your body doesn’t have enough insulin. If your body doesn’t have insulin, it can’t use glucose for energy, so it breaks down fat instead. This process eventually releases substances called ketones, which turn your blood acidic. This causes labored breathing, vomiting and loss of consciousness. DKA requires immediate medical treatment' },
            { key: 'Severe low blood sugar (hypoglycemia): Hypoglycemia happens when your blood sugar level drops below the range that’s healthy for you. Severe hypoglycemia is very low blood sugar. It mainly affects people with diabetes who use insulin. Signs include blurred or double vision, clumsiness, disorientation and seizures. It requires treatment with emergency glucagon and/or medical intervention.' },

          ]}
          renderItem={({ item }) => {
            return (
              <View style={{ marginBottom: 10 }}>
                <Text style={{ fontSize: 20 }}>{`\u2022 ${item.key}`}</Text>
              </View>
            );
          }}
        />
        <Text style={{ fontSize: 20 }}>Long-term diabetes complications</Text>
        <Text style={{ fontSize: 20 }}>Blood glucose levels that remain high for too long can damage your body’s tissues and organs. This is mainly due to damage to your blood vessels and nerves, which support your body’s tissues.
        Cardiovascular (heart and blood vessel) issues are the most common type of long-term diabetes complication. They include:
        </Text>
        <FlatList
          data={[
            { key: 'Coronary artery disease' },
            { key: 'Heart attack.' },
            { key: 'Stroke.' },
            { key: 'Atherosclerosis.' },
            { key: 'Nerve damage (neuropathy), which can cause numbness, tingling and/or pain.' },
            { key: 'Nephropathy, which can lead to kidney failure or the need for dialysis or transplant.' },
            { key: 'Retinopathy, which can lead to blindness.' },
            { key: 'Skin infections.' },
          ]}
          renderItem={({ item }) => {
            return (
              <View style={{ marginBottom: 10 }}>
                <Text style={{ fontSize: 20 }}>{`\u2022 ${item.key}`}</Text>
              </View>
            );
          }}
        />
    </ScrollView>
  );
};

// Component for finance information paragraph
const FinanceInfo = () => {
  return (
    <View style={{padding:20}}>
      <Text style={{ fontSize: 20 }}>This is the sports information paragraph.</Text>
      <Text style={{ fontSize: 20 }}>If you haven’t been diagnosed with diabetes, you should see a healthcare provider if you have any symptoms of diabetes, such as increased thirst and frequent urination.</Text>
      <Text style={{ fontSize: 20 }}>If you have diabetes, you should see your provider who helps you manage diabetes (such as an endocrinologist) regularly.</Text>
      <Text style={{ fontSize: 20 }}>A note from Retino.</Text>
      <Text style={{ fontSize: 20 }}>Being diagnosed with diabetes is a life-changing event, but it doesn’t mean you can’t live a happy and healthy life. Managing diabetes involves consistent care and diligence. While it’ll likely be very overwhelming at first, over time you’ll get a better grasp on managing the condition and being in tune with your body.</Text>
      <Text style={{ fontSize: 20 }}>Be sure to see your healthcare provider(s) regularly. Managing diabetes involves a team effort you’ll want medical professionals, friends and family on your side. Don’t be afraid to reach out to them if you need help.</Text>
    </View>
  );
};

// Component for sports information paragraph
const SportsInfo = () => {
  return (
    <View style={{padding:20}}>
      <Text style={{ fontSize: 20 }}>How is diabetes diagnosed?</Text>
      <Text style={{ fontSize: 20 }}>Healthcare providers diagnose diabetes by checking your glucose level in a blood test. Three tests can measure your blood glucose level:</Text>
      <FlatList
          data={[
            { key: 'Random blood glucose test: “Random” means that you can get this test at any time, regardless of if you’ve fasted.' },
            { key: 'Fasting blood glucose test: For this test, you don’t eat or drink anything except water (fast) for at least eight hours before the test. As food can greatly affect blood sugar, this test allows your provider to see your baseline blood sugar.' },
            { key: 'A1c: This test, also called HbA1C or glycated hemoglobin test, provides your average blood glucose level over the past two to three months.' },

          ]}
          renderItem={({ item }) => {
            return (
              <View style={{ marginBottom: 10 }}>
                <Text style={{ fontSize: 20 }}>{`\u2022 ${item.key}`}</Text>
              </View>
            );
          }}
        />
    </View>
  );
};

// Component for food information paragraph
const FoodInfo = () => {
  return (
    <ScrollView style={{ flex: 1 ,padding:20}}>
      <Text style={{ fontSize: 20 }}>How can I prevent diabetes??</Text>
      <Text style={{ fontSize: 20 }}>You can’t prevent autoimmune and genetic forms of diabetes. But there are some steps you can take to lower your risk for developing prediabetes, Type 2 diabetes and gestational diabetes, including:</Text>

      <FlatList
          data={[
            { key: 'Eat a healthy diet, such as the Mediterranean diet.' },
            { key: 'Get physically active. Aim for 30 minutes a day at least five days a week.' },
            { key: 'Work to achieve a weight that’s healthy for you.' },
            { key: 'Manage your stress.' },
            { key: 'Limit alcohol intake.' },
            { key: 'Get adequate sleep (typically 7 to 9 hours) and seek treatment for sleep disorders.' },
            { key: 'Quit smoking' },
            { key: 'Take medications as directed by your healthcare provider to manage existing risk factors for heart disease.' },
          ]}
          renderItem={({ item }) => {
            return (
              <View style={{ marginBottom: 10 }}>
                <Text style={{ fontSize: 20 }}>{`\u2022 ${item.key}`}</Text>
              </View>
            );
          }}
        />
        <Text style={{ fontSize: 20 }}>It’s important to note that there are some diabetes risk factors you can’t change, such as your genetics/family history, age and race. Know that Type 2 diabetes is a complex condition that involves many contributing factors.</Text>
    </ScrollView>
  );
};

// Component for travel information paragraph
const TravelInfo = () => {
  return (
    <View>
      <Text>This is the travel information paragraph.</Text>
    </View>
  );
};

// Component for fashion information paragraph
const FashionInfo = () => {
  return (
    <View>
      <Text>This is the fashion information paragraph.</Text>
    </View>
  );
};

// Component for music information paragraph
const MusicInfo = () => {
  return (
    <View>
      <Text>This is the music information paragraph.</Text>
    </View>
  );
};

export default function EducInfo({ route }) {
  const { text } = route.params;

  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  const renderParagraph = () => {
    switch (text) {
      case 'Diabetic Types':
        return <GeneralInfo />;
      case 'Management and Treatment.':
        return <TechnologyInfo />;
      case 'Symptoms and Causes':
        return <HealthInfo />;
      case 'Diabetes Complications':
        return <EducationInfo />;
      case 'Living With':
        return <FinanceInfo />;
      case 'Diagnosis and Tests':
        return <SportsInfo />;
      case 'Prevetion':
        return <FoodInfo />;
      case 'Travel':
        return <TravelInfo />;
      case 'Fashion':
        return <FashionInfo />;
      case 'Music':
        return <MusicInfo />;
      default:
        return null;
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity style={{margin:20}} onPress={handleGoBack}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      {renderParagraph()}
    </View>
  );
}
