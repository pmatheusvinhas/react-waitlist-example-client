import { useState } from 'react'
import './App.css'

// Import the WaitlistForm from the local react-waitlist package
// In a real application, you would use: import { WaitlistForm } from 'react-waitlist';
import WaitlistForm from '../../../src/components/WaitlistForm'

function App() {
  // Simulated database function
  const saveToDatabase = async (data: any) => {
    console.log('Saving to database:', data);
    // In a real app, this would be an API call to your backend
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true, id: 'user_' + Math.random().toString(36).substr(2, 9) });
      }, 1000);
    });
  };

  return (
    <div className="app-container">
      <header>
        <h1>React Waitlist Example</h1>
        <h2>Client-Side Direct Usage</h2>
        <p>This example demonstrates using the WaitlistForm component with direct callbacks to handle form submissions.</p>
      </header>

      <main>
        <div className="form-container">
          <WaitlistForm 
            title="Join Our Waitlist"
            description="Be the first to know when we launch our new product."
            submitText="Join Now"
            fields={[
              {
                name: 'email',
                type: 'email',
                label: 'Email',
                required: true,
                placeholder: 'your@email.com',
              },
              {
                name: 'firstName',
                type: 'text',
                label: 'First Name',
                required: false,
                placeholder: 'John',
              },
              {
                name: 'company',
                type: 'text',
                label: 'Company',
                required: false,
                placeholder: 'Acme Inc.',
              }
            ]}
            onSubmit={(data: { formData: any }) => {
              console.log('Form submitted:', data.formData);
            }}
            onSuccess={async (data: { formData: any }) => {
              // Handle the form submission yourself
              try {
                const result = await saveToDatabase(data.formData);
                console.log('Saved successfully:', result);
                return { success: true, data: result };
              } catch (error) {
                console.error('Error saving data:', error);
                throw new Error('Failed to save data');
              }
            }}
            onError={(data: { error: any }) => {
              console.error('Error:', data.error);
            }}
          />
        </div>
      </main>

      <footer>
        <p>This is an example of using React Waitlist with direct callbacks.</p>
        <p>
          <a href="https://github.com/pmatheusvinhas/react-waitlist" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </p>
      </footer>
    </div>
  )
}

export default App
