import { StatusBar } from 'expo-status-bar';
import { Text, View, SafeAreaView } from 'react-native';

export default function App() {
  return (
   <SafeAreaView className='h-full'>
			<View className = 'pt-12 items-center'>
				<View className = 'bg-blue-200 px-3 py-1 rounded-full'>
					<Text className = 'text-blue-800 font-semibold'>
						Hello Tailwind
					</Text>
				</View>
			</View>
		</SafeAreaView>
  );
}
