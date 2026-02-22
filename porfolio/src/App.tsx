import { useState } from 'react'
import { Button } from './components/ui/button'
import { Box, Heading, Text, VStack } from '@chakra-ui/react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Box className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-8">
      <VStack gap={6}>
        <Heading size="2xl" className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
          Vite + React + Tailwind + Chakra V3
        </Heading>

        <Box className="p-6 bg-slate-800 rounded-xl shadow-xl w-full max-w-md text-center">
          <Button 
            colorPalette="teal"
            size="lg"
            onClick={() => setCount((count) => count + 1)}
            className="w-full mb-4"
          >
            Count is {count}
          </Button>
          <Text className="text-slate-400">
            Edit <code className="bg-slate-700 px-2 py-1 rounded">src/App.tsx</code> and save to test HMR
          </Text>
        </Box>
      </VStack>
    </Box>
  )
}

export default App
