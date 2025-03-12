# React Waitlist Example - Client-Side Direct Usage

This example demonstrates how to use the `WaitlistForm` component from the `react-waitlist` package in a Vite React application with direct callbacks to handle form submissions.

## Features

- Client-side React application built with Vite
- Direct integration with your own backend or database
- TypeScript support
- No proxy server required

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/pmatheusvinhas/react-waitlist-example-client.git
cd react-waitlist-example-client
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser to see the result.

## How It Works

This example uses the `WaitlistForm` component from the `react-waitlist` package with custom callbacks to handle form submissions. Instead of using the built-in Resend integration, it demonstrates how to handle the form data yourself and integrate with your own backend or database.

```jsx
import { WaitlistForm } from 'react-waitlist';

function App() {
  // Simulated database function
  const saveToDatabase = async (data) => {
    console.log('Saving to database:', data);
    // In a real app, this would be an API call to your backend
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true, id: 'user_' + Math.random().toString(36).substr(2, 9) });
      }, 1000);
    });
  };

  return (
    <div>
      <WaitlistForm 
        title="Join Our Waitlist"
        description="Be the first to know when we launch."
        submitText="Join Now"
        fields={[
          {
            name: 'email',
            type: 'email',
            label: 'Email',
            required: true,
          },
          {
            name: 'firstName',
            type: 'text',
            label: 'First Name',
            required: false,
          }
        ]}
        onSubmit={({ formData }) => {
          console.log('Form submitted:', formData);
        }}
        onSuccess={async ({ formData }) => {
          // Handle the form submission yourself
          try {
            const result = await saveToDatabase(formData);
            console.log('Saved successfully:', result);
            return { success: true, data: result };
          } catch (error) {
            console.error('Error saving data:', error);
            throw new Error('Failed to save data');
          }
        }}
        onError={({ error }) => {
          console.error('Error:', error);
        }}
      />
    </div>
  );
}
```

## Advantages of This Approach

- **Simplicity**: No need to set up proxy endpoints or additional server-side code.
- **Control**: Full control over how form data is processed and stored.
- **Integration**: Easy integration with your existing backend systems.

## Use Cases

This approach is ideal for:

- Applications with existing backend APIs
- When you want to store waitlist data in your own database
- When you need custom validation or processing logic
- When you're not using Resend for email management

## Production Deployment

For production deployment, you would typically:

1. Build the client-side application:

```bash
npm run build
```

2. Deploy the built files (in the `dist` directory) to a static hosting service.

3. Ensure your backend API is properly set up to receive the form submissions.

## Learn More

- [React Waitlist Documentation](https://github.com/pmatheusvinhas/react-waitlist)
- [Vite Documentation](https://vitejs.dev/guide/)

## License

MIT
