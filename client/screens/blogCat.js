// import React from 'react';
// import { View, Text, Image } from 'react-native';

// export default function BlogCat({ name, ImageUri }) {
//   return (
//     <View style={{ height: 120, width: 180, marginLeft: 20, borderWidth: 0.5, borderColor: '#ddddd', position: 'relative' }}>
//       <Image source={ImageUri} style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }} />
//       <View style={{ position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: 'rgba(0,0,0,0.5)', padding: 5 }}>
//         <Text style={{ color: '#ffffff', fontWeight: 'bold' }}>{name}</Text>
//       </View>
//     </View>
//   );
// }


import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

export default function BlogCat({ name, ImageUri, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{ height: 120, width: 180, marginLeft: 20, borderWidth: 0.5, borderColor: '#ddddd', position: 'relative' }}>
        <Image source={ImageUri} style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }} />
        <View style={{ position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: 'rgba(0,0,0,0.5)', padding: 5 }}>
          <Text style={{ color: '#ffffff', fontWeight: 'bold' }}>{name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
