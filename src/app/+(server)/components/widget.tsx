import { LinearGradient } from 'expo-linear-gradient';
import { useLoaderData } from 'expo-router';
import React from 'react';
import { View } from 'react-native';

import { Card } from '@/components/card';

export async function loader() {
  // Fetch data from an API, database, or any server-side source
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  return response.json();
}

export default function WidgetContent() {
  const data = useLoaderData<typeof loader>();
  return (
    <View
      style={{
        width: 340,
        height: 220,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#a5b4fc',
        shadowColor: '#6366f1',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.18,
        shadowRadius: 24,
        elevation: 12,
        overflow: 'hidden',
      }}
    >
      <LinearGradient
        colors={['#f0f4ff', '#a5b4fc', '#fff']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          padding: 24,
          width: '100%',
          height: '100%',
        }}
      >
        <Card
          style={{
            fontSize: 20,
            color: '#1e293b',
            fontWeight: '700',
            textAlign: 'center',
            textShadowColor: '#e0e7ff',
            textShadowOffset: { width: 0, height: 1 },
            textShadowRadius: 4,
          }}
          data={data}
        />
      </LinearGradient>
    </View>
  );
}
