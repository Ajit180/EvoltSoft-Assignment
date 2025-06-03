
import AppRoutes from '@/Routes'
import './App.css'
import { QueryClientProvider , QueryClient} from '@tanstack/react-query'

function App() {
 
  const queryClient= new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
     <AppRoutes/>
     </QueryClientProvider>
    
  )
}

export default App
